import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      layout: path.resolve(__dirname, 'src/layout'),
      modules: path.resolve(__dirname, 'src/modules'),
      types: path.resolve(__dirname, 'src/types'),
      store: path.resolve(__dirname, 'src/store'),
      config: path.resolve(__dirname, 'src/config'),
      datasources: path.resolve(__dirname, 'src/datasources'),
      utils: path.resolve(__dirname, 'src/utils')
    },
  },
})
