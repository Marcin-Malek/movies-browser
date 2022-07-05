import {
    PaginationContainer,
    ButtonsWrapper,
    Button,
    PagesWrapper,
    BoldText,
    StyledNextIcon,
    StyledPrevIcon,
} from "./styled";
import { theme } from "../../app/theme.js";
import { useWindowSize } from "../useWindowSize";

export const Pagination = ({ currentPage, allPages }) => {
    const [width] = useWindowSize();
    
    return (
        <PaginationContainer>
            <ButtonsWrapper disabled={parseInt(currentPage) <= 1}>
                <Button to={parseInt(currentPage) <= 1 ? "" : `../movies/page=${1}`}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? <StyledPrevIcon /> : "First"}
                </Button>
                <Button to={parseInt(currentPage) <= 1 ? "" : `../movies/page=${parseInt(currentPage) - 1}`}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Button>
            </ButtonsWrapper>

            <PagesWrapper>
                Page <BoldText>{currentPage}</BoldText> of <BoldText>{allPages}</BoldText>
            </PagesWrapper>

            <ButtonsWrapper disabled={parseInt(currentPage) === allPages}>
                <Button to={parseInt(currentPage) === allPages ? "" : `../movies/page=${parseInt(currentPage) + 1}`}>
                    {width <= theme.breakpoint.mobile ? "" : "Next"}
                    <StyledNextIcon />
                </Button>
                <Button to={parseInt(currentPage) === allPages ? "" : `../movies/page=${allPages}`}>
                    {width <= theme.breakpoint.mobile ? <StyledNextIcon /> : "Last"}
                    <StyledNextIcon />
                </Button>
            </ButtonsWrapper>
        </PaginationContainer>
    )
};