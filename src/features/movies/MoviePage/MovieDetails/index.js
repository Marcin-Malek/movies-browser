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
import { ReactComponent as CameraIcon } from "../../../../images/camera.svg";
import { useFormatDate } from '../../../../common/useFormatDate';

export const MovieDetails = (props) => {
    const year = useFormatDate(props.date, "year");
    const date = useFormatDate(props.date);

    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Year>
                {props.date ? <time dateTime={props.date}>{year}</time>
                    : <span>(No release date)</span>
                }
            </Year>
            <Poster>
                {(props.image && <Image src={props.image} />) || <CameraIcon />}
            </Poster>
            <ProductionDetails>
                <DetailsWrapper>
                    <Property>Production:</Property>
                    <Detail>
                        {props.production.length > 0 ? props.production.map(
                            (country, index) => index + 1 < props.production.length ?
                                `${country.name}, ` :
                                country.name
                        ) :
                        "(No production info)"}
                    </Detail>
                </DetailsWrapper>
                <DetailsWrapper>
                    <Property>Release date:</Property>
                    <Detail>
                        {props.date ? <time dateTime={props.date}>{date}</time>
                            : <span>(No release date)</span>
                        }
                    </Detail>
                </DetailsWrapper>
            </ProductionDetails>
            <Tags>
                {props.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag.name}</Tag>
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
};