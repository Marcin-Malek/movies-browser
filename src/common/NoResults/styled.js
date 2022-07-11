import styled from "styled-components";
import { ReactComponent as noresults } from "../../images/noresults.svg";

export const StyledNoResults = styled(noresults)`
    width: 668px;
    height: 508px;
    align-self: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        width: 68vw;
        height: 54vw;
    }
`;

