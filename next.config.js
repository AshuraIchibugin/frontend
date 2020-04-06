const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')
require('dotenv').config()

module.exports = withImages({})
module.exports = withSass(
  withPurgeCss({
    purgeCssPaths: ['components/**/*'],
  })
)
module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
}
