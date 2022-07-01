import styled from "styled-components";

export const MainWrapper = styled.main`
    max-width: 1368px;
    margin: 64px auto 336px;

    // This keeps minimal 16px margins on sides while 
    // using margin: auto; to center content
    @media (max-width: 1400px) {
        margin-left: 16px;
        margin-right: 16px;
    }
`;