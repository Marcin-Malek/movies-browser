import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
        "poster name"
        "poster property"
        "poster biography";
    column-gap: 40px;
    row-gap: 24px;
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    background-color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        column-gap: 16px;
        row-gap: 8px;
        padding: 16px;
    }
`;

export const Name = styled.header`
    grid-area: name;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin: 8px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        margin: 0 0 -4px;
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
    background: ${({theme}) => theme.color.silver};

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

export const Biography = styled.p`
    grid-area: biography;
    font-size: 20px;
    line-height: 160%;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 8px 0 0;
    }
`;