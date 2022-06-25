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
    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
    list-style-type: none;
    padding: 0;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Item = styled.li`
    height: 339px;
    background-color: ${({theme}) => theme.color.white};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        height: 245px;
    }
`;