import { PaginationContainer, FirstPrevWrapper, PagesWrapper, NextLastWrapper, First, Previous, Next, Last, StyledNextIcon, StyledPrevIcon, CurrentPage } from "./styled";
import { useState, useEffect } from "react";
import { theme } from "../../app/theme.js";

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
};

export const Pagination = () => {
    const [width] = useWindowSize();

    return (
        <PaginationContainer>
            <FirstPrevWrapper>
                <First>
                    <StyledPrevIcon />
                    {(width <= theme.breakpoint.mobile) ? <StyledPrevIcon /> : "First"}
                </First>
                <Previous>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Previous>
            </FirstPrevWrapper>

            <PagesWrapper>
                Page <CurrentPage>1</CurrentPage> of <CurrentPage>500</CurrentPage>
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