import styled from "styled-components";
import { ReactComponent as Star } from "../../../images/star.svg";

export const Shadow = styled.div`
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.color.black};
    background: 
    linear-gradient(
        270deg, currentcolor 14.11%, 
        rgba(24, 24, 27, 0.873268) 15.08%,
        rgba(24, 24, 27, 0.720529) 16.51%, 
        rgba(24, 24, 27, 0.294577) 19.99%, 
        rgba(24, 24, 27, 0.159921) 21.88%, 
        rgba(24, 24, 27, 0) 25.68%),
    linear-gradient(
        90deg, currentcolor 13.6%,
        rgba(24, 24, 27, 0.984059) 14.58%,
        rgba(24, 24, 27, 0.967732) 15.44%,
        rgba(24, 24, 27, 0.865569) 16.3%,
        rgba(24, 24, 27, 0.230315) 22.87%,
        rgba(24, 24, 27, 0) 26.64%),
    linear-gradient(
        180deg, currentcolor 0%,
        rgba(24, 24, 27, 0.689555) 4.66%,
        rgba(24, 24, 27, 0.439033) 9.34%,
        rgba(24, 24, 27, 0.20628) 15.16%,
        rgba(24, 24, 27, 0) 24.22%),
    linear-gradient(
        189.44deg,
        rgba(24, 24, 27, 0) 58.48%,
        rgba(24, 24, 27, 0.106473) 63.17%,
        rgba(24, 24, 27, 0.235359) 68.85%,
        rgba(24, 24, 27, 0.492821) 78.08%,
        rgba(24, 24, 27, 0.740286) 85.86%,
        currentcolor 92.87%);
`;

export const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width:100vw;
        padding: 0 16px;
    }
`;

export const Image = styled.img`
    max-width: 72vw;
    aspect-ratio: 16/9;
    z-index: -1;
`;

export const MainInfo = styled.div`
    position: absolute;
    align-self: flex-start;
    bottom: 10%;
    color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 24px;
        margin: 4px 0;
    }
`;

export const Rating = styled.div`
    width: fit-content;
    display: grid;
    grid-template-areas: 
    "star numerator denominator"
    "votes votes votes";
    align-items: flex-end;
    column-gap: 8px;
    row-gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: flex;
        column-gap: 0;
        row-gap: 0;
    }
`;

export const StyledStar = styled(Star)`
    grid-area: star;
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 16px;
        height: 16px;
    }
`;

export const Numerator = styled.span`
    grid-area: numerator;
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-weight: 600;
        font-size: 14px;
        margin: 0 2px 0 4px;
    }
`;

export const Denominator = styled.span`
    grid-area: denominator;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 6px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        margin-bottom: 2px;
    }
`;

export const VoteCount = styled.span`
    grid-area: votes;
    font-size: 16px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        margin: 2px 8px;
    }
`;