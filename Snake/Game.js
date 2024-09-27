import { Snake } from '/Snake.js'
import { World } from '/World.js'

export class Game
{

    constructor()
    {

        this.world = new World()
        this.snake = new Snake(this)

    }

    draw(ctx)
    {

        this.snake.draw(ctx)
        this.world.draw(ctx)
        
    }

    update(deltaTime)
    {
        this.snake.update()
    }
	
	render(ctx, deltaTime){

       
        this.draw(ctx)
        this.update(deltaTime)

    }
	
	
}