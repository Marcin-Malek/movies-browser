import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    max-width: 100%;
    height: 94px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${({theme}) => theme.color.black};
`

export const StyledNavLink = styled(NavLink)`
    display: block;
    padding: 8px 24px;
    gap: 10px;
    text-decoration: none;
    color: ${({theme}) => theme.color.white};
    font-size: 14px;
    line-height: 21px;
    &.active {
        border: 1px solid ${({theme}) => theme.color.white};
        border-radius: 24px;
    }
`

export const StyledNavbar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
`
