import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  // Combine environment variables
  process.env = { ...process.env, ...env };

  return {
    // ... your vite config
  plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_APP_PORT), // Example usage
    },
  };
});