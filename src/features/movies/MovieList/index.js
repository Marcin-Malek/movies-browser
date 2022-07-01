import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectFetchStatus, selectMoviesList, } from "../moviesSlice";
import { MovieTile } from "./MovieTile";
import { Content, Title, Wrapper } from "./styled";

export const MovieList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);
    const movies = useSelector(selectMoviesList);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    switch (fetchStatus) {
        case "completed":
            const moviesData = movies.data
            return (
                <Content>
                    <Title>Popular movies</Title>
                    <Wrapper>
                        {moviesData.results.map((movie) =>
                            <MovieTile key={movie.id}
                                title={movie.title}
                                year={"2020"}
                                tags={["Action", "Adventure", "Drama"]}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                </Content>
            );
        case "error":
            return (<span>error</span>)
        default:
            return (<span>loading</span>)
    }
};