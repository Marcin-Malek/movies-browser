import React from 'react';
import { theme } from '../../../../app/theme';
import { useFormatDate } from '../../../../common/useFormatDate';
import { useWindowSize } from '../../../../common/useWindowSize';
import {
    Wrapper,
    ProductionDetails,
    Property,
    DetailsWrapper,
    Detail,
    Biography,
    Image,
    Name
} from './styled';

export const PersonDetails = (props) => {
    const [width] = useWindowSize();

    return (
        <Wrapper>
            <Image src={props.image} alt={props.name} />
            <Name>{props.name}</Name>
            <ProductionDetails>
                <DetailsWrapper>
                    <Property>{width >= theme.breakpoint.mobile ? "Date of Birth: " : "Birth: "}</Property>
                    <Detail><time dateTime={props.birthday}>{useFormatDate(props.birthday)}</time></Detail>
                </DetailsWrapper>
                <DetailsWrapper>
                    <Property>Place of birth:</Property>
                    <Detail>{props.birthplace}</Detail>
                </DetailsWrapper>
            </ProductionDetails>
            <Biography>{props.biography}</Biography>
        </Wrapper>)
};


