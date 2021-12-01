import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

export default () => {
  return defineConfig({
    plugins: [vue(), viteCompression()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '/images': 'src/assets/images',
      },
    },

    server: {
      host: '0.0.0.0',
      port: 8989,
      cors: true,
    },

    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 1000,
    },
  });
};
