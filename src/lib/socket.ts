// src/lib/socket.ts
import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001", {
    autoConnect: false,
});

export default socket;
