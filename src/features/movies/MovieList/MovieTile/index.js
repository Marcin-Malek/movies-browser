import { useNavigate } from "react-router-dom";
import {
    Content,
    TagsContainer,
    Tag,
    Title,
    RatingContainer,
    Img,
    Rate,
    Votes,
    StyledStar,
    FeaturedDate
} from "./styled";

export const MovieTile = ({ poster, title, date, tags, rate, votes, id, featured }) => {
    const navigate = useNavigate();

    return (
        <Content onClick={() => navigate(`../movies/${id}`)}>
            <Img src={poster} alt={title} />
            <Title> {title} </Title>
            <FeaturedDate>
                {featured && <span>{featured} </span>}
                {date ? <time dateTime={date}>{featured ? `(${date.slice(0,4)})` : date.slice(0,4)} </time> 
                : <span>(No release date)</span>}
            </FeaturedDate>
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