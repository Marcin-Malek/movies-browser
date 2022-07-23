import styled, { keyframes } from "styled-components";

const circleWidth = 12;
const circleSize = 91;

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    margin: 48px auto 0;
    width: ${circleSize}px;
    height: ${circleSize}px;
    border-radius: 50%;
    border: ${circleWidth}px solid ${({ theme }) => theme.color.gray};
    border-left-color: ${({ theme }) => theme.color.black};
    animation: ${spin} 1s linear infinite;
`;