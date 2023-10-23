import React from "react";
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "./configs/actionProvider";
import MessageParser from "./configs/messageParser";
import "../chatbot/styles/App.css";
import config from "./configs/config";

const VSCodeChatbot = () => {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default VSCodeChatbot;
