import styled from "styled-components";

export const Content = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding:0 16px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin: 0;
    padding: 56px 0 24px 0;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    }
`;