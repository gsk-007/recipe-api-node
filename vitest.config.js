import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // Enables global test functions like `describe`, `it`, etc.
    include: ['tests/**/*.test.js'], // Include only files in the `tests` directory
    environment: 'node', // Use Node.js environment for testing
  },
})
