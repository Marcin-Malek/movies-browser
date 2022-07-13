import styled from "styled-components";
import {ReactComponent as Star} from "../../images/star.svg";
import camera from "../../images/camera.svg";

export const Content = styled.li`
    cursor: pointer;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    transition: 0.2s;
    display: grid;
    grid-template-rows: repeat(4, min-content) 1fr;
    grid-template-areas: 
        "image"
        "title"
        "year"
        "tags"
        "empty"
        "rating"
    ;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        grid-template-columns:1fr 1fr;
        column-gap: 16px;
        grid-template-areas: 
        "image title"
        "image year"
        "image tags"
        "image rating"
        "image empty"
        ;
    }
    
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(186, 199, 213, 0.9);
    }

    &:active {
        transform: scale(1.03);
    }
`;

export const Img = styled.img`
    grid-area: image;
    width: 100%; 
    aspect-ratio: 2/3;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.silver};
    background-image: url(${camera});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 42%;
`;

export const Title = styled.h3`
    grid-area: title;
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

export const FeaturedDate = styled.div`
    grid-area: year;
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
    grid-area: tags;
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
    grid-area: rating;
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    
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