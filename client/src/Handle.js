import React from "react";
import styled from "styled-components";

export default ({ handle }) => {
  return <SmallText>@{handle}</SmallText>;
};

const SmallText = styled.span`
  font-size: 90%;
  margin: 5px 0 5px 15px;
`;
