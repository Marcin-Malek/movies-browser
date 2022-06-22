import styled from "styled-components";
import { ReactComponent as Star } from "../../../images/star.svg";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
    "poster title"
    "poster year"
    "poster property"
    "poster tags"
    "poster rating"
    "poster description";
    column-gap: 40px;
    max-width: 1368px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: 40px;
    margin: 16px;
    background-color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-areas: 
            "poster title"
            "poster year"
            "poster property"
            "poster tags"
            "poster rating"
            "description description";
        column-gap: 16px;
        padding: 16px;
    }
`;

export const Title = styled.header`
    grid-area: title;
    margin: 8px 0 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        margin: 0 0 4px;
    }
`;

export const Year = styled.span`
    grid-area: year;
    font-size: 22px;
    line-height: 120%;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
        color: ${({ theme }) => theme.color.darkerGray};
    }
`;

export const Poster = styled.div`
    grid-area: poster;
    display: flex;
    aspect-ratio: 2/3;
    width: 312px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #C4C4C4;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 114px;
    }
`;

export const Image = styled.img`
    object-fit: contain;
`;

export const ProductionDetails = styled.dl`
    grid-area: property;
    display: grid;
    row-gap: 8px;
    margin: 24px 0 0;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 8px 0 0;
    }
`;

export const DetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Property = styled.dt`
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.stormGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: none;
    }
`;

export const Detail = styled.dd`
    margin: 0;
    font-size: 18px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        line-height: 130%;
    }
`;

export const Tags = styled.ul`
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    list-style: none;
    list-style-position: inside;
    padding: 0;
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 8px 0;
    }
`;

export const Tag = styled.li`
    font-size: 14px;
    padding: 8px 16px;
    background: ${({ theme }) => theme.color.gray};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 4px 8px;
        font-size: 10px;
        line-height: 110%;
    }
`;

export const Rating = styled.div`
    grid-area: rating;
    display: flex;
    align-items: center;
`;

export const StyledStar = styled(Star)`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 16px;
        height: 16px;
    }
`;

export const Numerator = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin: 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-weight: 600;
        font-size: 13px;
    }
`;

export const Denominator = styled.span`
    font-size: 14px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: none;
    }
`;

export const VoteCount = styled.span`
    font-size: 14px;
    line-height: 120%;
    margin: 0 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
        margin: 0;
        color: ${({theme}) => theme.color.darkerGray};
    }
`;

export const Description = styled.p`
    grid-area: description;
    font-size: 20px;
    line-height: 160%;
    margin: 24px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 16px 0 0;
    }
`;