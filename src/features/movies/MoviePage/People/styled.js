import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 64px;
`;

export const Header = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin: 0 0 32px;
`;

export const List = styled.ul`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(208px, 1fr)); */
    grid-template-columns: repeat(auto-fit,208px);
    justify-content: center;
    list-style-type: none;
    padding: 0;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        /* grid-template-columns: repeat(2, 1fr); */
        grid-template-columns: repeat(auto-fit,136px);
        gap: 16px;
    }
`;