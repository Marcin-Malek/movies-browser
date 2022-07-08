import styled from "styled-components";
import { ReactComponent as noresults } from "../../images/noresults.svg";

export const Wrapper = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-weight: 600;
    line-height: 120%;
    font-size: 36px;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 3.3vw;
        margin-top: 4vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 18px;
        margin-top: 4vw;
    }
`;

export const StyledNoResults = styled(noresults)`
    width: 668px;
    height: 508px;
    align-self: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        width: 68vw;
        height: 54vw;
    }
`;

