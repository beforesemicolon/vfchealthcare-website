import path from 'path';
import {fileURLToPath} from 'url';
import {buildTemplates} from '@beforesemicolon/site-builder'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, 'public');

const isDevelopment =  process.env.NODE_ENV === 'development'

buildTemplates({
  publicDir,
  srcDir: __dirname,
  prod: !isDevelopment
})
  .then(() => console.log('Build complete in', publicDir))
  .catch(console.error)
