const withImages = require('next-images')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')
require('dotenv').config()

module.exports = withImages({})
// module.exports = withCss(
//   withSass(
//     withPurgeCss({
//       purgeCssPaths: ['components/**/*'],
//     })
//   )
// )
module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
}
