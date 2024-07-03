import { drawBackground } from "./draw/drawBackground.js"

const cnv = document.getElementById('canvas')
const ctx = cnv.getContext('2d')

const tailRows = 4
const tailColumn = 4

const tailWidth = 200
const tailGap = 20

const createBackgroundBord = () => {
  for (let i = 0;  i < tailRows * tailColumn; i++) {
    const background = new drawBackground(ctx, tailGap + Math.floor(i % 4) * (tailWidth + tailGap), tailGap + Math.floor(i / 4) * (tailWidth + tailGap),tailWidth, tailWidth, 10)
    background.draw()
  }
}

createBackgroundBord()