// import Camera from "../../../images/camera.svg";
import Poster from "../../../images/poster.jpg";

import {
    Content,
    Wrapper,
    TagsContainer,
    Tag,
    Title,
    Year,
    RatingContainer,
    Img,
    Rate,
    Votes,
    StyledStar
} from "./styled";

export const MovieTile = ({ title, year, tags, rate, votes }) => {
    return (
        <Content>
            <Img src={Poster} />
            <Wrapper>
                <Title> {title} </Title>
                <Year> {year} </Year>
                <TagsContainer>
                    {tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                </TagsContainer>

                <RatingContainer>
                    <StyledStar />
                    <Rate>{rate}</Rate>
                    <Votes>{votes} votes</Votes>
                </RatingContainer>
            </Wrapper>
        </Content>
    )
};