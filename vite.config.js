import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Proxy for the first API (restaurant list)
      "/api/restaurants/list/v5": {
        target: "https://www.swiggy.com/dapi",  // Target the base URL
        changeOrigin: true,  // For cross-origin requests
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' from path
      },
      // Proxy for the second API (menu)
      "/api/menu/pl": {
        target: "https://www.swiggy.com/dapi",  // Target the base URL
        changeOrigin: true,  // For cross-origin requests
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' from path
      },
    },
  },
});
