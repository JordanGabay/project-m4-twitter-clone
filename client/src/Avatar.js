import React from "react";
import styled from "styled-components";

export default ({ src }) => {
  return <AvatarImg src={src} />;
};

export const ProfileAvatar = ({ src, size }) => {
  return <ProfileAvatarImg src={src} size={size} />;
};

const AvatarImg = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const ProfileAvatarImg = styled(AvatarImg)`
  width: ${(p) => p.size};
  border: 3px solid white;
  position: relative;
  top: 135px;
  left: 15px;
  z-index: 1;
`;
