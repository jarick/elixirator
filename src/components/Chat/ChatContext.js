import React, { createContext, useContext, useReducer } from "react"
import { nanoid } from "nanoid"
import PropTypes from "prop-types"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  messages: [
    {
      id: nanoid(),
      text: "Message #1",
      date: new Date(),
      isMessageByMe: false,
    },
    {
      id: nanoid(),
      text: "Message #2",
      date: new Date(),
      isMessageByMe: false,
    },
    {
      id: nanoid(),
      text: "Message #3",
      date: new Date(),
      isMessageByMe: true,
    },
    {
      id: nanoid(),
      text: "Message #4",
      date: new Date(),
      isMessageByMe: false,
    },
  ],
  interlocutor: {
    username: "Matt",
    avatar: "http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60",
  },
}

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage(state, { payload }) {
      state.messages.push({
        id: nanoid(),
        text: payload,
        date: new Date(),
        isMessageByMe: true,
      })
    },
  },
})

const ChatContext = createContext()

export const useChatContext = () => useContext(ChatContext)

export const { sendMessage } = slice.actions

export function getLastInterlocutorsMessageId(messages) {
  return messages.filter((item) => !item.isMessageByMe).reverse()[0]?.id
}

export function ChatProvider({ children }) {
  const value = useReducer(slice.reducer, initialState)

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
