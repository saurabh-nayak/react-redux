import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import cookieReducer from './cookie/cookieReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  cookie:cookieReducer
})

export default rootReducer