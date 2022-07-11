import { useLocation, useNavigate } from "react-router-dom";
import { useReplaceQueryParameter } from "../useReplaceQueryParameter";
import { useWindowSize } from "../useWindowSize";
import { theme } from "../../app/theme.js";
import {
    PaginationContainer,
    ButtonsWrapper,
    Button,
    PagesWrapper,
    BoldText,
    StyledNextIcon,
    StyledPrevIcon,
} from "./styled";

export const Pagination = ({ currentPage, allPages, searchPages }) => {
    const [width] = useWindowSize();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const replaceQueryParameter = useReplaceQueryParameter();

    return (
        <PaginationContainer>
            <ButtonsWrapper disabled={parseInt(currentPage) <= 1}>
                <Button
                    onClick={() => {
                        if (parseInt(currentPage) > 1) {
                            if (searchPages) {
                                replaceQueryParameter({ key: "p", value: 1 });
                            } else {
                                navigate(pathname.replace(currentPage, 1));
                            }
                        }
                    }}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? <StyledPrevIcon /> : "First"}
                </Button>
                <Button
                    onClick={() => {
                        if (parseInt(currentPage) > 1) {
                            if (searchPages) {
                                replaceQueryParameter({ key: "p", value: parseInt(currentPage) - 1 });
                            } else {
                                navigate(pathname.replace(currentPage, parseInt(currentPage) - 1));
                            }
                        }
                    }}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Button>
            </ButtonsWrapper>
            <PagesWrapper>
                Page <BoldText>{currentPage}</BoldText> of <BoldText>{allPages}</BoldText>
            </PagesWrapper>
            <ButtonsWrapper disabled={parseInt(currentPage) === allPages}>
                <Button
                    onClick={() => {
                        if (parseInt(currentPage) !== allPages) {
                            if (searchPages) {
                                replaceQueryParameter({ key: "p", value: parseInt(currentPage) + 1 || 2 });
                            } else {
                                navigate(pathname.replace(currentPage, parseInt(currentPage) + 1));
                            }
                        }
                    }}>
                    {width <= theme.breakpoint.mobile ? "" : "Next"}
                    <StyledNextIcon />
                </Button>
                <Button
                    onClick={() => {
                        if (parseInt(currentPage) !== allPages) {
                            if (searchPages) {
                                replaceQueryParameter({ key: "p", value: allPages });
                            } else {
                                navigate(pathname.replace(currentPage, allPages));
                            }
                        }
                    }}>
                    {width <= theme.breakpoint.mobile ? <StyledNextIcon /> : "Last"}
                    <StyledNextIcon />
                </Button>
            </ButtonsWrapper>
        </PaginationContainer >
    );
};