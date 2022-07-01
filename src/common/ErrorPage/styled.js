import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../images/danger.svg";

export const Wrapper = styled.div`
    max-width: 592px;
    width: 100%;
    margin: 195px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledDangerIcon = styled(DangerIcon)`
    width: 120px;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: 600;
    font-size: 35px;
    line-height: 120%;
    margin: 0;
    padding: 0;
`;

export const Text = styled.p`
    text-align: center;
    margin: 24px 82.73px 24px 82.73px;
    padding: 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

export const Button = styled.button`
    color: white;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    border: none;
    padding: 16px 24px;
    background: #0044CC;
    border-radius: 5px;
`;