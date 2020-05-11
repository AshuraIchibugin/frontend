const withSass = require('@zeit/next-sass')
require('dotenv').config()

module.exports = withSass({
  cssModules: true,
})

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
                { cleanupIDs: false },
                { prefixIds: false },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}
