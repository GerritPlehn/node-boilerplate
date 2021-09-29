const { env, logs, sentry } = require('../config')
const winston = require('winston')
const Sentry = require('winston-transport-sentry-node').default

const transports = []
if (env !== 'development') {
  sentry.environment = env
  transports.push(
    new Sentry({
      sentry: sentry,
      level: logs.level,
    })
  )
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      ),
    })
  )
}

const LoggerInstance = winston.createLogger({
  level: logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports,
})

module.exports = LoggerInstance
