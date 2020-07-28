import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/root-reducer'
import { bindActionCreators, Dispatch } from 'redux'
import { UserState } from '../redux/user/types'
import { userLogout } from '../redux/user/actions'

const Nav: React.FC<RouteComponentProps & UserState> = ({ ...props }) => {
  const loginState = useSelector((state: RootState) => state.users)

  console.log('login state: ', loginState)

  const dispatch = useDispatch()

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault()
    await dispatch(userLogout())
    await props.history.push('/')
  }

  const userLinks = (
    <nav>
      <Link to="/">Home</Link> | <Link to="/register">Register</Link> |{' '}
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </nav>
  )
  const guestLinks = (
    <nav>
      <Link to="/">Home</Link> | <Link to="/register">Register</Link> |{' '}
      <Link to="/login">Login</Link>
    </nav>
  )

  return (
    <div>
      {props.isAuthenticated && props.token !== null ? userLinks : guestLinks}
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      userLogout,
    },
    dispatch,
  )
}

const mapStateToProps = ({ users }: RootState) => ({
  user: users.user?.student,
  token: users.token,
  isAuthenticated: users.isAuthenticated,
})
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Nav as any),
)
