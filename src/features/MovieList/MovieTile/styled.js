import styled from "styled-components";
import {ReactComponent as Star} from "../../../images/star.svg";

export const Content = styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        flex-direction: row;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        width: 50%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        width: 40%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin-left: 16px;
    }
`;

export const Title = styled.h3`
    margin: 16px 0 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 16px;
        margin: 0 0 4px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: 4vw;
    }
`;

export const Year = styled.span`
    margin: 0;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.darkerGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 13px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: 2.5vw;
    }
`;

export const TagsContainer = styled.ul`
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    list-style: none;
    margin-bottom: 0;
`;

export const Tag = styled.li`
    margin: 0px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.gray};
    border-radius: 5px;
    font-size: 14px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        padding: 4px 8px;
        font-size: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        padding: 1vw 2vw;
        font-size: 2vw;
    }
`;

export const RatingContainer = styled.div`
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-end;
    gap: 12px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        gap: 8px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}px){
        flex: 1;
    }
`;

export const StyledStar = styled(Star)`
    width: 24px;
    height: 24px;
    fill: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        width: 16px;
        height: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        width: 3vw;
        height: 3vw;
    }
`;

export const Rate = styled.span`
    font-weight: 600;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 13px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: 3vw;
    }
`;

export const Votes = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkerGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 13px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: 3vw;
    }
`;