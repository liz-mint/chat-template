const CREATE_CHANNEL = 'CREATE_CHANNEL'
const SEND_MESSAGE = 'SEND_MESSAGE'
const JOIN_TO_CHANNEL = 'JOIN_TO_CHANNEL'
const QUIT_CHANNEL = 'QUIT_CHANNEL'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHANNEL: {
      return {
        ...state,
        list: [...state.list, { name: action.name, users: action.users, messages: {} }]
      }
    }
    default:
      return state
  }
}

export function createChannel(name, users = {}) {
  return { type: CREATE_CHANNEL, name, users }
}
