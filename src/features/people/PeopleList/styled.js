import styled from "styled-components";

export const Content = styled.section`
    max-width: 1368px;
    margin: auto;
`;

export const Title = styled.h2`
    font-size: 36px;
    line-height: 120%;
    margin: 0;
    padding: 56px 16px 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 20px;
        padding: 24px 16px 12px;
    }
`;

export const Wrapper = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 208px);
    list-style-type: none;
    padding: 0;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: repeat(auto-fit, 136px);
        margin: 0 16px;
        padding: 0;
        gap: 16px;
    }
`;
