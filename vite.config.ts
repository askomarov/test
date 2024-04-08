import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  server: {
    open: true,
  },
  root: 'src',
  build: {
    // отключена минификация файлов
    minify: false,
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        // если нужна еще страница
        about: resolve(__dirname, 'src', 'about/index.html'),
        akcii: resolve(__dirname, 'src', 'akcii/index.html'),
        akciya: resolve(__dirname, 'src', 'akcii/newbees.html'),
        tarifs: resolve(__dirname, 'src', 'tarifs/index.html'),
        tarifPensia: resolve(__dirname, 'src', 'tarifs/pensiya.html'),
        faq: resolve(__dirname, 'src', 'faq/index.html'),
        contacts: resolve(__dirname, 'src', 'contacts/index.html'),
      },
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: { quality: 75 },
    }),
  ],
});
