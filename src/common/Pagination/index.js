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
import { useLocation } from "react-router-dom";

export const Pagination = ({ currentPage, allPages }) => {
    const [width] = useWindowSize();
    const { pathname } = useLocation();

    return (
        <PaginationContainer>
            <ButtonsWrapper disabled={parseInt(currentPage) <= 1}>
                <Button to={parseInt(currentPage) <= 1 ? "" : pathname.replace(currentPage, 1)}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? <StyledPrevIcon /> : "First"}
                </Button>
                <Button to={parseInt(currentPage) <= 1 ? "" : pathname.replace(currentPage, parseInt(currentPage) - 1)}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Button>
            </ButtonsWrapper>

            <PagesWrapper>
                Page <BoldText>{currentPage}</BoldText> of <BoldText>{allPages}</BoldText>
            </PagesWrapper>

            <ButtonsWrapper disabled={parseInt(currentPage) === allPages}>
                <Button to={parseInt(currentPage) === allPages ? "" : pathname.replace(currentPage, parseInt(currentPage) + 1)}>
                    {width <= theme.breakpoint.mobile ? "" : "Next"}
                    <StyledNextIcon />
                </Button>
                <Button to={parseInt(currentPage) === allPages ? "" : pathname.replace(currentPage, allPages)}>
                    {width <= theme.breakpoint.mobile ? <StyledNextIcon /> : "Last"}
                    <StyledNextIcon />
                </Button>
            </ButtonsWrapper>
        </PaginationContainer>
    )
};