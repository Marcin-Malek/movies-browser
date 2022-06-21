import styled from "styled-components";

export const Wrapper = styled.div`
    width: 324px;
    height: 650px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
`;