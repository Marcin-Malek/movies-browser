import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../images/danger.svg";

export const Wrapper = styled.div`
    margin: 195px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin-top: 120px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-top: 50px;
    }
`;

export const StyledDangerIcon = styled(DangerIcon)`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 80px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: 600;
    font-size: 35px;
    line-height: 120%;
    margin: 38.16px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 18px;
        margin-top: 0;
    }
`;

export const Text = styled.p`
    text-align: center;
    margin: 24px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        margin: 15px;
    }
`;

export const Button = styled.button`
    padding: 16px 24px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        padding: 12px 20px;
        line-height: 15px;
    }

    &:hover{
        filter: brightness(115%);
    }

    &:active{
        filter: brightness(150%);
    }
`;