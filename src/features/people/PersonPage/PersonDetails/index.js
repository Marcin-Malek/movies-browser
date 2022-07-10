import React from 'react';
import { theme } from '../../../../app/theme';
import { useWindowSize } from '../../../../common/useWindowSize';
import { Wrapper, ProductionDetails, Property, DetailsWrapper, Detail, Biography, Image, Name } from './styled';



export const PersonDetails = (props) => {

    const [width] = useWindowSize();

    const formatBirthday = (birthday) => {
        const date = new Date(birthday);
        return date.toLocaleString(
            "pl", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        )
    };

    return (<Wrapper>
        <Image src={props.image} />
        <Name>{props.name}</Name>
        <ProductionDetails>
            <DetailsWrapper>
                <Property>{width >= theme.breakpoint.mobile ? "Date of Birth: " : "Birth: "}</Property>
                <Detail>{formatBirthday(props.birthday)}</Detail>
            </DetailsWrapper>
            <DetailsWrapper wraps>
                <Property>Place of birth:</Property>
                <Detail>{props.birthplace}</Detail>
            </DetailsWrapper>
        </ProductionDetails>
        <Biography>{props.biography}</Biography>
    </Wrapper>)

};


