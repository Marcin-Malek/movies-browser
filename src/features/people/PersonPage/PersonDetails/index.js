import React from 'react';
import { theme } from '../../../../app/theme';
import { formatDate } from '../../../../common/formatDate';
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
    const date = formatDate(props.birthday);

    return (
        <Wrapper>
            <Image src={props.image} alt={props.name} />
            <Name>{props.name}</Name>
            <ProductionDetails>
                <DetailsWrapper>
                    <Property>{width >= theme.breakpoint.mobile ? "Date of Birth: " : "Birth: "}</Property>
                    <Detail>
                        {props.birthday ? <time dateTime={props.birthday}>{date}</time>
                            : <span>(No birthday info)</span>
                        }
                    </Detail>
                </DetailsWrapper>
                <DetailsWrapper>
                    <Property>Place of birth:</Property>
                    <Detail>{props.birthplace}</Detail>
                </DetailsWrapper>
            </ProductionDetails>
            <Biography>{props.biography}</Biography>
        </Wrapper>)
};


