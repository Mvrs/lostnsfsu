import React from 'react'
// import { connect, useSelector } from 'react-redux'
// import { withRouter, RouteComponentProps } from 'react-router-dom'
// import { userLogout } from '../../redux/modules/user'
// import { RootState } from '../../redux/root-reducer'
// import { bindActionCreators, Dispatch } from 'redux'

// interface HistoryProps extends RouteComponentProps {}

/**
 *
 * ! logout.tsx is a deprecated file
 */

const Logout: React.FC = () => {
  // const logoutState = useSelector((state: RootState) => state.users)
  // console.log('logout state: ', logoutState)
  // const handleLogout = async (event: React.FormEvent): Promise<any> => {
  //   event.preventDefault()
  //   localStorage.clear()
  //   await userLogout()
  //   await history.push('/')
  // }
  // // const { isAuthenticated } = this.props
  return <></>
}

export default Logout

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return bindActionCreators(
//     {
//       userLogout,
//     },
//     dispatch,
//   )
// }

// const mapStateToProps = ({ users }: any) => ({
//   user: users.user?.student,
//   isAuthenticated: users.isAuthenticated,
// })
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout))
