let btn_left = document.getElementById("left");
let btn_right = document.getElementById("right");

let car = {
    currentPosition: '0',
    currentDirection: 'center',
    keyframes: {
        borderBottom: '80px solid #5C6C21',
        borderLeft: '13px solid transparent',
        borderRight: '13px solid transparent',
    }
}

btn_left.addEventListener("click", () => {
    if (car.currentDirection != 'left') {
        let [RouteKeyframes, RouteOptions] = changeRoute('left');
        let [DKeyframes, DOptions] = directionAnimation('left');
        document.getElementById("car").animate(RouteKeyframes, RouteOptions);
        document.getElementById("direction").animate(DKeyframes, DOptions);
    }
});

btn_right.addEventListener("click", () => {
    if (car.currentDirection != 'right') {
        let [RouteKeyframes, RouteOptions] = changeRoute('right');
        let [DKeyframes, DOptions] = directionAnimation('right');
        document.getElementById("car").animate(RouteKeyframes, RouteOptions);
        document.getElementById("direction").animate(DKeyframes, DOptions);
    }
});

function changeRoute(direction) {
    if (direction != 'left' & direction != 'right' & direction != 'center') {
        return console.error('this direction is not undefined');
    }

    let newDirection;
    let rotate = direction == 'left' ? '(1.5deg)' : '(-1.5deg)'

    if (direction == 'left') {
        newDirection = '-55px'
    }
    if (direction == 'right') {
        newDirection = '55px'
    }
    if (direction == 'center') {
        newDirection = '0'
    }

    let RouteKeyframes = [
        {
            marginLeft: car.currentPosition,

        },
        {
            marginLeft: newDirection,

        },
    ]

    let Routeoptions = {
        duration: 150,
        fill: "forwards",

    }

    car.currentDirection = direction;
    car.currentPosition = newDirection;

    return [RouteKeyframes, Routeoptions]
}

function directionAnimation(direction) {
    let newDirection;

    if (direction != 'left' & direction != 'right' & direction != 'center') {
        return console.error('this direction is not undefined');
    }

    if (direction == 'left') {
        newDirection = {
            borderBottom: '80px solid #5C6C21',
            borderLeft: '28px solid transparent',
            borderRight: '0px solid transparent',
        }
    }
    if (direction == 'right') {
        newDirection = {
            borderBottom: '80px solid #5C6C21',
            borderLeft: '0px solid transparent',
            borderRight: '28px solid transparent',

        }
    }
    if (direction == 'center') {
        newDirection = {
            borderBottom: '80px solid #5C6C21',
            borderLeft: '13px solid transparent',
            borderRight: '13px solid transparent',

        }
    }

    let DKeyframes = [
        newDirection
    ]

    let DOptions = {
        duration: 150,
        fill: "forwards"
    }
    return [DKeyframes, DOptions]
}