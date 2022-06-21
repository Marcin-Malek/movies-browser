import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    position: absolute;
    width: 292px;
    height: 105px;
    left: 16px;
    top: 466px;
`;

export const InfoWrapper = styled.div`
    width: 292px;
    height: 61px;
`;

export const Title = styled.p`
    width: 292px;
    height: 29px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: #18181B;
    margin: 0;
`;

export const Year = styled.p`
    width: 39px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 279px;
    height: 36px;
`;
export const TagContainer = styled.div`
    background: #E4E6F0;
    border-radius: 5px; 
    padding: 8px 16px;
`;
export const Tag = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #18181B;
`;


