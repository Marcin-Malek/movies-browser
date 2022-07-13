import styled from "styled-components";

export const List = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap:24px;

    @media (max-width: 767px){
        gap: 16px;
    }
`;