import React, {useContext} from 'react';
import styled from 'styled-components';
import {CurrentUserContext} from './CurrentUserContext';

const Profile = () => {
  const {currentUser} = useContext(CurrentUserContext)
  const {
    handle,
    displayName,
    avatarSrc,

  } = currentUser
  console.table(currentUser)
  return(
    <img src={avatarSrc} />
  )
}

export default Profile;