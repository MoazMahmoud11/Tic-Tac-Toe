import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "tic-tac-toe-react/tic-tac-toe/", // Add your GitHub repo name here
});
