import React, {useEffect, useState} from "react";
import DemoUseReducer from "components/DemoUseReducer";
import {socket} from "socket/Socket";


function HomePage(): React.JSX.Element {
    const [isConnected, setIsConnected] = useState(socket.connected);
    useEffect(() => {

        // Update isConnected state when connection status changes
        const handleConnectionStatusChange = () => {
            setIsConnected(socket.connected);
        };
        // Set up event listeners for socket connection and disconnection
        socket.on("connect", () => handleConnectionStatusChange());
        // socket.on("disconnect", () => handleConnectionStatusChange);
        socket.emit("joinRoom", {"user_id": 8}, (res: any) => {
            console.log("Response from server:", res);
        });
        socket.on("userOnline", (...args) => {
            console.table(args)
        });
        return () => {
            socket.off("connect", () => handleConnectionStatusChange());
            socket.off("disconnect", () => handleConnectionStatusChange());
        };
    }, []);
    return (
        <>
            <DemoUseReducer/>
            <p>Socket Connection Status: {isConnected ? "Connected" : "Disconnected"}</p>
        </>
    );
}
export default HomePage