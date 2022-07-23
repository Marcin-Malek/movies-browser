import styled from "styled-components";
import { ReactComponent as PrevIcon } from "./prev.svg";
import { ReactComponent as NextIcon } from "./next.svg";

export const PaginationContainer = styled.footer`
    margin: 40px auto 103px;
    display: flex;
    justify-content: center;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 8px;
        margin: 32px auto 31px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 12px;
    color: ${(props) => props.disabled ? props.theme.color.black : props.theme.color.mineShaft};
    font-size: 14px;
    line-height: 140%;

    & > * {
        background: ${(props) => props.disabled ? props.theme.color.gray : props.theme.color.lightBlue};
        
        &:hover {
            transform: ${({ disabled }) => disabled ? "none" : "scale(1.02)"};
            box-shadow: ${({ disabled }) => disabled ? "none" : "0 4px 12px rgba(186, 199, 213, 0.3)"}; 
        }

        &:active {
            transform: ${({ disabled }) => disabled ? "none" : "scale(1.08)"};
        }
    }
    
    & path {
        fill: ${(props) => props.disabled ? props.theme.color.darkerGray : props.theme.color.blue};
    }
`;

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: none;
    gap: 8px;
    transition: 0.2s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;

export const PagesWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.color.darkerGray};
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        gap: 2px;
    }
`;

export const BoldText = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
`;

export const StyledNextIcon = styled(NextIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 5px;
        height: 8px;
    }
`;

export const StyledPrevIcon = styled(PrevIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 5px;
        height: 8px;
    }
`;
