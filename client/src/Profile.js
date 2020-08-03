import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import moment from "moment";
import { COLORS } from "./constants";
import { mapPin, calendar } from "react-icons-kit/feather";
import { Icon } from "react-icons-kit";
import Spinner from './Spinner'



const Profile = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [profileFeedInfo ]= useState(null);
  
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

 useEffect(() => {
   const profileFeedInfo = async () => {
     try {
       const res = await fetch(`/api/${handle}/feed`)
       const data = await res.json()
     } catch (error) {
     }
   }
   profileFeedInfo()
 }, [])



  return (
    <>
      {status === "loading" && <Spinner />}
      {status === "idle" && (
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
              <BoldFont>{numFollowing}</BoldFont> Following
            </StyledSpan>
            <StyledSpan>
              <BoldFont>{numFollowers}</BoldFont> Followers
            </StyledSpan>
          </RowWrapper>
        </ProfileWrapper>
      </TopWrapper>
      <ButtonWrapper>
        <Button1>Tweets</Button1>
        <Button1>Media</Button1>
        <Button1>Likes</Button1>
        <CritterFeed critterFeed={profileFeedInfo}/>
      </ButtonWrapper>
    </MainProfileWrapper>
      )}
    </>
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

const BoldFont = styled.span`
  font-weight: 600;
`;

const Button1 = styled.button`
  background: white;
  border: none;
  color: ${COLORS.primary};
  font-size: 20px;
  display: flex;
  margin: 10px 0 0 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 25px;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  justify-content: space-between;
`;

const CritterFeed = styled.div`

`

export default Profile;
