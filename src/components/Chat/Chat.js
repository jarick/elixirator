import React from "react"

import { ChatProvider } from "./ChatContext"
import ChatWindow from "./ChatWindow"
import ChatForm from "./ChatForm"

function Chat() {
  return (
    <ChatProvider>
      <ChatWindow form={<ChatForm />} />
    </ChatProvider>
  )
}

export default Chat
