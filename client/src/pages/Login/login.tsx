import React, { useState } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { UserState } from '../../redux/user/types'
import { userLogin } from '../../redux/user/actions'

type InitialState = {
  user: {
    email?: string
    password?: string
  }
}

const Login: React.FC<UserState & RouteComponentProps> = ({ ...props }) => {
  const dispatch = useDispatch()
  const [state, setState] = useState<InitialState>({
    user: { email: '', password: '' },
  })

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()
    await dispatch(userLogin(state.user as any))
    if (!props.user?.student?.email) {
      await props.history.push('/')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let user = {
      ...state.user,
      [event.currentTarget.name]: event.currentTarget.value,
    }
    setState({ user })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={state.user.email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={state.user.password}
        />
        <input type="submit" />
      </form>
      <Link to="/register">Don't have an account with us? Create one</Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      userLogin,
    },
    dispatch,
  )
}

const mapStateToProps = ({ users }: any) => ({
  user: users.user?.student,
  token: users.token,
  isAuthenticated: users.isAuthenticated,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
