import styled from "styled-components";

export const Content = styled.div`
    width: 208px;
    height: 339px;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Img = styled.img`
    aspect-ratio: 2/3;
    border-radius: 5px;
    width: 176px;
    height: 231px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 50%;
    }
`;

export const Title = styled.h3`
    margin: 16px 0px 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.black};;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
    }
`;