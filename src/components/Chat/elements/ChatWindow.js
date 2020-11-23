import React, { memo, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import dayjs from "dayjs"

import { Avatar, Box } from "@material-ui/core"

import { ChatMessage, Interlocutor } from "../chatTypes"

function ChatWindow({
  form,
  messages,
  lastInterlocutorsMessageId,
  interlocator,
}) {
  const messagesRef = useRef()
  useEffect(() => {
    const $elm = messagesRef.current

    if ($elm?.scrollTo) {
      $elm.scrollTo(0, $elm.scrollHeight)
    }
  }, [messages])

  return (
    <Box
      m="20px"
      display="flex"
      flexDirection="column"
      height="calc(100vh - 40px)"
      flexWrap="nowrap"
      justifyContent="flex-start"
      alignItems="stretch"
      alignContent="stretch"
    >
      <Box width="100%" display="flex" justifyContent="center">
        <Box display="flex" alignItems="center">
          <Avatar src={interlocator.avatar} />
          <Box marginLeft="20px" fontWeight="bold" component="span">
            {interlocator.username}
          </Box>
        </Box>
      </Box>
      <Box
        ref={messagesRef}
        height="100%"
        style={{ overflowY: "auto" }}
        paddingX="20px"
      >
        {messages.map((msg) => (
          <Box
            display="flex"
            alignItems="center"
            minHeight="50px"
            m="10px 0"
            key={msg.id}
          >
            <Box width="100px">
              {lastInterlocutorsMessageId === msg.id && (
                <Avatar src={interlocator.avatar} />
              )}
            </Box>
            <Box width="100%" textAlign={msg.isMessageByMe ? "right" : "left"}>
              <pre>{msg.text}</pre>
              <Box mt="20px" fontSize="14px" color="gray" component="span">
                {dayjs(msg.date).format("HH:mm:ss")}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {form}
    </Box>
  )
}

ChatWindow.defaultProps = {
  lastInterlocutorsMessageId: null,
}

ChatWindow.propTypes = {
  form: PropTypes.node.isRequired,
  messages: PropTypes.arrayOf(ChatMessage).isRequired,
  lastInterlocutorsMessageId: PropTypes.string,
  interlocator: Interlocutor.isRequired,
}

export default memo(ChatWindow)
