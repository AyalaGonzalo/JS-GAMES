
import { TILE_SIZE } from '/enums.js'
import { Controll } from '/Controll.js'
export class Snake
{
    #vel = 
    {
         x: 1, 
         y: 0 
    }
    #pos = 
    {
        x: 5,
        y: 5
    }
    #segments = 
    [
        {x: this.#pos.x, y: this.#pos.y},
        {x: 4, y: this.#pos.y}
    ]

    constructor(game)
    {

        this.game = game
        this.controll = new Controll(this)
        this.size = {
            x: 16,
            y: 16
        }

    }

    set velX(x)
    {
        this.#vel.x = x
    }
    set velY(y)
    {
        this.#vel.y = y
    }

    get velX()
    {
        return this.#vel.x
    }

    get velY()
    {
        return this.#vel.y
    }

    draw(ctx)
    {

        this.#segments.forEach((segment)=>{

            ctx.fillStyle = 'red'
            ctx.fillRect(segment.x * TILE_SIZE, segment.y * TILE_SIZE, this.size.x, this.size.y)
        
        })
        
    }

    update()
    {

        this.#pos.x += this.#vel.x
        this.#pos.y += this.#vel.y       
       
        for(let i = 0; i < this.#segments.length; i++)
        {

            for(let j = i + 1; j < this.#segments.length; j++)
            {

                let prev = {
                    x: this.#segments[i].x,
                    y: this.#segments[i].y
                }

                this.#segments[i].x = this.#pos.x
                this.#segments[i].y = this.#pos.y

                this.#segments[j].x = prev.x
                this.#segments[j].y = prev.y

            }

        }

    }

}