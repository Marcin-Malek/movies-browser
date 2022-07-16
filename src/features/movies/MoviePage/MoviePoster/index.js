import React from 'react';
import { Shadow, ImageWrapper, Image, MainInfo, Title, StyledStar, Numerator, Denominator, VoteCount, Rating } from './styled';

export const MoviePoster = (props) => (
    <Shadow>
        <ImageWrapper>
            <Image src={props.image === "https://image.tmdb.org/t/p/w1280/null" ? null : props.image} />
            <MainInfo>
                <Title>{props.title}</Title>
                <Rating>
                    <StyledStar />
                    <Numerator>{props.rating}</Numerator>
                    <Denominator>/ 10</Denominator>
                    <VoteCount>{props.votes} votes</VoteCount>
                </Rating>
            </MainInfo>
        </ImageWrapper>
    </Shadow>
)