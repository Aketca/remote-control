import { Region, screen, mouse } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { Duplex } from 'stream';

const PrtSc = async (inputCommand: string, stream: Duplex) => {
    const { x, y } = await mouse.getPosition();

    const region = new Region(
        Math.max(0, x - 100),
        Math.max(0, y - 100),
        200,
        200
    )

    const screenShoot = await screen.grabRegion(region);
    const fixedColors = await screenShoot.toRGB();
    const image = new Jimp(200,200);
    image.bitmap.data = fixedColors.data;
    let jimpBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    const base64 = jimpBuffer.toString("base64");
    stream.write(`prnt_scrn ${base64}`);
}
export default PrtSc;