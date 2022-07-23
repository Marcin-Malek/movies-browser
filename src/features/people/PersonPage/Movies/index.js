import { MovieTile } from "../../../../common/MovieTile";
import { MoviesWrapper } from "../../../movies/MovieList/styled";
import { Header } from "../../../../common/Header"

export const Movies = (props) => {
    const { header, list } = props;
  
    return (
        <>
            <Header>Movies - {header} ({list.length})</Header>
            <MoviesWrapper>
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
            </MoviesWrapper>
        </>
    );

};