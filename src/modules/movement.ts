import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

const Movement = async (inputCommand: string, stream: Duplex) => {
    const value = parseInt(inputCommand.slice(inputCommand.indexOf(' ') + 1));
    let writeCommand = inputCommand.slice(0, inputCommand.indexOf(' '));

    if (inputCommand.includes('up')) {
        await mouse.move(up(value));
    }
    if (inputCommand.includes('down')) {
        await mouse.move(down(value));
    }
    if (inputCommand.includes('left')) {
        await mouse.move(left(value));
    }
    if (inputCommand.includes('right')) {
        await mouse.move(right(value));
    }
    if (inputCommand.includes('position')) {
        const { x, y } = await mouse.getPosition();
        writeCommand = `mouse_position ${x},${y}`;
    }

    stream.write(writeCommand);

}
export default Movement;