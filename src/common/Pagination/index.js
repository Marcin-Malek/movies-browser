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
            <ButtonsWrapper>
                <Button>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? <StyledPrevIcon /> : "First"}
                </Button>
                <Button>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Button>
            </ButtonsWrapper>

            <PagesWrapper>
                Page <BoldText>{currentPage}</BoldText> of <BoldText>{allPages}</BoldText>
            </PagesWrapper>

            <ButtonsWrapper>
                <Button>
                    {width <= theme.breakpoint.mobile ? "" : "Next"}
                    <StyledNextIcon />
                </Button>
                <Button>
                    {width <= theme.breakpoint.mobile ? <StyledNextIcon /> : "Last"}
                    <StyledNextIcon />
                </Button>
            </ButtonsWrapper>
        </PaginationContainer>
    )
};