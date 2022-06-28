import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CameraIcon } from "../../images/camera.svg"
import img from "../../images/search.svg";

export const BlackBar = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.black};
`;

export const NavbarContainer = styled.nav`
    width: 1368px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    flex-wrap: wrap;
`;

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 860px) {
        width: 90vw;
        margin-top: 0;
        flex-grow: 1;
    }
`;

export const Logotype = styled.span`
    display: flex;
    align-items: center;
    margin: 27px 16px;

    @media(max-width: 860px) {
        margin-bottom: 18px;
    }
`;

export const StyledCameraIcon = styled(CameraIcon)`
    path {
        stroke-width: 2.5;
    }
    g {
        opacity: 1;
    }
    width: 40px;
    height: 40px;

    @media(max-width: 860px) {
        width: 20px;
        height: 21px;
    }
`;

export const StyledPageTitle = styled.h1`
    padding: 0 5vw 0 16px;
    font-weight: 500;
    font-size: 23px;
    line-height: 40px;
    letter-spacing: -1.5px;
    white-space: nowrap;
    margin: 0;

    color: ${({ theme }) => theme.color.white};

    @media(max-width: 860px) {
        height: 17px;
        font-size: 13px;
        line-height: 16.9px;
        letter-spacing: -0.5px;
        margin: 0;
        padding: 0 0 0 16px;
}
`;

export const StyledNavbar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;

    @media(max-width: 860px) {
        padding: 0;
        margin: 16px 28px 6px 0;
    }
`;

export const StyledNavLink = styled(NavLink)`
    padding: 13.5px 24px;
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
        justify-content: flex-end;
        padding: 8px 12px;
        border-radius: 29px;
        font-size: 12px;
        line-height: 18px;
}
`;

export const StyledSearchBox = styled.input`
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 33px;
    height: 48px;
    min-width: 282px;
    width: 22.5vw;
    margin: 16px;
    text-indent: 60px;

    background-image: url(${img});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 25px center;

    ::placeholder{
        color: ${({ theme }) => theme.color.darkerGray};
    }

    @media(max-width: 860px) {
        width: 90vw;
        height: 44px;
        padding: 0px;
        text-indent: 40px;
        background-position: 17px center;
        background-size: 14px 14px;
        font-size: 13px;
        display: flex;
        flex-grow: 1;
}
`;

