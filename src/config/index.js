const process = require('process')

module.exports = {
  env: process.env.VERCEL_ENV || process.env.NODE_ENV || 'development',
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    release:
      process.env.npm_package_name + '@' + process.env.npm_package_version,
  },
}
