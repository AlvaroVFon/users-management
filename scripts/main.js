import { getDocuments, queryCollection, duplicateCollection } from '../config/database.js'

const query = {
  name: 'manolito'
}

async function main () {
  await duplicateCollection('users')
}

main().then(() => {
  console.log('Done')
  process.exit(0)
}).catch(e => {
  console.error(e)
  process.exit(1)
})
