import {
    PaginationContainer,
    FirstPrevWrapper,
    PagesWrapper,
    NextLastWrapper,
    First,
    Previous,
    Next,
    Last,
    StyledNextIcon,
    StyledPrevIcon,
    CurrentPage
} from "./styled";
import { theme } from "../../app/theme.js";
import { useWindowSize } from "../useWindowSize";

export const Pagination = ({ currentPage, allPages }) => {
    const [width] = useWindowSize();

    return (
        <PaginationContainer>
            <FirstPrevWrapper>
                <First>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? <StyledPrevIcon /> : "First"}
                </First>
                <Previous>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Previous>
            </FirstPrevWrapper>

            <PagesWrapper>
                Page <CurrentPage>{currentPage}</CurrentPage> of <CurrentPage>{allPages}</CurrentPage>
            </PagesWrapper>

            <NextLastWrapper>
                <Next>
                    {width <= theme.breakpoint.mobile ? "" : "Next"}
                    <StyledNextIcon />
                </Next>
                <Last>
                    {width <= theme.breakpoint.mobile ? <StyledNextIcon /> : "Last"}
                    <StyledNextIcon />
                </Last>
            </NextLastWrapper>
        </PaginationContainer>
    )
};