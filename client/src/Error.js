import React from 'react'
import styled from 'styled-components'
import { u1F4A3 as bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import Icon from 'react-icons-kit'

export const Error = () => {
    return (
      <>
        <BombDiv>
          <IconDiv>
            <Icon size={100} icon={bomb} />
          </IconDiv>
          <ErrorTag>An unkown error has occured.</ErrorTag>
          <PleaseContact>
            Please try refreshing the page, going back, or contacting support if
            the problem persists.
          </PleaseContact>
        </BombDiv>
      </>
    );
}

const ErrorTag = styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
`
const PleaseContact = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-top: 100px;
    `

    const BombDiv = styled.div`
      align-items: center;
      display: flex;
    
    `;
   
   const IconDiv = styled.div`
   `
