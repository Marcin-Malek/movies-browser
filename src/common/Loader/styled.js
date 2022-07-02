import styled, { keyframes } from "styled-components";

const circleWidth = 12;
const circleSize = 91;

export const ProgressForegroundAnimation = keyframes`
    0% {
        transform: rotate(-30deg);
    }
    29.4% {
        border-left-color: transparent;
    }
    29.41% {
        border-left-color: currentColor;
        }
    64.7% {
        border-bottom-color: transparent;
    }
    64.71% {
        border-bottom-color: currentColor;
    }
    100% {
        border-left-color: currentColor;
        border-bottom-color: currentColor;
        transform: rotate(225deg);
    }
`;

export const ProgressBackgroundAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    12.5% {
        transform: rotate(180deg);
        animation-timing-function: linear;
    }
    25% {
        transform: rotate(630deg);
    }
    37.5% {
        transform: rotate(810deg);
        animation-timing-function: linear;
    }
    50% {
        transform: rotate(1260deg);
    }
    62.5% {
        transform: rotate(1440deg);
        animation-timing-function: linear;
    }
    75% {
        transform: rotate(1890deg);
    }
    87.5% {
        transform: rotate(2070deg);
        animation-timing-function: linear;
    }
    100% {
        transform: rotate(2520deg);
    }
`;

export const CircleBorder = styled.div`
    margin: 48px auto 0;
    width: ${circleSize}px;
    height: ${circleSize}px;
    border-radius: 50%;
    outline: ${circleWidth}px solid ${({ theme }) => theme.color.gray};
    outline-offset: -${circleWidth}px;
`;

export const Spinner = styled.progress`
    appearance: none;
    border-radius: 50%;
    width: ${circleSize}px;
    height: ${circleSize}px;
    color: ${({ theme }) => theme.color.black};
    background-color: transparent;
    &:indeterminate {
        mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
        animation: ${ProgressBackgroundAnimation} 5s infinite cubic-bezier(0.3, 0.6, 1, 1);
    }
    &:indeterminate::before,
    &:indeterminate::-webkit-progress-value {
        content: "";
        display: block;
        border: solid ${circleWidth}px transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        width: 100% !important;
        height: 100%;
        animation: ${ProgressForegroundAnimation} 0.625s infinite linear alternate;
    }
    &:indeterminate::-moz-progress-bar {
        border: solid ${circleWidth}px;
        border-radius: 50%;
        width: 100% !important;
        height: 100%;
        background-color: transparent;
        animation: ${ProgressForegroundAnimation} 0.625s infinite linear alternate;
    }
`;