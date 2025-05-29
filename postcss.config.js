// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [purgecss({
          content: [
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
            './public/index.html'
          ],
          css: ['./src/**/*.css'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: {
            standard: [
              'html',
              'body',
              /^slick-/, // Para estilos de Slick Carousel
              /^carousel-/, // Para estilos de carruseles
              /^react-/, // Para estilos de componentes de React
              /^Mui/, // Para estilos de Material-UI
              /^Toastify/, // Para estilos de react-toastify
              /^slick-/, // Para estilos de Slick Carousel
              /^carousel-/, // Para estilos de carruseles
              /^react-/, // Para estilos de componentes de React
              /^Mui/, // Para estilos de Material-UI
              /^Toastify/ // Para estilos de react-toastify
            ],
            deep: []
          }
        })]
      : [])
  ]
};
