
import { WIDTH, HEIGHT } from '/enums.js'
import { Game } from '/game.js'

const canvas = document.querySelector('.test')
const ctx = canvas.getContext('2d')

canvas.width = WIDTH
canvas.height = HEIGHT

const game = new Game()

let lastTime = 0
let inter = 0
let maxInter = 100
function animate(timeStamp){

    inter++
    console.log(inter)
    if(inter > maxInter){

        ctx.clearRect(0,0, canvas.width, canvas.height)
      
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp
    
        game.render(ctx, deltaTime)
        inter = 0

    }

    requestAnimationFrame(animate)
   
}

requestAnimationFrame(animate)
	
