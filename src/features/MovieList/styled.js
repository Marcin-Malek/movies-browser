import styled from "styled-components";

export const Content = styled.section`
    max-width: 1400px;
    padding:0 16px;
    margin: 0 auto;
`;

export const Title = styled.h2`
    font-size: 36px;
    margin: 0;
    padding: 56px 0 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size:3.36vw;
    }

    @media (max-width: 536px) {
        font-size: 18px;
    }
`;

export const Wrapper = styled.ul`
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