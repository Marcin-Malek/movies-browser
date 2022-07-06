import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorPage } from "../../../../common/ErrorPage";
import { MovieTile } from "../../../movies/MovieList/MovieTile";
import { fetchMovies, selectFetchStatus, selectMoviesList } from "../../../movies/moviesSlice";
import { Content, Title, Wrapper } from "./styled";

export const Movies = (props) => {
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
                    <Title>Movies - {props.header} ({moviesData.results.length})</Title>
                    <Wrapper>
                        {moviesData.results.map((movie) =>
                            <MovieTile key={movie.id}
                                title={movie.title}
                                year={movie.release_date.slice(0, 4)}
                                tags={["Action", "Adventure", "Drama"]}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                </Content>
            );
        case "error":
            return (<ErrorPage />);
    }   
};