import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import channels from './channels'
import users from './users'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    channels,
    users
  })

export default createRootReducer
