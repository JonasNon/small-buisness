// require('dotenv').config();
const key = process.env.REACT_APP_API_KEY
const urlStart = `https://maps.google.com/maps/api/geocode/json?key=${key}&address=`
// const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
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
      type: 'ADD_USER',
      value: info
  }
}

export const removeUser = () => {
  return {
      type: 'REMOVE_USER'
  }
}



export const fetchListings = (address) => {
    console.log(address)
    console.log(key)
    const url = urlStart + encodeURIComponent(address)
    return (dispatch) => {
      fetch(url)
        .then(res => res.json())
        .then(response => {
          console.log(response.results[0].geometry.location)
          if (response.results && response.results.length > 0) {
            const location = response.results[0].geometry.location
            const latAction = {
              type: "FETCH_LAT",
              value: location.lat
            }
            const lngAction = {
              type: "FETCH_LNG",
              value: location.lng
            }

            dispatch(latAction)
            dispatch(lngAction)
            // const action = {
            //   type: 'FETCH_LISTINGS',
            //   value: response.results
            // }
            // dispatch(action)
            // console.log(action)
          }
        })
    }
  }





// export const fetchListings = () => {
//   return async (dispatch) => {
//     const response = await fetch('URL_TO_FETCH_LISTINGS');
//     if (!response.ok) throw new Error('Failed to fetch');
//     const listings = await response.json();
//     dispatch({
//       type: 'FETCH_LISTINGS',
//       value: listings
//     });
//   };
// };


// export const removeMake = (index) => {
//     return {
//         type: 'REMOVE_MAKE',
//         value: index
//     }
//  }