import React from 'react';
import { Wrapper, ProductionDetails, Property, DetailsWrapper, Detail, Biography, Image, Name } from './styled';
// import { ReactComponent as CameraIcon } from "../../../../images/camera.svg";
// import camera from "../../../../images/camera.svg";


export const PersonDetails = (props) => (
    <Wrapper>
        <Image src={props.image}/>
        <Name>{props.name}</Name>
        <ProductionDetails>
            <DetailsWrapper>
                <Property long>Date of Birth:</Property>
                <Property short>Birth:</Property>
                <Detail>{props.birthday}</Detail>
            </DetailsWrapper>
            <DetailsWrapper wraps>
                <Property>Place of birth:</Property>
                <Detail>{props.birthplace}</Detail>
            </DetailsWrapper>
        </ProductionDetails>
        <Biography>{props.biography}</Biography>
    </Wrapper>
);