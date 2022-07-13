import styled from "styled-components";

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
