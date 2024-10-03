import SignIn from '../components/SignIn'
import { connect } from 'react-redux'
import { addUser, removeUser, fetchListings } from '../redux/actions'


const mapStateToProps = (state) => {
  return {
      user: state.user,
      listings: state.listings
  }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (info) => dispatch(addUser(info)),
    removeUser: () => dispatch(removeUser()),
    fetchListings: () => dispatch(fetchListings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
