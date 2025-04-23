import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import fs from 'fs';
import esbuild from 'esbuild';
import CleanCSS from 'clean-css';
const css = new CleanCSS();
import {fileURLToPath} from 'url';
import { parseTemplate } from '@beforesemicolon/site-builder'

const {writeFile, readFile, mkdir, cp, rm} = fs.promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, 'public');
const publicDirScripts = path.resolve(__dirname, 'public/scripts');
const publicDirStyles = path.resolve(__dirname, 'public/stylesheets');
const publicDirAssets = path.resolve(__dirname, 'public/assets');

try {
  // Clean and create directory
  if (fs.existsSync(publicDir)) {
    await rm(publicDir, { recursive: true, force: true });
  }
  await mkdir(publicDir, { recursive: true });
  
  await mkdir(publicDirScripts, {recursive: true});
  await mkdir(publicDirStyles, {recursive: true});
  
  await cp(
    path.resolve(__dirname, 'assets'),
    publicDirAssets,
    {recursive: true}
  );
  
  // loop the files in the templates directory using fs
  fs.readdir(path.resolve(__dirname, 'templates'), (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    
    files.forEach(async file => {
      if (file.endsWith('.json')) {
        const fileName = path.basename(file);
        const dir = path.dirname(file);
        
        // Read and parse the JSON file
        const content = await readFile(path.resolve(__dirname, 'templates', file), 'utf8');
        const page = JSON.parse(content);
        
        await mkdir(path.join(publicDir, dir), {recursive: true});
        
        for (let i = 0; i < page.scripts?.length; i++) {
          const script = page.scripts[i];
          
          if (typeof script === 'string' && script.endsWith('.js') && !script.startsWith('http')) {
            await esbuild.build({
              entryPoints: [path.resolve(__dirname, 'scripts', script)],
              minify: true,
              outfile: path.join(publicDirScripts, script),
            })
          }
        }
        
        for (let i = 0; i < page.stylesheets?.length; i++) {
          const style = page.stylesheets[i];
          
          if (typeof style === 'string' && style.endsWith('.css') && !style.startsWith('http')) {
            const content = await readFile(path.resolve(__dirname, 'stylesheets', style), 'utf8');
            
            await writeFile(path.join(publicDirStyles, style), css.minify(content).styles, 'utf-8')
          }
        }
        
        const pageContent = await parseTemplate(page, {
          prod: true,
          fetchTemplate: (id) => {
            return readFile(path.resolve(__dirname, 'templates', `${id}.json`), 'utf8')
          },
          fetchWidget: async (id) => {
            return (await import(path.resolve(__dirname, 'widgets', `${id}.js`))).default
          }
        })
        
        const pageFileName = fileName.replace('.json', '.html');
        
        await writeFile(path.join(publicDir, dir, pageFileName), pageContent)
      }
    });
  })
  
} catch (err) {
  console.error(err);
}
