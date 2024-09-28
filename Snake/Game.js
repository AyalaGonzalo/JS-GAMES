
import { World } from '/World.js'

export class Game
{

    constructor()
    {

        this.world = new World()
    

    }

    draw(ctx)
    {

     
        this.world.draw(ctx)
        
    }

    update()
    {
        this.world.update()
      
    }
	
	render(ctx){

       
        this.draw(ctx)
        this.update()

    }
	
	
}