const { env } = require('./config')

const main = async () => {
  console.log(`Hello World! We are in ${env}.`)
}

main()
