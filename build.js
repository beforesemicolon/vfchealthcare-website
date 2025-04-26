import dotenv from 'dotenv';

dotenv.config();
import path from 'path';
import fs from 'fs';
import esbuild from 'esbuild';
import CleanCSS from 'clean-css';

const css = new CleanCSS();
import {fileURLToPath} from 'url';
import {parseTemplate} from '@beforesemicolon/site-builder'

const {writeFile, readFile, readdir, mkdir, cp, rm} = fs.promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, 'public');
const publicDirScripts = path.resolve(__dirname, 'public/scripts');
const publicDirStyles = path.resolve(__dirname, 'public/stylesheets');
const publicDirAssets = path.resolve(__dirname, 'public/assets');

(async () => {
  try {
    // Clean and create directory
    if (fs.existsSync(publicDir)) {
      await rm(publicDir, {recursive: true, force: true});
    }
    await mkdir(publicDir, {recursive: true});
    
    await mkdir(publicDirScripts, {recursive: true});
    await mkdir(publicDirStyles, {recursive: true});
    
    await cp(
      path.resolve(__dirname, 'assets'),
      publicDirAssets,
      {recursive: true}
    );
    
    // loop the files in the templates directory using fs
    const files = await readdir(path.resolve(__dirname, 'templates'));
    
    const templates = await Promise.all(
      files.filter(file => file.endsWith('.json')).map(async (file) => {
        const fileName = path.basename(file)
        return {
          fileName,
          dir: path.dirname(file),
          name: fileName.replace('.json', ''),
          content: JSON.parse(await readFile(path.resolve(__dirname, 'templates', file), 'utf8'))
        }
      })
    )
    
    const templatesByName = templates.reduce((acc, temp) => ({
      ...acc,
      [temp.name]: temp
    }), {});
    
    const pageTemplates = templates.filter(({content}) => content.type === 'page');
    
    for (let {fileName, dir, name, content: page} of pageTemplates) {
      if (page.extends) {
        const base = templatesByName[page.extends];
        page = mergeObjects(base.content, page)
      }
      
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
    
  } catch (err) {
    console.error(err);
  }
})()

function mergeObjects(a, b) {
  if (a === null || typeof a !== 'object') return b;
  if (b === null || typeof b !== 'object') return b;
  
  if (Array.isArray(a) && Array.isArray(b)) {
    return Array.from(new Set([...a, ...b]));
  }
  
  const obj = Array.isArray(a) ? [...a] : {...a};
  
  for (const key in b) {
    if (b.hasOwnProperty(key)) {
      if (Array.isArray(a[key]) && Array.isArray(b[key])) {
        obj[key] = Array.from(new Set([...a[key], ...b[key]]));
      } else {
        obj[key] = mergeObjects(obj[key], b[key]);
      }
    }
  }
  
  return obj;
}
