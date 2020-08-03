import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

//Fetching the current User
const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [relevantHomeFeed, setRelevantHomeFeed] = React.useState({});

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");
      });
  }, []);

  //Posting a new tweet

  const postNewTweet = (text) => {
    fetch(`/api/tweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: text,
      }),
    })
      .then((postResponse) => {
        return postResponse.json();
      })
      .then(() => {
        fetch(`/api/me/home-feed`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((feedResponse) => {
            return feedResponse.json();
          })
          .then((feedData) => {
            setRelevantHomeFeed(feedData);
            setStatus("loaded");
          });
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, status, postNewTweet, relevantHomeFeed }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
