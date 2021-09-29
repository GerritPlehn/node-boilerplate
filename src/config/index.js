const process = require('process')

module.exports = {
  env: process.env.VERCEL_ENV || process.env.NODE_ENV || 'development',
}
