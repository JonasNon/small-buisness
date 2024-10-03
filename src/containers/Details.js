import Details from '../components/Details'
import { connect } from 'react-redux'
import { addUser, fetchListings } from '../redux/actions'


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
    fetchListings: (address) => dispatch(fetchListings(address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
