import imagemin from 'imagemin';
import webp from 'imagemin-webp';

// Путь к папке с исходными изображениями
const inputPath = 'src/assets/';
// Путь к папке, куда будут сохранены сконвертированные изображения
const outputPath = 'src/assets/';

void (async () => {
  await imagemin([`${inputPath}/*.{png,jpeg,jpg}`], {
    destination: outputPath,
    plugins: [
      webp({ quality: 75 }), // качество изображений WebP
    ],
  });

  console.log('PNG images converted to WebP');
})();
