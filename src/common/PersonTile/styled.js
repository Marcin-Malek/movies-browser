import styled from "styled-components";
import profile from "../../images/profile.svg";

export const Content = styled.li`
    cursor: pointer;
    height: 100%;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: 0.2s;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(186, 199, 213, 0.9);
    }
    &:active {
        transform: scale(1.03);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 136px;
        padding: 8px;
    }
`;

export const Img = styled.img`
    border-radius: 5px;
    width: 176px;
    height: 231px;
    object-fit: cover;
    object-position: 100%;
    flex-shrink: 0;

    background-color: ${({ theme }) => theme.color.silver};
    background-image: url(${profile});
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 120px;
        height: 178px;
    }
`;

export const Name = styled.h2`
    margin: 16px 0px 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.black};;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 8px 0px 8px;
    }
`;

export const Role = styled.h3`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    margin: 0;
    color: ${({ theme }) => theme.color.darkerGray};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;