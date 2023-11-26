import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import vitest from 'vitest';

const testConfig: vitest.InlineConfig = {
  coverage: {
    provider: 'istanbul',
  },
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/tests/setup.ts',
};

export default defineConfig({
  plugins: [react()],
  test: testConfig,
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
