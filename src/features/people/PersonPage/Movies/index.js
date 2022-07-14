import { useSelector } from "react-redux";
import { MovieTile } from "../../../../common/MovieTile";
import { selectMoviesGenres } from "../../../movies/moviesSlice";
import { Content, Title, Wrapper } from "./styled";

export const Movies = (props) => {
    const { header, list } = props;
    const genres = useSelector(selectMoviesGenres);

    return (
        <Content>
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
        </Content>
    );
};