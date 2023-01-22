import {drawCircle} from "../figures/circle.js";
import {mouse} from "@nut-tree/nut-js";


const Drawing = async (inputCommand, stream) => {
    if (inputCommand.includes('circle')) {
        const value = parseInt(inputCommand.slice(inputCommand.indexOf(' ') + 1));
        const { x, y } = await mouse.getPosition();
        await drawCircle( x, y, value );
    }
    if (inputCommand.includes('rectangle')) {

    }
    if (inputCommand.includes('square')) {

    }

}
export default Drawing;