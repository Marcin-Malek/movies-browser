import React from 'react';
import {
    Denominator,
    Description,
    Detail,
    DetailsWrapper,
    Image,
    Numerator,
    Poster,
    ProductionDetails,
    Property,
    Rating,
    StyledStar,
    Tag,
    Tags,
    Title,
    VoteCount,
    Wrapper,
    Year
} from './styled';
import { ReactComponent as CameraIcon } from "../../../images/camera.svg";

export const MovieDetails = (props) => (
    <Wrapper>
        <Title>{props.title}</Title>
        <Year>{props.year}</Year>
        <Poster>
            {(props.image && <Image src={props.image} />) || <CameraIcon />}
        </Poster>
        <ProductionDetails>
            <DetailsWrapper>
                <Property>Production:</Property>
                <Detail>{props.production}</Detail>
            </DetailsWrapper>
            <DetailsWrapper>
                <Property>Release date:</Property>
                <Detail>{props.release}</Detail>
            </DetailsWrapper>
        </ProductionDetails>
        <Tags>
            {props.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
            ))}
        </Tags>
        <Rating>
            <StyledStar />
            <Numerator>{props.rating}</Numerator>
            <Denominator>/ 10</Denominator>
            <VoteCount>{props.votes} votes</VoteCount>
        </Rating>
        <Description>
            {props.description}
        </Description>
    </Wrapper>
);