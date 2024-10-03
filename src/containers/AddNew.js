import AddNew from '../components/AddNew'
import { connect } from 'react-redux'
import { fetchListings, addListing } from '../redux/actions'


const mapStateToProps = (state) => {
  return {
      user: state.user,
      listings: state.listings,
      map: state.map
  }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
    fetchListings: (address) => dispatch(fetchListings(address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)
