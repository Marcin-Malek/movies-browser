import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    position: absolute;
    width: 140px;
    height: 24px;
    left: 16px;
    top: 610px;
`;

export const StarContainer = styled.div`
    width: 24px;
    height: 24px;
`;
export const img = styled.img`
    position: absolute;
    left: 0%;
    right: -0.01%;
    top: 2.45%;
    bottom: 2.24%;
    background: #FCD420;
`;

export const Rate = styled.p`
    width: 24px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #18181B;
    margin: 0;
`;

export const Votes = styled.p`
    width: 68px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;
    margin: 0;
`;