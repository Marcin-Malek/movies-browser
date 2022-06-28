import styled from "styled-components";
import {ReactComponent as Star} from "../../../images/star.svg";

export const Content = styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-direction: row;
    }
`;

export const ImgWrapper = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 50%;
    }
`;

export const Img = styled.img`
    border-radius: 5px;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-left: 16px;
        width: 50%;
        display: flex;
        justify-content: flex-start;
    }
`;

export const DescriptionContainer = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
          
        }
`;

export const Title = styled.h3`
    margin: 16px 0px 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 16px;
    }
`;

export const Year = styled.span`
    margin: 0;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.darkerGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;

export const TagsContainer = styled.ul`
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    list-style: none;
    margin-bottom: 0;
`;

export const Tag = styled.li`
    margin: 0px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.gray};
    border-radius: 5px;
    font-size: 14px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 4px 8px;
        font-size: 10px;
    }
`;

export const RatingContainer = styled.div`
    margin-top: 14px;
    display: flex;
    align-items: center;
    align-content: flex-end;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        gap: 8px;
        margin-top: 12px;
    }
`;

export const StyledStar = styled(Star)`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 16px;
    }
`;

export const Rate = styled.span`
    margin: 0px;
    font-weight: 600;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
    }
`;

export const Votes = styled.span`
    margin: 0px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.darkerGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
    }
`;