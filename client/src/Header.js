import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from './constants';
import { ReactComponent as Logo} from './assets/logo.svg'
import { home, bookmark, bell, user } from 'react-icons-kit/feather'
import {Icon} from 'react-icons-kit';

const Header = (props) => {
    return(
        <SidebarWrapper>
            <StyledLogo/>

                <StyledLink exact to='/'>
                    <Icon size={20} icon={home}/>
                    <LinkText>Home</LinkText>
                </StyledLink>

                <StyledLink exact to='/Profile'>
                    <Icon size={20} icon={user}/>
                <LinkText>Profile</LinkText>
                </StyledLink>

                <StyledLink exact to='/Notifications'>
                    <Icon size={20} icon={bell}/>
                    <LinkText>Notifications</LinkText>
                </StyledLink>

                <StyledLink exact to='/Bookmarks'>
                    <Icon size={20} icon={bookmark}/>
                    <LinkText>Bookmarks</LinkText>
                </StyledLink>

        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
display:flex;
position: fixed;
flex-direction:column;
align-items: flex-start;
width: 200px;
`

const StyledLink = styled(NavLink)`
display: flex;
    margin: 10px 0 0 20px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 25px;
    padding: 7px 10px;
    align-items: center;
    &:visited {
        color: black;
    }
    &:hover {
        background: hsl(258deg, 100%, 50%, 0.2);
        text-decoration: none;
        color: ${COLORS.primary};
    }
    &.active {
        color: ${COLORS.primary}
    }
`

const LinkText = styled.span`
margin-left: 20px;
`


const StyledLogo = styled(Logo)`
width: 50px;
height: 100px;
margin-left: 20px;
`

export default Header;