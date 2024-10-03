import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'


const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (info) => dispatch(addUser(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
