import { combineReducers } from 'redux'
import todos from './todos'
import forms from './forms'
import users from './users'

const rootReducer = combineReducers({
  todos,
  forms,
  users
})

export default rootReducer
