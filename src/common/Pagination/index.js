import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../useWindowSize";
import { useQueryParameter } from "../useQueryParameter";
import { selectPage, selectPageCount, setPage } from "../../features/movies/moviesSlice";
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

export const Pagination = () => {
    const [width] = useWindowSize();
    const searchQuery = useQueryParameter("search");
    const currentPage = useSelector(selectPage);
    const pageCount = useSelector(selectPageCount);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allPages = pageCount < 500 ? pageCount : 500;

    useEffect(() => {
        navigate(`../movies/page=${currentPage}${searchQuery && `?search=${searchQuery}` || ""}`);
    }, [currentPage]);

    return (
        <PaginationContainer>
            <ButtonsWrapper disabled={parseInt(currentPage) <= 1}>
                <Button onClick={() => parseInt(currentPage) > 1 && dispatch(setPage(1))}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? <StyledPrevIcon /> : "First"}
                </Button>
                <Button onClick={() => parseInt(currentPage) > 1 && dispatch(setPage(parseInt(currentPage) - 1))}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Button>
            </ButtonsWrapper>

            <PagesWrapper>
                Page <BoldText>{currentPage}</BoldText> of <BoldText>{allPages}</BoldText>
            </PagesWrapper>

            <ButtonsWrapper disabled={parseInt(currentPage) === allPages}>
                <Button onClick={() => parseInt(currentPage) !== allPages && dispatch(setPage(parseInt(currentPage) + 1))}>
                    {width <= theme.breakpoint.mobile ? "" : "Next"}
                    <StyledNextIcon />
                </Button>
                <Button onClick={() => parseInt(currentPage) !== allPages && dispatch(setPage(allPages))}>
                    {width <= theme.breakpoint.mobile ? <StyledNextIcon /> : "Last"}
                    <StyledNextIcon />
                </Button>
            </ButtonsWrapper>
        </PaginationContainer >
    );
};