const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['nuxt-underscore-module'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-underscore-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
