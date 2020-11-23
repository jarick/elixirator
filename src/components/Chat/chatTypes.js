import PropTypes from "prop-types"

export const ChatMessage = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isMessageByMe: PropTypes.bool.isRequired,
})

export const Interlocutor = PropTypes.shape({
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
})
