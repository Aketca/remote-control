import {drawCircle} from "../figures/circle.js";
import {Rectangle} from '../figures/rectangle.js';
import {mouse} from "@nut-tree/nut-js";


const Drawing = async (inputCommand, stream) => {
    const { x, y } = await mouse.getPosition();
    if (inputCommand.includes('circle')) {
        const value = parseInt(inputCommand.slice(inputCommand.indexOf(' ') + 1));
        await drawCircle( x, y, value );
    }
    if (inputCommand.includes('rectangle')) {
        const width = parseInt(inputCommand.split(' ')[1]);
        const height = parseInt(inputCommand.split(' ')[2]);
        await Rectangle( width, height );
    }
    if (inputCommand.includes('square')) {
        const width = parseInt(inputCommand.split(' ')[1]);
        await Rectangle( width, width );
    }

    stream.write(inputCommand);

}
export default Drawing;