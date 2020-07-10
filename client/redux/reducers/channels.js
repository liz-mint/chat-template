import shortid from 'shortid'

const CREATE_CHANNEL = 'CREATE_CHANNEL'
const SET_CHANNEL = 'SET_CHANNEL'
const SEND_MESSAGE = 'SEND_MESSAGE'
const JOIN_TO_CHANNEL = 'JOIN_TO_CHANNEL'
const QUIT_CHANNEL = 'QUIT_CHANNEL'

const initialState = {
  current: 'general',
  list: [
    {
      name: 'general',
      users: ['100', '101', '102'],
      messages: []
    }
  ] // []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHANNEL: {
      return {
        ...state,
        current: action.name,
        list: [
          ...state.list,
          { name: action.name, description: action.description, users: action.users, messages: [] }
        ]
      }
    }
    case SET_CHANNEL: {
      return { ...state, current: action.name }
    }
    case JOIN_TO_CHANNEL: {
      const updatedList = state.list.map((channel) => {
        return channel.name === action.channelName
          ? { ...channel, users: [...channel.users, action.userId] }
          : channel
      })
      return {
        ...state,
        list: updatedList
      }
    }
    case QUIT_CHANNEL: {
      return {
        ...state,
        list: state.list.map((channel) => {
          return channel.name === action.channelName
            ? { ...channel, users: channel.users.filter((id) => id !== action.userId) }
            : channel
        })
      }
    }
    case SEND_MESSAGE: {
      const updatedList = state.list.map((channel) => {
        return channel.name === state.current
          ? { ...channel, messages: [...channel.messages, action.message] }
          : channel
      })
      return {
        ...state,
        list: updatedList
      }
    }
    default:
      return state
  }
}

export function createChannel(name, description = '') {
  return (dispatch, getState) => {
    const { current: user } = getState().users
    dispatch({ type: CREATE_CHANNEL, name: name.split(' ').join('-'), description, users: [user] })
  }
}

export function joinToChannel(channelName) {
  return (dispatch, getState) => {
    const { current: userId } = getState().users
    dispatch({ type: JOIN_TO_CHANNEL, channelName, userId })
  }
}

export function quitChannel(channelName) {
  return (dispatch, getState) => {
    const { current: userId } = getState().users
    dispatch({ type: QUIT_CHANNEL, channelName, userId })
  }
}

export function sendMessage(text) {
  return (dispatch, getState) => {
    const { current: userId } = getState().users
    const message = {
      id: shortid.generate(),
      userId,
      text,
      time: new Date(),
      meta: {}
    }
    dispatch({ type: SEND_MESSAGE, message })
  }
}

export function setCurrentChannel(name) {
  return { type: SET_CHANNEL, name }
}
