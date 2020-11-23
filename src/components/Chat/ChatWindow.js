import React from "react"
import PropTypes from "prop-types"

import { getLastInterlocutorsMessageId, useChatContext } from "./ChatContext"
import Base from "./elements/ChatWindow"

function Chat({ form }) {
  const [{ messages, interlocutor }] = useChatContext()
  const lastInterlocutorsMessageId = getLastInterlocutorsMessageId(messages)

  return (
    <Base
      form={form}
      messages={messages}
      lastInterlocutorsMessageId={lastInterlocutorsMessageId}
      interlocator={interlocutor}
    />
  )
}

Chat.propTypes = {
  form: PropTypes.node.isRequired,
}

export default Chat
