import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import {
    fetchGenres,
    fetchMovies,
    selectFetchStatus,
    selectMoviesGenres,
    selectMoviesList,
    selectPageCount,
} from "../moviesSlice";
import { MovieTile } from "./MovieTile";
import { Content, Title, Wrapper } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { ErrorPage } from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import {StyledNoResults} from "../../../common/NoResults/styled.js"
import { SearchResults } from "../../../common/SearchResults";
import { useQueryParameter } from "../../../common/useQueryParameter";

export const MovieList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);
    const movies = useSelector(selectMoviesList);
    const genres = useSelector(selectMoviesGenres);
    const pageCount = useSelector(selectPageCount);
    const pageQuery = useQueryParameter("p");
    const searchQuery = useQueryParameter("search");
    const { page } = useParams();
    const currentPage = searchQuery ? pageQuery : page;

    useEffect(() => {
        if (!genres.length > 0) {
            dispatch(fetchGenres());
        } else {
            dispatch(fetchMovies({ page: currentPage, query: searchQuery }));
        }
    }, [dispatch, currentPage, genres, searchQuery]);

    if (searchQuery) {
        return <SearchResults />
    }

    switch (fetchStatus) {
        case "completed":
            if(movies.length === 0) {
                return (
                    <Content>
                        <Title>Sorry, there are no results for “Muan”</Title>
                        <StyledNoResults />
                    </Content>
                )
            }
            return (
                <Content>
                    <Title>Popular movies</Title>
                    <Wrapper>
                        {movies.map((movie) =>
                            <MovieTile
                                key={movie.id}
                                id={movie.id}
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                title={movie.title}
                                date={movie.release_date}
                                tags={movie.genre_ids.map(
                                    (genreId) => genres.find(
                                        (genre) => genre.id === genreId).name
                                )
                                }
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                    <Pagination currentPage={currentPage || 1} allPages={pageCount > 500 ? 500 : pageCount} />
                </Content>
            );
        case "error":
            return (<ErrorPage />);
        default:
            return (
                <Content>
                    <Loader />
                </Content>
            );
    }

};