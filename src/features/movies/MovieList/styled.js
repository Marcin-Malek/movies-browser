import styled from "styled-components";

export const MoviesWrapper = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

