import React from 'react'
import {
  withRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom'
import { Home } from './pages/Home/home'
import { connect } from 'react-redux'
import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Nav from './components/nav'
// import MessageList from './components/message-list'
import Listings from './components/listings'
import EditListing from './components/edit-listing'
import { verifyUser } from './redux/user/actions'
import { RootState } from './redux/root-reducer'

const App: React.FC<RouteComponentProps<any> & RootState> = ({ ...props }) => {
  React.useEffect(() => {
    let exposedRoutes = ['/', '/register']
    const { pathname } = props.location
    if (exposedRoutes.indexOf(pathname) < 0) {
      if (!props.users.user?.student?.email) {
        props.history.push('/')
      }
    }

    // @typescript-eslint/no-unused-vars
  }, [props.history, props.users.user])

  return (
    <div className="App">
      <Nav />
      {/* <MessageList /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/listings" component={Listings} />
        <Route path="/listings/:id" component={EditListing} />
      </Switch>
    </div>
  )
}

const mapStateToProps = ({ users }: RootState) => ({ users })

export default withRouter(connect(mapStateToProps, { verifyUser })(App) as any)
