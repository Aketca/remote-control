import {Button, mouse, right, left, down, up} from '@nut-tree/nut-js';

export const Rectangle = async (width, height) => {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height));
    await mouse.releaseButton(Button.LEFT);
}