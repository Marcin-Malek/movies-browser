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

export const MovieTile = () => {
    return (
        <Container>
            <Poster>
                <CameraIcon src={Camera} />
            </Poster>

            <DescriptionContainer>
                <Title> Mulan </Title>
                <Year> 2020 </Year>
                <TagsContainer>
                    <Tag> Action </Tag>
                    <Tag> Adventure </Tag>
                    <Tag> Drama </Tag>
                </TagsContainer>
            </DescriptionContainer>

            <RatingContainer>
                <StarIcon src={Star} />
                <Rate>7,8</Rate>
                <Votes>35 votes</Votes>
            </RatingContainer>
        </Container>
    )
};