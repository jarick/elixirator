import React, { useCallback } from "react"

import { sendMessage, useChatContext } from "./ChatContext"
import Base from "./elements/ChatForm"

const ChatForm = () => {
  const [, dispatch] = useChatContext()

  const handleSubmit = useCallback(
    (text) => {
      dispatch(sendMessage(text))
    },
    [dispatch]
  )

  return <Base onSubmit={handleSubmit} />
}

export default ChatForm
