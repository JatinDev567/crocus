/// <reference types="vitest/config" />
import { createHash } from 'node:crypto'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

// One cache per checkout, outside the working tree: the tree may be mounted
// read-only, and two checkouts sharing a cache slow each other down.
const checkout = createHash('sha1').update(root).digest('hex').slice(0, 12)

export default defineConfig({
  plugins: [react()],
  cacheDir: join(tmpdir(), `crocus-vite-${checkout}`),
  resolve: { alias: { src: fileURLToPath(new URL('./src', import.meta.url)) } },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    restoreMocks: true,
    include: ['src/**/*.test.{ts,tsx}'],
    testTimeout: 30000,
    hookTimeout: 30000,
  },
})
