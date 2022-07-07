import styled from "styled-components";
import { ReactComponent as noresults } from "../../images/noresults.svg";

export const Wrapper = styled.div`
    max-width: 53vw;
    margin: 56px 0 0 14.3vw;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        max-width: 80vw;
        margin: 50px auto;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 2.23vw;
    line-height: 120%;
    align-self: flex-start;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 6vw;
    }
`;

export const StyledNoResults = styled(noresults)`
    align-self: flex-end;
    width: 34vw;
    height: 26.5vw;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        align-self: center;
        width: 68vw;
        height: 52vw;
    }
`;

