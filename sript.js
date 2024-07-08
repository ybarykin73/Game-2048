
import { Ceil } from "./Ceil.js"
import { Tail } from "./Tail.js"

const cnv = document.getElementById('canvas')
const ctx = cnv.getContext('2d')

const GRID_SIZE = 4
const GRID_COUNT = GRID_SIZE * GRID_SIZE

const CEIL_WIDTH = 200
const GAP = 20

const gameBoard = []

for( let i =0; i < GRID_COUNT; i++) {
  gameBoard.push(new Tail( i % GRID_SIZE, Math.floor(i / GRID_SIZE)))
}

const createBackgroundBord = () => {
  gameBoard.forEach(item => {
    const ceil = new Ceil(ctx, item.x, item.y, CEIL_WIDTH, GAP, 10)
    ceil.draw()
  })
}

createBackgroundBord()