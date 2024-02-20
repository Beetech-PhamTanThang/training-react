import {io, Socket} from "socket.io-client";

const URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3000'
const socket = io(URL, {
    autoConnect: true
});
export {socket};