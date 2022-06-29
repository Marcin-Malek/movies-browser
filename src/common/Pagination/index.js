import { PaginationContainer, FirstPrevWrapper, PagesWrapper, NextLastWrapper, First, Previous, Next, Last, StyledNextIcon, StyledPrevIcon, CurrentPage } from "./styled";
import { useState, useEffect } from "react";

function useWindowSize() {
    const [size, setSize] = useState([ window.innerWidth]);
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
    const number = 767;
    if(width <= number) {
        return (
            <PaginationContainer>
                <FirstPrevWrapper>
                    <First>
                        <StyledPrevIcon />
                        <StyledPrevIcon />
                    </First>
                    <Previous>
                        <StyledPrevIcon />
                    </Previous>
                </FirstPrevWrapper>
    
                <PagesWrapper>
                    Page <CurrentPage>1</CurrentPage> of <CurrentPage>500</CurrentPage>
                </PagesWrapper>
    
                <NextLastWrapper>
                    <Next>
                        <StyledNextIcon />
                    </Next>
                    <Last>
                        <StyledNextIcon />
                        <StyledNextIcon />
                    </Last>
                </NextLastWrapper>
            </PaginationContainer>
        )
    }else {

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
    }
};