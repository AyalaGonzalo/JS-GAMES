import { fruitNewPos } from "/Utils/fruitNewPos.js"
import { Fruit } from "/Fruit.js"
import { Snake } from '/Snake.js'
import { COLS, ROWS, TILE_SIZE } from "/enums.js"

export class World
{

    constructor()
    {

        this.fruit = new Fruit({x: 3, y: 3})
        this.snake = new Snake()
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


    }


    draw(ctx)
    {

       
        for(let col = 0; col < COLS; col++)
        {
            for(let row = 0; row < ROWS; row++)
            {

                ctx.strokeStyle = 'white'
                ctx.strokeRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE)


            }
        }

        this.fruit.draw(ctx)
        this.snake.draw(ctx)
    }

    update()
    {

        this.snake.update()

        if(this.snake.posX === this.fruit.posX && this.snake.posY === this.fruit.posY)
        {

            
            this.snake.segments = 
            {
                    x:this.snake.segments[this.snake.segments.length - 1].x, 
                    y:this.snake.segments[this.snake.segments.length - 1].y
            }

          
            let fruitPos = fruitNewPos(this.snake.segments)

            console.log(fruitPos)

            this.fruit.posX = fruitPos.x
            this.fruit.posY = fruitPos.y


        }


    }

}