
export function fruitNewPos(segments)
{

    let isValid = false

    let fruitPos

    while(!isValid)
    {

        let posX = Math.floor(Math.random() * 10)
        let posY = Math.floor(Math.random() * 10)
    

        fruitPos = {
            x: posX,
            y: posY
        }

        isValid = !segments.some(segment => segment.x === fruitPos.x && segment.y === fruitPos.y)


    }


    return fruitPos

}