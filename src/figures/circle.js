import {Button, mouse, Point} from '@nut-tree/nut-js';

export const drawCircle = async ( x, y, radius ) => {
    let i = 0;
    let xPosition;
    let yPosition;
    let point;

    const interval = setInterval(()=>{
        if (i <= 180) {
            i = i + 6;
            if (i === 6) {
                mouse.pressButton(Button.LEFT);
            }
            xPosition =  x + radius * Math.cos(i);
            yPosition = y + radius * Math.sin(i);
            point = new Point(xPosition, yPosition);
            mouse.setPosition(point);
        } else {
            clearInterval(interval);
            mouse.releaseButton(Button.LEFT);
        }
    }, 10)
};