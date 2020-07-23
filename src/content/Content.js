import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Bounties from './pages/Bounties';
import NewBounty from './pages/NewBounty';

export default function Content() { 
  
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bounties/add" component={NewBounty} />
        <Route path="/bounties" component={Bounties} />
        {/* TODO add new bounty page */}
      </Switch>
    </main>
  )
}