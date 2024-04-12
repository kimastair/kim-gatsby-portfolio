const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/images': path.resolve(__dirname, 'src/images'),
        '@/data': path.resolve(__dirname, 'src/data'),
        '@/types': path.resolve(__dirname, 'src/types'),
      },
    },
  })
}
