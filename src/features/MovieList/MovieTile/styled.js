import styled from "styled-components";
import {ReactComponent as Star} from "../../../images/star.svg";

export const Content = styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Img = styled.img`
    aspect-ratio: 2/3;
    border-radius: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    margin: 16px 0px 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

export const Year = styled.p`
    margin: 0px 0px 8px;
    font-size: 16px;
    color: rgb(126, 131, 154);
    line-height: 150%;
    color: ${({ theme }) => theme.color.darkerGray};
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Tag = styled.p`
    margin: 0px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.gray};
    border-radius: 5px;
    font-size: 14px;
`;

export const RatingContainer = styled.div`
    margin-top: 39px;
    display: flex;
    align-items: center;
    align-content: flex-end;
    gap: 12px;
`;

export const StyledStar = styled(Star)`
    
`;

export const Rate = styled.p`
    margin: 0px;
    font-weight: 600;
    font-size: 16px;
`;

export const Votes = styled.p`
    margin: 0px;
    font-weight: 400;
    color: rgb(126, 131, 154);
`;