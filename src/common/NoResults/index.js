import { Title, StyledNoResults, Wrapper } from "./styled";

export const NoResults = ({result}) => {
    return (
        <Wrapper>
            <Title>Sorry, there are no results for “{result}”</Title>
            <StyledNoResults/>
        </Wrapper>
    )
};