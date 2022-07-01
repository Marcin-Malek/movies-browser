import styled from "styled-components";
import { ReactComponent as PrevIcon } from "../../../images/prev.svg"
import { ReactComponent as NextIcon } from "../../../images/next.svg"

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

export const FirstPrevWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({theme}) => theme.color.black};
    font-size: 14px;
    line-height: 140%;
`;

export const First = styled.span`
    padding: 8px 16px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${({theme}) => theme.color.gray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;

export const Previous = styled.span`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 5px;
    gap: 8px;
    background: ${({theme}) => theme.color.gray};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;

export const PagesWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 8px;
    color: ${({theme}) => theme.color.darkerGray};
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 10px;
        gap: 2px;
    }
`;

export const CurrentPage = styled.span`
    color: ${({theme}) => theme.color.black};
    font-weight: 600;
`;

export const NextLastWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 12px;
    color: ${({theme}) => theme.color.black};
    font-size: 14px;
    line-height: 140%;
`;

export const Next = styled.span`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: ${({theme}) => theme.color.lightBlue};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
`;

export const Last = styled.span`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: ${({theme}) => theme.color.lightBlue};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 4px;
        padding: 8px 12px;
    }
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
