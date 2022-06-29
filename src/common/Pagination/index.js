import { PaginationContainer, FirstPrevWrapper, PagesWrapper, NextLastWrapper, First, Previous, Next, Last, StyledNextIcon, StyledPrevIcon, CurrentPage } from "./styled";

export const Pagination = () => {
    return (
        <PaginationContainer>
            <FirstPrevWrapper>
                <First>
                    <StyledPrevIcon />
                    First
                </First>
                <Previous>
                    <StyledPrevIcon />
                    Previous
                </Previous>
            </FirstPrevWrapper>

            <PagesWrapper>
                Page <CurrentPage>1</CurrentPage> of <CurrentPage>500</CurrentPage>
            </PagesWrapper>

            <NextLastWrapper>
                <Next>
                    Next
                    <StyledNextIcon />
                </Next>
                <Last>
                    Last
                    <StyledNextIcon />
                </Last>
            </NextLastWrapper>
        </PaginationContainer>
    )
};