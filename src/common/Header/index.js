import styled from "styled-components";

export const Header = styled.h2`
    font-size: 36px;
    margin: 0;
    padding: 56px 0 24px;
    line-height: 120%;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size:3.51vw;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 5.625vw;
    }
`;