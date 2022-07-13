import { useSelector } from "react-redux";
import { ErrorPage } from "../../../../common/ErrorPage";
import { Loader } from "../../../../common/Loader";
import { MovieTile } from "../../../../common/MovieTile";
import { selectMoviesGenres, selectGenresFetchStatus } from "../../../movies/moviesSlice";
import { Title, Wrapper } from "./styled";

export const Movies = (props) => {
    const { header, list } = props;
    const genres = useSelector(selectMoviesGenres);
    const fetchStatus = useSelector(selectGenresFetchStatus);

    switch (fetchStatus) {
        case "completed":
            return (
                <>
                    <Title>Movies - {header} ({list.length})</Title>
                    <Wrapper>
                        {list.map((movie, index) =>
                            <MovieTile key={index}
                                title={movie.title}
                                date={movie.release_date}
                                poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null}
                                tags={movie.genre_ids.map(
                                    (genreId) => genres.find(
                                        (genre) => genre.id === genreId).name
                                )
                                }
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                                featured={movie.character || movie.job}
                                id={movie.id}
                            />
                        )}
                    </Wrapper>
                </>
            );
        case "error":
            return <ErrorPage />
        default:
            return <Loader />
    }
};