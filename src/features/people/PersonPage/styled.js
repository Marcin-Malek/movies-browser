import styled from "styled-components";

export const MainWrapper = styled.main`
    max-width: 1400px;
    margin: 65px auto 336px 64px;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 24px auto;
    }
`;