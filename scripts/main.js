import { duplicateCollection } from '../config/database.js'

async function main() {
  await duplicateCollection('users')
}

main()
  .then(() => {
    console.log('Done')
    process.exit(0)
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
