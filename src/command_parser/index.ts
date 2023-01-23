import Movement from "../modules/movement";
import Drawing from "../modules/drawing";
import PrtSc from "../modules/prtsc";
import { Duplex } from 'stream';

const parser = async (data: Buffer, stream: Duplex) => {
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