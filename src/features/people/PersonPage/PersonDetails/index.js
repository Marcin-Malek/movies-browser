import React from 'react';
import { Wrapper, ProductionDetails, Property, DetailsWrapper, Detail, Biography, Poster, Image, Name } from './styled';
import { ReactComponent as CameraIcon } from "../../../../images/camera.svg";

export const PersonDetails = (props) => (
    <Wrapper>
        <Poster>
            {(props.image && <Image src={props.image} />) || <CameraIcon />}
        </Poster>
        <Name>{props.name}</Name>
        <ProductionDetails>
            <DetailsWrapper>
                <Property long>Date of Birth:</Property>
                <Property short>Birth:</Property>
                <Detail>{props.birthday}</Detail>
            </DetailsWrapper>
            <DetailsWrapper>
                <Property>Place of birth:</Property>
                <Detail>{props.birthplace}</Detail>
            </DetailsWrapper>
        </ProductionDetails>
        <Biography>{props.biography}</Biography>
    </Wrapper>
);