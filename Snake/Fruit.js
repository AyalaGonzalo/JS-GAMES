
import { TILE_SIZE } from '/enums.js'

export class Fruit {

    #size = {x: 16, y: 16}
    #pos

    constructor(pos)
    {

        this.#pos = pos
        
    }

    set posX(x)
    {
        this.#pos.x = x
    }

    set posY(y)
    {
        this.#pos.y = y
    }

    get posX()
    {
        return this.#pos.x
    }

    get posY()
    {
        return this.#pos.y
    }

    draw(ctx)
    {

     
        ctx.fillStyle = "green"
        ctx.fillRect(this.#pos.x * TILE_SIZE, this.#pos.y * TILE_SIZE, this.#size.x, this.#size.y)

    }

}