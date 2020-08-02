import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

const Homefeed = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return <Text>{currentUser.handle}</Text>;
};

const Text = styled.div`
  margin-left: 200px;
`;

export default Homefeed;
