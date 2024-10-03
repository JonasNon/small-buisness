import { combineReducers } from 'redux'

// const user = (state = null) => state



const listings = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_LISTINGS':
            console.log(action)
            return action.value
        case 'REMOVE_LISTING':
            const listings = [ ...state ]
            listings.splice(action.value, 1)
            return listings
        case 'ADD_LISTING':
            return [...state, action.value];
        default:
            return state
    }
}



const map = (state = {}, action) => {
    switch(action.type) {
      case "FETCH_LAT":
        console.log("LAT_FETCH")
        return {...state, lat: action.value}
      case "FETCH_LNG":
        return {...state, lng: action.value}
      default:
        return state
    }
  }

// const listingsReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'FETCH_LISTINGS':
//         const newState = [...state];
//         action.value.forEach(fetchedListing => {
//           if (!state.some(stateListing => stateListing.id === fetchedListing.id)) {
//             newState.push(fetchedListing);
//           }
//         });
//         return newState;
//       // Other action cases...
//       default:
//         return state;
//     }
//   };

// const users = (state = [], action) => {
//   switch(action.type) {
//       case 'ADD_USER':
//         for (let i = 0; i < state.length; i++) {
//           if (state[i].email == action.value.email || state[i].username == action.value.username) {
//             return "ERROR USER ALREADY EXISTS"
//           }
//         }
//           return [ ...state, action.value ]
//       default:
//           return state
//   }
// }

const user = (state = null, action) => {
      switch(action.type) {
          case 'ADD_USER':
              return  action.value 
          case 'REMOVE_USER':
            return [ {username: null, password: null} ]
          default:
              return state
      }
    }

export default combineReducers({ user, listings, map })