import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");
console.log(socket);

const Chat = () => {
  return <h2>Hola chat</h2>;
};

export default Chat;
