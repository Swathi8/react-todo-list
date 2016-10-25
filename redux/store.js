import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer'

var finalStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState) {
  initialState = initialState || {todos: []}

  return finalStore(reducer, initialState)
}
