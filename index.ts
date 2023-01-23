import { httpServer } from "./src/http_server";
import {WebSocketServer, createWebSocketStream} from "ws";
import parser from "./src/command_parser/index";

const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

httpServer.on('close', ()=>{
    console.log('Websocket server was closed');
    wss.close();
})


const wss = new WebSocketServer({ port: WS_PORT });



wss.on('connection', function connection(ws) {
    console.log(`Websocket start connection on ${WS_PORT} port`);
    const duplex = createWebSocketStream(ws, {
        decodeStrings: false,
    });
    duplex.on('data', async (data: Buffer) => {
        await parser(data, duplex);
    });
});

wss.on("listening", () =>
    console.log(`Websocket start listening on ${WS_PORT} port`)
);

process.on('SIGINT', () => {
    wss.close();
    console.log('Websocket Server was closed.');
    process.exit(0);
});


