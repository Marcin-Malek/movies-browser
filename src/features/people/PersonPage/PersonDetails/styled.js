import styled from "styled-components";

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
    margin-top: 64px;
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
        margin: 0 0 8px;
    }
`;

export const Image = styled.img`
    max-width: 20.78vw;
    max-height: 29.37vw;
    border-radius: 5px;
    grid-area: poster;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        min-width: 116px;
        min-height: 163px;
    }
`;

export const ProductionDetails = styled.dl`
    grid-area: property;
    display: grid;
    row-gap: 8px;
    margin: 0;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        column-gap: 4px;
    }
`;

export const Property = styled.dt`
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.stormGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        
    }
`;

export const Detail = styled.dd`
    margin: 0;
    font-size: 18px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
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