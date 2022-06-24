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
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    list-style-type: none;
    padding: 0;
    gap: 24px;
`;

export const Item = styled.li`
    width: 208px;
    height: 339px;
    background-color: ${({theme}) => theme.color.white};
`;