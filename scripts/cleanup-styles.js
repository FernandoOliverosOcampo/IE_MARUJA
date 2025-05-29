const fs = require('fs');
const path = require('path');
const { PurgeCSS } = require('purgecss');

async function cleanStyles() {
  console.log('🔍 Analizando estilos CSS...');
  
  const purgeCSSResult = await new PurgeCSS().purge({
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html'
    ],
    css: ['./src/**/*.css'],
    safelist: {
      standard: [
        'html', 'body', 'root',
        /^slick-/, /^carousel-/, /^react-/, /^Mui-/, /^Toastify/
      ]
    }
  });

  // Crear un informe de limpieza
  let report = '## Informe de limpieza de estilos CSS\n\n';
  let totalRemoved = 0;
  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const file of purgeCSSResult) {
    const originalSize = file.originalSize || 0;
    const newSize = file.purgedSize || 0;
    const saved = originalSize - newSize;
    const savedPercentage = ((saved / originalSize) * 100).toFixed(2);
    
    totalOriginalSize += originalSize;
    totalNewSize += newSize;
    totalRemoved += saved;

    report += `### ${path.basename(file.file)}\n`;
    report += `- Tamaño original: ${(originalSize / 1024).toFixed(2)} KB\n`;
    report += `- Tamaño después de la limpieza: ${(newSize / 1024).toFixed(2)} KB\n`;
    report += `- Ahorro: ${(saved / 1024).toFixed(2)} KB (${savedPercentage}%)\n\n`;

    // Escribir el CSS optimizado
    if (file.file) {
      const dir = path.dirname(file.file);
      const ext = path.extname(file.file);
      const name = path.basename(file.file, ext);
      const optimizedPath = path.join(dir, `${name}.optimized${ext}`);
      
      fs.writeFileSync(optimizedPath, file.css);
      console.log(`✅ CSS optimizado guardado en: ${optimizedPath}`);
    }
  }

  const totalSavedPercentage = ((totalRemoved / totalOriginalSize) * 100).toFixed(2);
  
  report += '## Resumen general\n';
  report += `- Tamaño total original: ${(totalOriginalSize / 1024).toFixed(2)} KB\n`;
  report += `- Tamaño total después de la limpieza: ${(totalNewSize / 1024).toFixed(2)} KB\n`;
  report += `- Total ahorrado: ${(totalRemoved / 1024).toFixed(2)} KB (${totalSavedPercentage}%)\n`;

  // Guardar el informe
  fs.writeFileSync('./css-cleanup-report.md', report);
  console.log('📊 Informe de limpieza guardado como: css-cleanup-report.md');
  
  console.log('\n✨ Proceso de limpieza completado con éxito!');
}

// Ejecutar la limpieza
cleanStyles().catch(console.error);
