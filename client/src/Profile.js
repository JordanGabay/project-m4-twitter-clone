import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import moment from "moment";
import { COLORS } from "./constants";
import { mapPin, calendar } from "react-icons-kit/feather";
import { Icon } from "react-icons-kit";

const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    avatarSrc,
    handle,
    displayName,
    bannerSrc,
    location,
    joined,
    bio,
    numFollowing,
    numFollowers,
    isFollowingYou,
    isBeingFollowedByYou,
  } = currentUser;
  const date = moment(joined);
  const monthYear = date.format("MMMM YYYY");
  
  return (
    <MainProfileWrapper>
      <Avatar src={avatarSrc} />
      <TopWrapper style={{ position: "relative", top: "-140px" }}>
        <Banner src={bannerSrc} />
        <TopWrapper style={{ alignItems: "flex-end", padding: "20px 15px" }}>
          <Button style={{ background: COLORS.primary }}>
            {isBeingFollowedByYou ? "Following" : "Follow"}
          </Button>
        </TopWrapper>
        <ProfileWrapper>
          <Handle className="titleFont">{displayName}</Handle>
          <RowWrapper style={{ alignItems: "center" }}>
            <SmallText>@{handle}</SmallText>
            <FollowingText>
              {isFollowingYou ? "Follows You" : "Follows you"}
            </FollowingText>
          </RowWrapper>
          <StyledSpan>{bio}</StyledSpan>
          <RowWrapper>
            <StyledSpan>
              <Icon size={15} icon={mapPin} />
              {location}
            </StyledSpan>
            <StyledSpan>
              <Icon size={15} icon={calendar} />
              Joined {monthYear}
            </StyledSpan>
          </RowWrapper>
          <RowWrapper>
            <StyledSpan>
              <Bold600>{numFollowing}</Bold600> Following
            </StyledSpan>
            <StyledSpan>
              <Bold600>{numFollowers}</Bold600> Followers
            </StyledSpan>
          </RowWrapper>
        </ProfileWrapper>
        <Button>Tweets</Button>
      </TopWrapper>
    </MainProfileWrapper>
  );
};

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainProfileWrapper = styled(TopWrapper)`
  border: 2px solid #f6f6f9;
`;

const Avatar = styled.img`
  width: 125px;
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
  top: 135px;
  left: 15px;
  z-index: 1;
`;

const Banner = styled.img`
  width: 100%;
  height: 200px;
`;

const Button = styled.button`
  align-self: flex-end;
  border: none;
  padding: 0.5rem;
  width: 100px;
  height: 50px;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 18px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Handle = styled.span`
  font-size: 22px;
  margin-left: 15px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallText = styled.span`
  font-size: 90%;
  margin: 5px 0 5px 15px;
`;

const FollowingText = styled.span`
  background: #e8e9ef;
  border-radius: 7px;
  padding: 5px;
  font-size: 80%;
  margin: 5px;
`;

const StyledSpan = styled.span`
  margin: 10px 15px;
`;

const Bold600 = styled.span`
  font-weight: 600;
`;

export default Profile;
