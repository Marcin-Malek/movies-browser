import styled from "styled-components";

export const Content = styled.section`
    max-width: 1368px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin: 0;
    padding: 56px 16px 24px 16px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    gap: 24px;
    padding: 16px;
`;