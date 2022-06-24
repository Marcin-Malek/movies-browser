import styled from "styled-components";

export const Container = styled.div`
    max-width: 324px;
    max-height: 650px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin: 20px;
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
        "poster"
        "title"
        "year"
        "tags"
        "rates";
`;

export const Poster = styled.div`
    grid-area: poster;
    height: 434px;
    max-width: 292px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.silver};
    border-radius: 5px;
`;

export const CameraIcon = styled.img`
    width: 120px;
    height: 120px;
    opacity: 0.5;
`;

export const DescriptionContainer = styled.div`
    
`;

export const Title = styled.p`
    grid-area: title;
    height: 29px;
    margin:16px 0 0 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: ${({theme}) => theme.color.black};
`;

export const Year = styled.p`
    grid-area: year;
    margin:8px 0 0 0;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({theme}) => theme.color.darkerGray};
`;

export const TagsContainer = styled.div`
    grid-area: tags;
    margin:8px 0 10px 0;
    height: 36px;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    gap: 8px;
`;

export const Tag = styled.p`
    margin: 0;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.color.gray};
    border-radius: 5px; 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: ${({theme}) => theme.color.black}; 
`;

export const RatingContainer = styled.div`
    grid-area: rates;
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: nowrap;
`;

export const StarIcon = styled.img`
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.color.yellow};
`;

export const Rate = styled.p`
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.black};
    margin: 0;
`;

export const Votes = styled.p`
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.color.darkerGray};
    margin: 0;
`;