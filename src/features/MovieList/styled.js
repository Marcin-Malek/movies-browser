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
    margin: 56px 0 24px 0;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(308px, 1fr));
    gap: 24px;
    padding: 16px;
`;