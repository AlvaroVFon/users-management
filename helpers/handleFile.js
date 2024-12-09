import fs from 'node:fs/promises'

const writeFile = async (filePath, content) => {
  try {
    await fs.appendFile(filePath, `${content} \n`)
  } catch (err) {
    console.error(err)
  }
}

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return data
  } catch (err) {
    console.error(err)
  }
}

const readLine = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return data.split('\n').slice(0, -1)
  } catch (err) {
    console.error(err)
  }
}

const deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath)
  } catch (err) {
    console.error(err)
  }
}

export { writeFile, readFile, deleteFile, readLine }
