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

export const MovieTile = ({ poster, title, date, tags, rate, votes, id }) => {
    const navigate = useNavigate();

    return (
        <Content onClick={() => navigate(`../movies/${id}`)}>
            <Img src={poster} alt={title} />
            <Title> {title} </Title>
            {date && <Year datetime={date}> {date.slice(0, 4)} </Year>}
            <TagsContainer>
                {tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                ))}
            </TagsContainer>

            {(votes && rate && <RatingContainer>
                <StyledStar />
                <Rate>{rate}</Rate>
                <Votes>{votes} votes</Votes>
            </RatingContainer>) || null}
        </Content>
    )
};