
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
        {x: 4, y: this.#pos.y},
        
    ]

    #size = {
        x: 16,
        y: 16
    }

    constructor()
    {
        this.controll = new Controll(this) 
    
    }

    get posX(){

        return this.#pos.x

    }

    get posY(){

        return this.#pos.y

    }

    set velX(x)
    {
        this.#vel.x = x
    }

    get velX()
    {
        return this.#vel.x
    }
    set velY(y)
    {
        this.#vel.y = y
    }

    get velY()
    {
        return this.#vel.y
    }

    set segments(pos){

        this.#segments.push(pos)

    }

    get segments(){

        return this.#segments

    }


    draw(ctx)
    {

        this.#segments.forEach((segment)=>{

            ctx.fillStyle = 'red'
            ctx.fillRect(segment.x * TILE_SIZE, segment.y * TILE_SIZE, this.#size.x, this.#size.y)
        
        })
        
    }

    update()
    {
       
        this.#pos.x += this.#vel.x
        this.#pos.y += this.#vel.y
        
        let prev = {
            x: this.#pos.x,
            y: this.#pos.y
        }
       
        for(let i = 0; i < this.#segments.length; i++)
        {

            let temp = { x: this.#segments[i].x, y: this.#segments[i].y}
              
            this.#segments[i].x = prev.x
            this.#segments[i].y = prev.y

            prev = temp
        }

    }

}