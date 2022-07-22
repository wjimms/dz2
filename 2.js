const input = document.querySelector('.one')
const button = document.querySelector('.two')

let position = 0;
let positionLeft = 0;
let positionTop = 0;
let positionBottom = 0;


const moveElement = () => {
    position += 10
    input.style.top = `${position}px`
    if(position <= 700) {
        setTimeout(() => {
            moveElement()
        }, 100);

    } else if (position = 890) {
        setTimeout(() => {
            let left = setInterval(() => {
                moveLeft()
            }, 100);
            setTimeout(() => {
                clearInterval(left)
            }, 14000);
        }, 100);
    }

    const moveLeft = () => {
        positionLeft += 10
        input.style.left = `${positionLeft}px`
    }
    
            
}

moveElement()