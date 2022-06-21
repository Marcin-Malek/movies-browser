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
    Tag,
    Tags,
    Title,
    VoteCount,
    Wrapper,
    Year
} from './styled';
import { ReactComponent as Star } from "../../../images/star.svg";
import { ReactComponent as CameraIcon } from "../../../images/camera.svg";

export const MovieDetails = ({image}) => (
    <Wrapper>
        <Title>Mulan</Title>
        <Year>2020</Year>
        <Poster>
            {image && <Image src={image} /> || <CameraIcon />}
        </Poster>
        <ProductionDetails>
            <DetailsWrapper>
                <Property>Production:</Property>
                <Detail>China, United States of America</Detail>
            </DetailsWrapper>
            <DetailsWrapper>
                <Property>Release date:</Property>
                <Detail><time dateTime="2020-10-24">24.10.2020</time></Detail>
            </DetailsWrapper>
        </ProductionDetails>
        <Tags>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
        </Tags>
        <Rating>
            <Star />
            <Numerator>7,8</Numerator>
            <Denominator>/ 10</Denominator>
            <VoteCount>335 votes</VoteCount>
        </Rating>
        <Description>
            A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.
        </Description>
    </Wrapper>
);