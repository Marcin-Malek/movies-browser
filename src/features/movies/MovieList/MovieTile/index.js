import Poster from "../../../../images/MulanPoster.jpg";
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
    StyledStar,
} from "./styled";

export const MovieTile = ({ title, date, tags, rate, votes, featured }) => {
    return (
        <Content>
            <Img src={Poster} />
            <Wrapper>
                <Title> {title} </Title>
                <Year> {featured ? `${featured} (${date.slice(0,4)})` : date} </Year>
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