
import { WIDTH, HEIGHT } from '/enums.js'
import { Game } from '/game.js'

const canvas = document.querySelector('.test')
const ctx = canvas.getContext('2d')

canvas.width = WIDTH
canvas.height = HEIGHT

const game = new Game()


let inter = 0
let maxInter = 50

game.render(ctx);
function animate(){

    inter++
    console.log(inter)
    if(inter > maxInter){

        ctx.clearRect(0,0, canvas.width, canvas.height)
        game.render(ctx)
        inter = 0

    }

    requestAnimationFrame(animate)
   
}

requestAnimationFrame(animate)
	
