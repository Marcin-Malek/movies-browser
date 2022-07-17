import styled from "styled-components";
import profile from "../../images/profile.svg";

export const Content = styled.li`
    cursor: pointer;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    transition: 0.2s;
    list-style: none;
    display: grid;
    grid-template-rows: repeat(3, min-content);
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(186, 199, 213, 0.9);
    }

    &:active {
        transform: scale(1.03);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 8px;
    }
`;

export const Img = styled.img`
    width: 100%; 
    aspect-ratio: 2/3;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.silver};
    background-image: url(${profile});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30%;
`;

export const Name = styled.h3`
    margin: 14px 0 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
    }
`;

export const Role = styled.h4`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    margin: 0;
    text-align: center;
    color: ${({ theme }) => theme.color.darkerGray};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;
