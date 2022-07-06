import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
        "poster name"
        "poster property"
        "poster biography"
        "poster empty";
    column-gap: 40px;
    row-gap: 24px;
    padding: 40px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    background-color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-areas: 
            "poster name"
            "poster property"
            "poster empty"
            "biography biography";
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
        font-size: 14px;
        line-height: 130%;
        margin: 0 0 -4px;
    }
`;

export const Poster = styled.div`
    grid-area: poster;
    width: 399px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 116px;
    }
`;

export const Image = styled.img`
    object-fit: contain;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 116px;
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
        
    }
`;

export const Property = styled.dt`
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.stormGray};

    ${props =>
    props.short &&
    css`
        display: none;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            display: inherit;
    }
    `};

    ${props =>
    props.long &&
    css`
        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            display: none;
    }
    `};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        
    }
`;

export const Detail = styled.dd`
    margin: 0;
    font-size: 18px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: flex;
        flex-shrink: 0;
        font-size: 12px;
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