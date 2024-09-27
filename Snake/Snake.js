
import { TILE_SIZE } from '/enums.js'

export class Snake
{
    constructor(game){

        this.game = game
        this.size = {
            x: 16,
            y: 16
        }
        this.pos = 
        {
            x: 5,
            y: 5
        }

        this.vel = 
        {
             x: 1, 
             y: 0 
        }
        this.length = 3
        this.segments = [{x: this.pos.x, y: this.pos.y},{x: 4, y: this.pos.y}]

    }

    draw(ctx)
    {

        this.segments.forEach((segment)=>{

            ctx.fillStyle = 'red'
            ctx.fillRect(segment.x * TILE_SIZE, segment.y * TILE_SIZE, this.size.x, this.size.y)
        
        })
        
    }

    update()
    {

        this.pos.x += this.vel.x
        this.pos.y += this.vel.y       
       
        for(let i = 0; i < this.segments.length; i++){

            for(let j = i + 1; j < this.segments.length; j++){

                let prev = {
                    x: this.segments[i].x,
                    y: this.segments[i].y
                }

                this.segments[i].x = this.pos.x
                this.segments[i].y = this.pos.y

                this.segments[j].x = prev.x
                this.segments[j].y = prev.y

            }

        }

    }

}