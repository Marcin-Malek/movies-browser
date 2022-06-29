import styled from "styled-components";
import { ReactComponent as prev } from "../../images/prev.svg"
import { ReactComponent as next } from "../../images/next.svg"

export const PaginationContainer = styled.footer`
    width: 525px;
    height: 36px;
    margin: 40px auto 103px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
`;

export const FirstPrevWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
`;

export const First = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    width: 76px;
    background: #E4E6F0;
    border-radius: 5px;


    color: #18181B;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
`;

export const Previous = styled.span`
    width: 106px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: #E4E6F0;
    border-radius: 5px;

    color: #18181B;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
`;

export const PagesWrapper = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    color: #7E839A;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
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
`;

export const Next = styled.span`
    width: 78px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: #D6E4FF;
    border-radius: 5px;

    color: #18181B;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
`;

export const Last = styled.span`
   width: 75px;
   display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: #D6E4FF;
    border-radius: 5px;

    color: #18181B;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
`;


export const StyledNextIcon = styled(next)`
  
`;

export const StyledPrevIcon = styled(prev)`
  
`;
