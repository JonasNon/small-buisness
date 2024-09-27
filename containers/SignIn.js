import SignIn from '../components/SignIn'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'


const mapStateToProps = (state) => {
  return {
      users: state.users
  }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (info) => dispatch(addUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
