
export class Controll
{

    constructor(snake)
    {
        this.snake = snake
        this.#keywordsBtn()
    }



    #keywordsBtn()
    {

     
        window.addEventListener('keydown', (e)=>{

            
            switch (e.key) 
            {
                case "a":
                case "A":
                case "ArrowLeft":
                    
                    if(this.snake.velX != 1)
                    {

                        this.snake.velX = -1
                        this.snake.velY = 0
                    
                    }
                    break
                    
                case "w":
                case "W":
                case "ArrowUp":
                    if(this.snake.velY != 1)
                    {

                        this.snake.velY = -1
                        this.snake.velX = 0
                    
                    }
                    break
                
                case "d":
                case "D":
                case "ArrowRight":
                    if(this.snake.velX != -1)
                    {
                        
                        this.snake.velX = 1
                        this.snake.velY = 0
                    
                    }
                    break
                
                case "s":
                case "S":
                case "ArrowDown":

                    if(this.snake.velY != -1){

                        this.snake.velY = 1
                        this.snake.velX = 0
                        
                    }

                    break
            }

        })

    }


}