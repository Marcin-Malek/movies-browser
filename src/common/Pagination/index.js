import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../useWindowSize";
import { useQueryParameter } from "../useQueryParameter";
import { selectPage, selectPageCount, selectSearchPage, setPage, setSearchPage } from "../../features/movies/moviesSlice";
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
    const page = useSelector(selectPage);
    const searchPage = useSelector(selectSearchPage);
    const pageCount = useSelector(selectPageCount);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentPage = searchQuery ? searchPage : page
    const allPages = pageCount < 500 ? pageCount : 500;

    useEffect(() => {
        if (searchQuery) {
            navigate(`../movies/page=${searchPage}?search=${searchQuery}`);
        } else {
            navigate(`../movies/page=${currentPage}`);
        }
    }, [currentPage, searchPage]);

    return (
        <PaginationContainer>
            <ButtonsWrapper disabled={parseInt(currentPage) <= 1}>
                <Button onClick={() => parseInt(currentPage) > 1 && dispatch(searchQuery ? setSearchPage(1) : setPage(1))}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? <StyledPrevIcon /> : "First"}
                </Button>
                <Button onClick={() => parseInt(currentPage) > 1 && dispatch(searchQuery ? setSearchPage(parseInt(currentPage) - 1) : setPage(parseInt(currentPage) - 1))}>
                    <StyledPrevIcon />
                    {width <= theme.breakpoint.mobile ? "" : "Previous"}
                </Button>
            </ButtonsWrapper>

            <PagesWrapper>
                Page <BoldText>{currentPage}</BoldText> of <BoldText>{allPages}</BoldText>
            </PagesWrapper>

            <ButtonsWrapper disabled={parseInt(currentPage) === allPages}>
                <Button onClick={() => parseInt(currentPage) !== allPages && dispatch(searchQuery ? setSearchPage(parseInt(currentPage) + 1) : setPage(parseInt(currentPage) + 1))}>
                    {width <= theme.breakpoint.mobile ? "" : "Next"}
                    <StyledNextIcon />
                </Button>
                <Button onClick={() => parseInt(currentPage) !== allPages && dispatch(searchQuery ? setSearchPage(allPages) : setPage(allPages))}>
                    {width <= theme.breakpoint.mobile ? <StyledNextIcon /> : "Last"}
                    <StyledNextIcon />
                </Button>
            </ButtonsWrapper>
        </PaginationContainer >
    );
};