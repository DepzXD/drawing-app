const clearBtn = document.querySelector('.clear');
const size = document.querySelector('.size');
const color = document.querySelector('.color');

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let isDrawing = false

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing)
canvas.addEventListener('mousemove', draw)

clearBtn.addEventListener('click', clearCanvas);

function startDrawing(e) {
  isDrawing = true
  draw(e)
}

function stopDrawing() {
  isDrawing = false
  ctx.beginPath()
}

function draw({ clientX: x, clientY: y }) {
  if (!isDrawing) return
  ctx.lineWidth = size.value
  ctx.lineCap = "round"
  ctx.strokeStyle = color.value

  ctx.lineTo(x, y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x, y)
}

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("resize", resizeCanvas)
function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
resizeCanvas()