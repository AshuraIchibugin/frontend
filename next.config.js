const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
require('dotenv').config()

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|jsx|ts|tsx)$/,
      },
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      issuer: {
        test: /\.(css|scss)$/,
      },
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: '[lang]/[name].[ext]',
      },
    })
    return config
  },
}

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
}

module.exports = withPlugins([[withCss], [withSass]], nextConfig)
