import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The images, CV and favicon already live in the repo root, so no public folder is copied.
export default defineConfig({ plugins: [react()], base: '/', publicDir: false })
