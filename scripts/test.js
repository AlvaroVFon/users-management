import { writeFile, readFile, deleteFile, readLine } from '../helpers/handleFile.js'

async function init() {
  const someData = ['some', 'data', 'to', 'write']
  // const someData = { name: 'John', age: 30, city: 'New York' }

  try {
    // await writeFile('someData.txt', JSON.stringify(someData))
    // await deleteFile('someData.txt')
    const data = await readLine('someData.txt')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

init()
