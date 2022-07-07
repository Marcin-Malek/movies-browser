import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchMovies, selectFetchStatus, selectMoviesGenres, selectMoviesList, } from "../moviesSlice";
import { MovieTile } from "./MovieTile";
import { Content, Title, Wrapper } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { ErrorPage } from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { useQueryParameter } from "../../../common/useQueryParameter";

export const MovieList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);
    const movies = useSelector(selectMoviesList);
    const genres = useSelector(selectMoviesGenres);
    const { page } = useParams();
    const searchQuery = useQueryParameter("search");

    useEffect(() => {
        dispatch(fetchMovies(page));
    }, [dispatch, page]);

    switch (fetchStatus) {
        case "completed":
            return (
                <Content>
                    <Title>Popular movies</Title>
                    <Wrapper>
                        {movies.map((movie) =>
                            <MovieTile
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.release_date.slice(0, 4)}
                                tags={
                                    movie.genre_ids.map(
                                        (genreId) => genres.find(
                                            (genre) => genre.id === genreId).name
                                    )
                                }
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                    <Pagination currentPage={page} allPages={500} />
                </Content>
            );
        case "error":
            return (<ErrorPage />);
        default:
            return (<Loader />);
    }

};