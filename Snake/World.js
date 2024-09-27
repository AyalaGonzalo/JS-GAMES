import { COLS, ROWS, TILE_SIZE } from "/enums.js"

export class World
{

    constructor()
    {

        this.map = 
        [   
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]

        this.fruit

    }


    draw(ctx)
    {

        for(let col = 0; col < COLS; col++)
        {
            for(let row = 0; row < ROWS; row++){

                ctx.strokeStyle = 'white'
                ctx.strokeRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE)


            }
        }

    }

    update()
    {

    }

}