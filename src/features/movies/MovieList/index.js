import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectFetchStatus, selectMoviesList, } from "../moviesSlice";
import { MovieTile } from "./MovieTile";
import { Content, Title, Wrapper } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { ErrorPage } from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";

export const MovieList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);
    const movies = useSelector(selectMoviesList);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);
    
    switch (fetchStatus) {
        case "completed":
            const moviesData = movies.data;
            return (
                <Content>
                    <Title>Popular movies</Title>
                    <Wrapper>
                        {moviesData.results.map((movie) =>
                            <MovieTile key={movie.id}
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                title={movie.title}
                                year={movie.release_date.slice(0,4)}
                                tags={["Action", "Adventure", "Drama"]}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                  <Pagination />
                </Content>
            );
        case "error":
            return (<ErrorPage />);
        default:
            return (<Loader />);
    }

};