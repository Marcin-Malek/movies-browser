import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CameraIcon } from "../../images/camera.svg"
import { ReactComponent as MagnifyingGlass } from "../../images/search.svg"
import img from "../../images/search.svg";

export const NavbarContainer = styled.nav`
    max-height: 94px;
    display: flex;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.color.black};

    @media(max-width: 860px) {
        flex-wrap: wrap;
        max-height: 144px;
    }
`;

export const StyledNavbar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding-right: 7vw;

    @media(max-width: 860px) {
        padding: 0px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    padding: 8px 24px;
    gap: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    line-height: 21px;
    &.active {
        border: 1px solid;
        border-radius: 24px;
    }

    @media(max-width: 860px) {
        display: flex;
        align-items: center;
        padding: 8px 1vw;
        margin: 0px 1vw;
        border-radius: 29px;
}
`;

export const StyledCameraIcon = styled(CameraIcon)`
    g {
        opacity: 1;
    }

    @media(max-width: 860px) {
        width: 20px;
        height: 21px;
    }
`;

export const StyledPageTitle = styled.h1`
    padding: 0px 5vw 0px 16px;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: -1.5px;
    white-space: nowrap;

    color: ${({ theme }) => theme.color.white};

    @media(max-width: 860px) {
        width: 95px;
        height: 17px;
        font-size: 13px;
        line-height: 130%;
}
`;

export const Logotype = styled.span`
    display: flex;
    align-items: center;
`;

export const StyledMagnifyingGlass = styled(MagnifyingGlass)`
    opacity: 0.5;
`;

export const StyledSearchBox = styled.input`
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 33px;
    height: 40px;
    width: 25vw;
    min-width: 282px;
    text-indent: 17%;

    background-image: url(${img});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 25px center;

    ::placeholder{
        color: ${({ theme }) => theme.color.darkerGray};
    }

    @media(max-width: 860px) {
        max-width: 90vw;
        padding: 0px;
        text-indent: 14%;
        background-position: 17px center;
        background-size: 14px 14px;
        font-size: 13px;
}
`;

export const SearchBoxWrapper = styled.span`
    display: flex;
    align-items: center;
    padding-right: 40px;
    
    @media(max-width: 860px) {
        padding: 16px;
        justify-content: center;
    }
`;

