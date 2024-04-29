import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { name as AppName } from './package.json'

export default defineConfig((config) => {
  console.log('CWD')
  return {
    base: "./",
    plugins: [react(), {
      name: 'rename-index-html',
      enforce: 'post',
      generateBundle: (_, bundle: any) => {
        let indexFile = bundle["index.html"];
        if (indexFile) indexFile.fileName = `${AppName}.html`;
      }
    }],
    build: {
      copyPublicDir: false,
      assetsDir: '',
      minify: config.mode === 'production' ? 'esbuild' : false,
      sourcemap: config.mode === 'production' ? false : true,
      rollupOptions: {
        output: {
          entryFileNames: `js/${AppName}.js`,
        }
      }
    }
  }
})
