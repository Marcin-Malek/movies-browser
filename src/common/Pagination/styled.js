import styled from "styled-components";
import { ReactComponent as prev } from "../../images/prev.svg"
import { ReactComponent as next } from "../../images/next.svg"

export const PaginationContainer = styled.footer`
    max-width: 525px;
    max-height: 36px;
    margin: 40px auto 103px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 8px;
        max-height: 23px;
        margin: 32.5px auto 31.5px;
    }
`;

export const FirstPrevWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    color: #18181B;
    font-size: 14px;
    line-height: 140%;
`;

export const First = styled.span`
    padding: 8px 16px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background: #E4E6F0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;

export const Previous = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    border-radius: 5px;
    gap: 8px;
    background: #E4E6F0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;

export const PagesWrapper = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    color: #7E839A;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        line-height: 24px;
        gap: 2px;
    }
`;

export const CurrentPage = styled.span`
    color: #18181B;
    font-weight: 600;
`;

export const NextLastWrapper = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    color: #18181B;
    font-size: 14px;
    line-height: 140%;
`;

export const Next = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: #D6E4FF;
    border-radius: 5px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;

export const Last = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: #D6E4FF;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;


export const StyledNextIcon = styled(next)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 5px;
height: 8px;
    }
`;

export const StyledPrevIcon = styled(prev)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 5px;
height: 8px;
    }
`;
