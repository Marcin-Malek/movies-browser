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

export const MovieTile = ({title, year, genre, rate, votes}) => {
    return (
        <Container>
            <Poster>
                <CameraIcon src={Camera} />
            </Poster>

            <DescriptionContainer>
                <Title> {title} </Title>
                <Year> {year} </Year>
                <TagsContainer>
                    <Tag> {genre} </Tag>
                    <Tag> Adventure </Tag>
                    <Tag> Drama </Tag>
                </TagsContainer>
            </DescriptionContainer>

            <RatingContainer>
                <StarIcon src={Star} />
                <Rate>{rate}</Rate>
                <Votes>{votes} votes</Votes>
            </RatingContainer>
        </Container>
    )
};