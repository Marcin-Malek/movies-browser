import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import {
    fetchMovies,
    selectMoviesFetchStatus,
    selectMoviesList,
    selectPageCount,
} from "../moviesSlice";
import { MovieTile } from "../../../common/MovieTile";
import { Wrapper } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { SearchResults } from "../../../common/SearchResults";
import { useQueryParameter } from "../../../common/useQueryParameter";
import { MainWrapper } from "../../../common/MainWrapper/styled";
import { Header } from "../../../common/Header/styled";

export const MovieList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectMoviesFetchStatus);
    const movies = useSelector(selectMoviesList);
    const pageCount = useSelector(selectPageCount);
    const pageQuery = useQueryParameter("p");
    const searchQuery = useQueryParameter("search");
    const { page } = useParams();
    const currentPage = searchQuery ? pageQuery : page;

    useEffect(() => {
        dispatch(fetchMovies({ page: currentPage, query: searchQuery }));
    }, [dispatch, currentPage, searchQuery]);

    if (searchQuery) {
        return <SearchResults />
    }

    switch (fetchStatus) {
        case "completed":
            return (
                <MainWrapper>
                    <Header>Popular movies</Header>
                    <Wrapper>
                        {movies.map((movie) =>
                            <MovieTile
                                key={movie.id}
                                id={movie.id}
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                title={movie.title}
                                date={movie.release_date}
                                genreIds={movie.genre_ids}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                    <Pagination currentPage={currentPage || 1} allPages={pageCount > 500 ? 500 : pageCount} />
                </MainWrapper>
            );
        case "error":
            return <ErrorPage />
        default:
            return <Loader />
    }

};