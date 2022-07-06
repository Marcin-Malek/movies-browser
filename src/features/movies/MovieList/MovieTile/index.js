import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    return (
        <Content onClick={() => navigate(`../movies/${id}`)}>
            <Img src={poster} />
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