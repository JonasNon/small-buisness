import Listings from '../components/Listings'
import { connect } from 'react-redux'
import { addUser, fetchListings, removeListing } from '../redux/actions'


const mapStateToProps = (state) => {
  return {
      user: state.user,
      listings: state.listings
  }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (info) => dispatch(addUser()),
    removeListing: (index) => dispatch(removeListing(index)),
    fetchListings: () => dispatch(fetchListings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)
