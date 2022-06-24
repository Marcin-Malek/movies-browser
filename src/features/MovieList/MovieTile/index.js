import Star from "../../../images/star.svg"
import Camera from "../../../images/camera.svg"
import {
    Container,
    DescriptionContainer,
    TagsContainer,
    Tag,
    Title,
    Year,
    RatingContainer,
    CameraIcon,
    Poster,
    StarIcon,
    Rate,
    Votes
} from "./styled";

export const MovieTile = ({ title, year, tags, rate, votes }) => {
    return (
        <Container>
            <Poster>
                <CameraIcon src={Camera} />
            </Poster>

            <Title> {title} </Title>
            <Year> {year} </Year>
            <TagsContainer>
                {tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                ))}
            </TagsContainer>

            <RatingContainer>
                <StarIcon src={Star} />
                <Rate>{rate}</Rate>
                <Votes>{votes} votes</Votes>
            </RatingContainer>
        </Container>
    )
};