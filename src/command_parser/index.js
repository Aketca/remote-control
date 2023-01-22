import Movement from "../modules/movement.js";
import Drawing from "../modules/drawing.js";
import Prtsc from "../modules/prtsc.js";

const parser = async (data, stream) => {
    const inputCommand = data.toString();
    console.log('received from client: ', inputCommand);

    if (inputCommand.includes('mouse')) {
        await Movement(inputCommand, stream);
    } else if (inputCommand.includes('draw')) {
        await Drawing(inputCommand);
    } else if (inputCommand.includes('prnt')) {
        await Prtsc(inputCommand)
    } else {
        console.log('err command')
    }
}

export default parser;