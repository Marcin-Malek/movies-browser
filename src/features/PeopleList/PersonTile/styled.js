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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 136px;
        height: 245px;
        padding: 8px;
    }
`;

export const Img = styled.img`
    border-radius: 5px;
    width: 176px;
    height: 231px;
    object-fit: cover;
    object-position: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 120px;
        height: 178px;
    }
`;

export const Name = styled.h3`
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
    color: ${({ theme }) => theme.color.darkerGray};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;