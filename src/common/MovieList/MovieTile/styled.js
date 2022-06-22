import styled from "styled-components";

export const Container = styled.div`
    width: 324px;
    height: 650px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin: 16px;
`;

export const Poster = styled.div`
    margin: 16px;
    float: left;  //załatwia sprawę margin collapsing zapobiega złączeniu z górą krawędzią
    height: 434px;
    width: 292px;
    background-color: ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CameraIcon = styled.img`
    width: 120px;
    height: 120px;
    opacity: 0.5;
`;

export const DescriptionContainer = styled.div`
    width: 292px;
    height: 105px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const Title = styled.p`
    height: 29px;
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: ${({theme}) => theme.color.black};
`;

export const Year = styled.p`
   height: 24px;
   font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({theme}) => theme.color.darkerGray};
    margin: 0px;
`;

export const TagsContainer = styled.div`
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    padding: 0px;
    margin-top: 39px;  //jak bym dał margin od dołu 16 px to by dołączyło się do góry
    margin-left: 16px;
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