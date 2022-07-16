import { MovieTile } from "../../../../common/MovieTile";
import { selectMoviesGenres, selectGenresFetchStatus } from "../../../movies/moviesSlice";
import { Wrapper } from "./styled";
import { Header } from "../../../../common/Header/styled"

export const Movies = (props) => {
    const { header, list } = props;
  
    return (
        <>
            <Header>Movies - {header} ({list.length})</Header>
            <Wrapper>
                {list.map((movie, index) =>
                    <MovieTile key={index}
                        title={movie.title}
                        date={movie.release_date}
                        poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        genreIds={movie.genre_ids}
                        rate={movie.vote_average}
                        votes={movie.vote_count}
                        featured={movie.character || movie.job}
                        id={movie.id}
                    />
                )}
            </Wrapper>
        </>
    );

};