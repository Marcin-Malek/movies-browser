import { Link, NavLink } from "react-router-dom";
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
    display: grid;
    grid-template-columns: 1fr 1fr 2.5fr;
    padding: 23px 16px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-row-gap: 32px;
    }
`;

export const Logotype = styled(Link)`
    display: flex;
    align-items: center;
    transition: 0.2s;
    text-decoration: none;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-row: 1;
        grid-column: 1;
    }
    
    &:hover {
        transform: scale(1.02);
        text-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
    }

    &:active {
        transform: scale(1.03);
    }
`;

export const StyledCameraIcon = styled(CameraIcon)`
    width: 40px;
    height: 40px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 20px;
        height: 20px;
    }

    path {
        stroke-width: 2.5;
    }

    g {
        opacity: 1;
    }
`;

export const StyledPageTitle = styled.h1`
    padding-left: 16px;
    font-weight: 500;
    font-size: 23px;
    line-height: 40px;
    letter-spacing: -1.5px;
    white-space: nowrap;
    margin: 0;
    color: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 16.9px;
        letter-spacing: -0.5px;
    }
`;

export const StyledNavbar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-row: 1;
        grid-column: 2;
        margin: 0;
        justify-self: end;
    }
`;

export const StyledNavLink = styled(NavLink)`
    padding: 13.5px 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    border-radius: 24px;
    transition: 0.2s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 8px 12px;
        font-size: 12px;
        line-height: 18px;
    }

    &.active {
        border: 1px solid;
    }

    &:hover{
        color: ${({ theme }) => theme.color.lightBlue};
    }

    &:active{
        color: ${({ theme }) => theme.color.blue};
    }
`;

export const StyledSearchBox = styled.input`
    width: 100%;
    height: 48px;
    max-width: 432px;
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    justify-self: end;
    text-indent: 60px;

    background-image: url(${img});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 25px center;

    ::placeholder{
        color: ${({ theme }) => theme.color.darkerGray};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        height: 44px;
        max-width: unset;
        grid-column: 1/3;
        text-indent: 40px;
        background-position: 17px center;
        background-size: 14px;
        font-size: 13px;
    }
`;

