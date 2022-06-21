import styled from "styled-components";
import star from "../../../images/star.svg"

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
    background-color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.header`
    grid-area: title;
    margin: 8px 0 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    display: flex;
    align-items: center;
`;

export const Year = styled.span`
    grid-area: year;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 120%;
    display: flex;
    align-items: center;
`;

export const Poster = styled.div`
    grid-area: poster;
    display: flex;
    width: 312px;
    height: 464px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #C4C4C4;
`;

export const Image = styled.img`
    object-fit: contain;
`;

export const ProductionDetails = styled.dl`
    grid-area: property;
    margin: 16px 0 0;
    display: grid;
    align-items: center;
`;

export const DetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 10px;
    margin-top: 8px;
`;

export const Property = styled.dt`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.stormGray};
`;

export const Detail = styled.dd`
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
`;

export const Tags = styled.ul`
    grid-area: tags;
    list-style: none;
    list-style-position: inside;
    padding: 0;
    margin: 24px 0;
`;

export const Tag = styled.li`
    display: inline-flex;
    padding: 8px 16px;
    margin-right: 10px;
    background: ${({ theme }) => theme.color.gray};
    border-radius: 5px;
`;

export const Rating = styled.div`
    grid-area: rating;
    display: flex;
    align-items: center;
`;

export const Numerator = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin: 0 8px;
`;

export const Denominator = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
`;

export const VoteCount = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    margin: 0 12px;
`;

export const Description = styled.p`
    grid-area: description;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    margin: 24px 0 0;
`;