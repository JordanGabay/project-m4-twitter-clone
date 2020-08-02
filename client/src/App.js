import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home.js";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import { GlobalStyles } from "./GlobalStyles";
import TweetDetails from "./TweetDetails";
import { CurrentUserContext } from "./CurrentUserContext";
import styled from 'styled-components';

const App = (props) => {
  const { currentUser, status } = React.useContext(CurrentUserContext);

  return (
    <Wrapper>
      {status === "loading" && <h2>Loading...</h2>}
      {status === "idle" && (
        <Router>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path={`/profile/${currentUser.handle}`}>
              <Profile />
            </Route>
          </Switch>
        </Router>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`

export default App;
