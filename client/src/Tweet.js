import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import Avatar from "./Avatar";
import Handle from "./Handle";
import Action from "./Action";
import Icon from "react-icons-kit";
import { heart, messageSquare, repeat, share } from "react-icons-kit/feather/";
import moment from "moment";


export default ({ tweet }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const {
    author: {
      avatarSrc,
      displayName,
      handle,
    },
    isRetweeted,
    media,
    status,
  } = tweet;
  return (
    <ColTweetWrapper>
      {isRetweeted && (
        <RowRetweetWrapper>
          {currentUser.displayName} Remeowed
        </RowRetweetWrapper>
      )}
      <RowWrapper>
        <Avatar src={avatarSrc} />
        <ColWrapper>
          <RowWrapper>
            <BoldText>{displayName}</BoldText>
            <Handle handle={handle} />
            {`· ${moment(tweet.timestamp).format("MMM Do")}`}
          </RowWrapper>
          <p>{status}</p>
        </ColWrapper>
      </RowWrapper>
      <ColMediaWrapper>
        {media.length ? <MediaWrapper src={media[0].url} /> : null}
        <MediaWrapper1>
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
        </MediaWrapper1>
      </ColMediaWrapper>
    </ColTweetWrapper>
  );
};

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const RowRetweetWrapper = styled(RowWrapper)`
  margin-left: 65px;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColTweetWrapper = styled(ColWrapper)`
  border-top: 2px solid #f6f6f9;
  padding: 15px;
`;

const ColMediaWrapper = styled(ColWrapper)`
  margin-left: 90px;
`;

const MediaWrapper = styled.img`
  border-radius: 3%;
  width: 100%;
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const MediaWrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: left;
`;