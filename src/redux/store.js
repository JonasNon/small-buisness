import { legacy_createStore as createStore } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import reducers from './reducers'
import state from './state'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
// import thunk from 'redux-thunk'

export default createStore(reducers, state, applyMiddleware(thunk))