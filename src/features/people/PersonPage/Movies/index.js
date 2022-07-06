import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorPage } from "../../../../common/ErrorPage";
import Loader from "../../../../common/Loader";
import { MovieTile } from "../../../movies/MovieList/MovieTile";
import { fetchMovies, selectFetchStatus, selectMoviesList } from "../../../people/peopleSlice";
import { Content, Title, Wrapper } from "./styled";

export const Movies = (props) => {
    const fetchStatus = useSelector(selectFetchStatus);

    switch (fetchStatus) {
        case "initiated":
            return (
                <Loader />
            )
        case "completed":
            const { header, list } = props;
            return (
                <Content>
                    <Title>Movies - {header} ({list.length})</Title>
                    <Wrapper>
                        {list.map((movie) =>
                            <MovieTile key={movie.id}
                                title={movie.title}
                                year={movie.release_date}
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                tags={["Action", "Adventure", "Drama"]}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                </Content>
            );
    }
};