import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Bounties from './pages/Bounties';
import NewBounty from './pages/NewBounty';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem(`jwtToken`);
  return <Route {...rest} render={(props) => (
      user
          ? <Component {...rest} {...props} />
          : <Redirect to='/login' />
      )} 
  />
}

export default function Content(props) { 
  let drilledProps = {...props}
  
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bounties/add" component={NewBounty} />
        <Route path="/bounties" component={Bounties} />
        <Route path="/signup" component={Signup} />
        <Route path='/login' render={(props) => <Login {...props} nowCurrentUser={drilledProps.nowCurrentUser} setIsAuthenticated={drilledProps.setIsAuthenticated} user={drilledProps.currentUser} /> } />
        <PrivateRoute path='/profile' component={ Profile } user={drilledProps.currentUser} />
      </Switch>
    </main>
  )
}