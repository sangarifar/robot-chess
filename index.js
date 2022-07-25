const readCommandsFile = require('./modules/readCommandsFile')
const os = require('os')

function PLACE(X, Y, F) {
  x = X
  y = Y
  f = F
}

function MOVE() {
  if (f == Direction.NORTH && y < 4) {
    y = y + 1
  } else if (f == Direction.NORTH && y === 4) {
    console.log(
      `Piece move to north is wrong! Current place of the piece is [y=${y},x=${x}]`
    )
  } else if (f == Direction.SOUTH && y > 0) {
    y = y - 1
  } else if (f == Direction.SOUTH && y === 0) {
    console.log(
      `Piece move to south is wrong! Current place of the piece is [y=${y},x=${x}]`
    )
  } else if (f == Direction.WEST && x > 0) {
    x = x - 1
  } else if (f == Direction.WEST && x === 0) {
    console.log(
      `Piece move to west is wrong! Current place of the piece is [y=${y},x=${x}]`
    )
  } else if (f == Direction.EAST && x < 4) {
    x = x + 1
  } else if (f == Direction.EAST && x === 4) {
    console.log(
      `Piece move to east is wrong! Current place of the piece is [y=${y},x=${x}]`
    )
  }
}

function LEFT() {
  if (f == Direction.NORTH) f = Direction.WEST
  else if (f == Direction.WEST) f = Direction.SOUTH
  else if (f == Direction.SOUTH) f = Direction.EAST
  else if (f == Direction.EAST) f = Direction.NORTH
}

function RIGHT() {
  if (f == Direction.NORTH) f = Direction.EAST
  else if (f == Direction.EAST) f = Direction.SOUTH
  else if (f == Direction.SOUTH) f = Direction.WEST
  else if (f == Direction.WEST) f = Direction.NORTH
}

function REPORT() {
  console.log(`Robot now in y=${y}, x=${x}`)
}

// For better vision
const chessBoard = [
  ['00', '01', '02', '03', '04'],
  ['10', '11', '12', '13', '14'],
  ['20', '21', '22', '23', '24'],
  ['30', '31', '32', '33', '34'],
  ['40', '41', '42', '43', '44'],
]

const Direction = {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  WEST: 'WEST',
  EAST: 'EAST',
}

let x = 0
let y = 0
let f = Direction.NORTH
const strCommands = readCommandsFile()
const commands = strCommands.split(os.EOL)

for (let i = 0; i < commands.length; i++) {
  const command = commands[i]
  if (command.length <= 6) {
    if (command.toUpperCase() === 'MOVE') {
      MOVE()
    } else if (command.toUpperCase() === 'REPORT') {
      REPORT()
    } else if (command.toUpperCase() === 'RIGHT') {
      RIGHT()
    } else if (command.toUpperCase() === 'LEFT') {
      LEFT()
    }
  } else {
    placeCommand = command.split(' ')
    if (placeCommand[0].toUpperCase() === 'PLACE') {
      orderText = placeCommand[1].split(',')
      x = parseInt(orderText[0])
      y = parseInt(orderText[1])
      if (orderText[2] === 'NORTH') f = Direction.NORTH
      else if (orderText[2] === 'EAST') f = Direction.EAST
      else if (orderText[2] === 'SOUTH') f = Direction.SOUTH
      else if (orderText[2] === 'WEST') f = Direction.WEST
    }
  }
}
