const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addListing = (car) => {
    return {
        type: 'ADD_LISTING',
        value: car
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

export const addUser = (info) => {
  return {
      type: 'ADD_User',
      value: info
  }
}



// export const fetchMakes = () => {
//     return (dispatch) => {
//       fetch(url)
//         .then(res => res.json())
//         .then(response => {
//           const action = {
//             type: 'FETCH_MAKES',
//             value: response.Results
//           }
//           dispatch(action)
//         })
//     }
//   }

// export const removeMake = (index) => {
//     return {
//         type: 'REMOVE_MAKE',
//         value: index
//     }
//  }