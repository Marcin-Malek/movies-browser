import {
    Content,
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

export const MovieTile = ({ poster, title, year, tags, rate, votes }) => {
    return (
        <Content>
            <Img src={poster} alt={title} />
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
        </Content>
    )
};