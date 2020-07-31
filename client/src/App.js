import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header'
import Home from './Home.js';
import Profile from './Profile';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import {GlobalStyles} from './GlobalStyles'
import styled from 'styled-components';
import TweetDetails from './TweetDetails'

const App = (props) => {
  console.log('hello');
  return(
    <Router>
      <GlobalStyles>
      <Header/>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/notifications'><Notifications/></Route>
        <Route path='/bookmarks'><Bookmarks/></Route>
        <Route path='/tweet/:tweetId'><TweetDetails/></Route>
        <Route path='/:profileId'><Profile/></Route>
      </Switch>
      </GlobalStyles>
    </Router>
  )
}


export default App;