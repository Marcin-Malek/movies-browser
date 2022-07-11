import { useNavigate } from "react-router-dom";
import { useFormatDate } from "../../../../common/useFormatDate";
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

export const MovieTile = ({
    poster,
    title,
    date,
    tags,
    rate,
    votes,
    id,
    featured }) => {
    const navigate = useNavigate();
    const year = useFormatDate(date, "year");

    return (
        <Content onClick={() => navigate(`../movies/${id}`)}>
            <Img src={poster} alt={title} />
            <Title>{title}</Title>
            <FeaturedDate>
                {featured && <span>{featured} </span>}
                {date ?
                    <time dateTime={date}>
                        {featured ? `(${year})` : year}
                    </time>
                    :
                    <span>(No release date)</span>
                }
            </FeaturedDate>
            <TagsContainer>
                {tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                ))}
            </TagsContainer>
            {(votes && rate &&
                <RatingContainer>
                    <StyledStar />
                    <Rate>{rate}</Rate>
                    <Votes>{votes} votes</Votes>
                </RatingContainer>
            ) || null}
        </Content>
    )
};