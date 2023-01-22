import Movement from "../modules/movement.js";
import Drawing from "../modules/drawing.js";
import PrtSc from "../modules/prtsc.js";

const parser = async (data, stream) => {
    const inputCommand = data.toString();
    console.log('received from client: ', inputCommand);

    if (inputCommand.includes('mouse')) {
        await Movement(inputCommand, stream);
    } else if (inputCommand.includes('draw')) {
        await Drawing(inputCommand, stream);
    } else if (inputCommand.includes('prnt')) {
        await PrtSc(inputCommand, stream)
    } else {
        console.log('err command')
    }
}

export default parser;