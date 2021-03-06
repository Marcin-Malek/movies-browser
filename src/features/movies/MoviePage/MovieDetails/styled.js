import styled from "styled-components";
import { ReactComponent as Star } from "../../../../images/star.svg";
import camera from "../../../../images/camera.svg";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
        "poster title"
        "poster year"
        "poster property"
        "poster tags"
        "poster rating"
        "poster description"
        "poster empty";
    column-gap: 40px;
    row-gap: 24px;
    padding: 40px;
    margin-top: 64px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
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
        row-gap: 8px;
        padding: 16px;
    }
`;

export const Title = styled.header`
    grid-area: title;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin: 8px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-weight: 500;
        font-size: 5vw;
        line-height: 130%;
        margin: 0 0 -4px;
    }
`;

export const Year = styled.div`
    grid-area: year;
    font-size: 22px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.darkerGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;

export const Image = styled.img`
    grid-area: poster;
    width: 16.25vw;
    height: 24.1vw;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.silver};
    background-image: url(${camera});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 42%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 114px;
        height: 169px;
    }
`;

export const ProductionDetails = styled.dl`
    grid-area: property;
    display: grid;
    row-gap: 8px;
    margin: 0;
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
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {   
        gap: 8px;
    }
`;

export const Tag = styled.li`
    font-size: 14px;
    padding: 8px 16px;
    background: ${({ theme }) => theme.color.gray};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        line-height: 110%;
        padding: 4px 8px;
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
    color: ${({ theme }) => theme.color.darkerGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
        margin: 0;
    }
`;

export const Description = styled.p`
    grid-area: description;
    font-size: 20px;
    line-height: 160%;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 8px 0 0;
    }
`;