import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitest from 'vitest';

const testConfig: vitest.InlineConfig = {
  coverage: {
    provider: 'istanbul',
  },
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/tests/setup.ts',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: testConfig,
});
