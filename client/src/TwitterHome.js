import React from "react";
import moment from "moment";
import styled from "styled-components";
import Action from "./Action";
import Icon from "react-icons-kit";
import { heart, messageSquare, repeat, share } from "react-icons-kit/feather/";

const TwitterHomeFeed = ({ tweetFeed }) => {
  return tweetFeed.map((tweet) => {
    return (
      <Tweet>
        <TweetInfo>
          <Avatar src={tweet.author.avatarSrc} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <TweetSpan>{tweet.author.displayName}</TweetSpan>
              {tweet.author.handle && (
                <TweetSpan1>
                  @{tweet.author.handle}{" "}
                  {`· ${moment(tweet.timestamp).format("MMM Do")}`}
                </TweetSpan1>
              )}
            </div>
            <Status>{tweet.status}</Status>
          </div>
        </TweetInfo>
        <ImageWrapper>
          {tweet.media[0] && <Media src={tweet.media[0].url} />}
        </ImageWrapper>
        <MediaWrapper>
          <Action color="rgb(27, 149, 224)" size={40}>
            <Icon icon={messageSquare} />
          </Action>
          <Action color="rgb(23, 191, 99)" size={40}>
            <Icon icon={repeat} />
          </Action>
          <Action color="red" size={40}>
            <Icon icon={heart} />
          </Action>
          <Action color="grey" size={40}>
            <Icon icon={share} />
          </Action>
        </MediaWrapper>
      </Tweet>
    );
  });
};

const Tweet = styled.div`
  margin: 2rem 0;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: thin solid grey;
`;

const TweetInfo = styled.div`
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 1rem;
  opacity: 0.8;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
`;

const Status = styled.span`
  font-size: 1.5rem;
  padding: 10px;
  display: flex;
  float: left;
`;

const Media = styled.img`
  max-height: 600px;
  max-width: 800px;
  border-radius: 12px;
  object-fit: cover;
  align-items: center;
`;

const TweetSpan = styled.span`
  margin: 0 1rem;
  font-weight: bold;
  margin-top: 10px;
`;

const TweetSpan1 = styled.span`
  color: grey;
  margin-top: 10px;
`;

const MediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: left;
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export default TwitterHomeFeed;
