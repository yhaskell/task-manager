import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const logger = createLogger()


let store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger) 
)

export default store