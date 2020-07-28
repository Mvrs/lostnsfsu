import React, { useState } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { AxiosResponse } from 'axios'
import { Dispatch, bindActionCreators } from 'redux'
import { userRegister } from '../../redux/user/actions'

type InitialState = {
  user: {
    first_name?: string
    last_name?: string
    email?: string
    password?: string
  }
}

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [state, setState] = useState<InitialState>({
    user: { first_name: '', last_name: '', email: '', password: '' },
  })

  const dispatch = useDispatch()

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log(state)
    await dispatch(userRegister(state.user as AxiosResponse))
    await history.push('/login')
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
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleChange}
          value={state.user.first_name}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleChange}
          value={state.user.last_name}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={state.user.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={state.user.password}
        />
        <input type="submit" />
      </form>
      <Link to="/login">Already have an account? Click here to login</Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      userRegister,
    },
    dispatch,
  )
}

export default withRouter(connect(null, mapDispatchToProps)(Register))
