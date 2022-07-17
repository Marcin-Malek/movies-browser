import styled from "styled-components";

export const PeopleWrapper = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    gap:24px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px){
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
`;
