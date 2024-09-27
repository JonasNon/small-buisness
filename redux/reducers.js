import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [ ...state, action.value ]
        case 'REMOVE_LISTING':
            const listings = [ ...state ]
            listings.splice(action.value, 1)
            return listings
        default:
            return state
    }
}

const makes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MAKES':
            return action.value
        case 'REMOVE_MAKE':
            const makes = [ ...state ]
            makes.splice(action.value, 1)
            return makes
        default:
            return state
    }
}

const users = (state = [], action) => {
  switch(action.type) {
      case 'ADD_USER':
        for (let i = 0; i < state.length; i++) {
          if (state[i].email == action.value.email || state[i].username == action.value.username) {
            return "ERROR USER ALREADY EXISTS"
          }
        }
          return [ ...state, action.value ]
      default:
          return state
  }
}

export default combineReducers({ user, cars, makes, users })