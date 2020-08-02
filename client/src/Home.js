import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import TwitterHome from "./TwitterHome";
import { COLORS } from "./constants";
import Spinner from './Spinner';

const { primary } = COLORS;

const Homefeed = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [tweetFeed, setTweetFeed] = useState(null);
  const { avatarSrc } = currentUser;

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((response) => response.json())
      .then((data) => {
        return data.tweetIds.map((tweetId) => {
          return data.tweetsById[`${tweetId}`];
        });
      })
      .then((answer) => {
        setTweetFeed(answer);
      });
  }, []);

  return (
      
    <MainWrapper>
      <Wrapper>
        <HomeText>Home</HomeText>
        <UserPost>
          <Avatar src={avatarSrc} />
          <TextBox placeholder="What's happening?" maxLength='280' />
          <Button>Meow</Button>
        </UserPost>
        {tweetFeed ? (
          <TwitterHome tweetFeed={tweetFeed} />
        ) : (
          <div>Loading...</div>
        )}
      </Wrapper>
    </MainWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1rem;
`;

const HomeText = styled.h1`
  margin: 1rem 0;
  box-shadow: 0 2px 2px -2px gray;
`;

const MainWrapper = styled(Wrapper)`
  border: 2px solid #f6f6f9;
`;

const UserPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  border-bottom: thin grey solid;
`;

const Avatar = styled.img`
  width: 125px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

const TextBox = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  align-self: flex-end;
  border: none;
  padding: 0.5rem;
  width: 100px;
  height: 50px;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${primary};
  border-radius: 18px;
`;

export default Homefeed;
