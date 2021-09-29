const { env } = require('./config')
const logger = require('./loaders/logger')

const main = async () => {
  logger.info(`Hello World! We are in ${env}.`)
  logger.warn('This is a warning', { tags: { tag1: 'Hello' }, tag2: 'World' })
  logger.error('This is an error', { additionalData: 'This is extra data' })
}

main()
