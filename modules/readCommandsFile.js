const fs = require('fs')

const readCommandsFile = () => {
  data = fs.readFileSync('./input/commands.txt')
  return data.toString()
}

module.exports = readCommandsFile
