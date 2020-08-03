import React from "react";
import styled from "styled-components";

const NewTweetCalculator = ({ textInput }) => {
  if (textInput.length >= 250 && textInput.length < 280) {
    let newNum = 280 - textInput.length;
    return <IncomingLimit>{newNum}</IncomingLimit>;
  } else if (textInput.length >= 280) {
    let newNum = 280 - textInput.length;
    return <LimitReached>{newNum}</LimitReached>;
  } else {
    let newNum = 280 - textInput.length;
    return <MaxCharacters>{newNum}</MaxCharacters>;
  }
};

const MaxCharacters = styled.div`
  color: grey;
`;

const IncomingLimit = styled.div`
  color: lightyellow;
  font-weight: bold;
`;

const LimitReached = styled.div`
  color: red;
`;

export default NewTweetCalculator;
