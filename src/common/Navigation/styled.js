import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as CameraIcon} from "../../images/camera.svg"
import {ReactComponent as MagnifyingGlass} from "../../images/search.svg"
import img from "../../images/search.svg";

export const NavbarContainer = styled.nav`
    height: 94px;
    display: flex;
    justify-content: space-evenly;
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
    padding-right: 100px;
`;

export const StyledCameraIcon = styled(CameraIcon)`
    g {
        opacity: 1;
    }
`;

export const StyledPageTitle = styled.h1`
    padding-left: 16px;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: -1.5px;

    color: ${({theme}) => theme.color.white};
`;

export const Logotype = styled.span`
    display: flex;
    align-items: center;
`;

export const StyledMagnifyingGlass = styled(MagnifyingGlass)`

    opacity: 0.5;
`

export const StyledSearchBox = styled.input`
    border: 1px solid ${({theme}) => theme.color.gray};
    border-radius: 33px;
    height: 40px;
    aspect-ratio: 9/1;
    text-indent: 17%;

    background-image: url(${img});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 25px center;

    ::placeholder{
        color: ${({theme}) => theme.color.darkerGray};
    }
`;

export const SearchBoxWrapper = styled.span`
    display: flex;
    align-items: center;
    padding-left: 22%;
    
`;

