import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    height: 94px;
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.color.black};
`;

export const StyledNavLink = styled(NavLink)`
    padding: 8px 24px;
    gap: 10px;
    text-decoration: none;
    color: ${({theme}) => theme.color.white};
    font-size: 14px;
    line-height: 21px;
    &.active {
        border: 1px solid;
        border-radius: 24px;
    }
`;

export const StyledNavbar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0px;
`;
