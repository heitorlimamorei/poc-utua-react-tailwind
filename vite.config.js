import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build : {
    lib: {
      entry: resolve(__dirname, 'src/lib/main.js'),
      formats: ['es', "umd"],
      name: 'poc-utua-react-tailwind',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  }
})
