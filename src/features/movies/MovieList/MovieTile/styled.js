import styled from "styled-components";
import {ReactComponent as Star} from "../../../../images/star.svg";

export const Content = styled.li`
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    transition: 2s cubic-bezier(0.68, 0.14, 0.59, 0.88);
    &:hover {
        transform: translate3d(0, 0, 1px);
        box-shadow: 0 0 16px 2px;
    }

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

export const Year = styled.p`
    margin: 0;
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
    margin: 8px 0 0;
    padding: 0;
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

export const Tag = styled.li`
    margin: 0;
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
    flex: 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        gap: 8px;
        flex:0;
    }
`;

export const StyledStar = styled(Star)`
    width: 24px;
    height: 24px;
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
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 13px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: 3vw;
    }
`;

export const Votes = styled.span`
    color: ${({ theme }) => theme.color.darkerGray};
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 13px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: 3vw;
    }
`;