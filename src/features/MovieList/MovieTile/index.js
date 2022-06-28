// import Camera from "../../../images/camera.svg";
import Poster from "../../../images/MulanPoster.jpg";

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
    DescriptionContainer,
    ImgWrapper,
} from "./styled";

export const MovieTile = ({ title, year, tags, rate, votes }) => {
    return (
        <Content>
            <ImgWrapper>
                <Img src={Poster} />
            </ImgWrapper>

            <Wrapper>
                <DescriptionContainer>
                    <Title> {title} </Title>
                    <Year> {year} </Year>
                    <TagsContainer>
                        {tags.map((tag, tagIndex) => (
                            <Tag key={tagIndex}>{tag}</Tag>
                        ))}
                    </TagsContainer>
                </DescriptionContainer>

                <RatingContainer>
                    <StyledStar />
                    <Rate>{rate}</Rate>
                    <Votes>{votes} votes</Votes>
                </RatingContainer>
            </Wrapper>
        </Content>
    )
};