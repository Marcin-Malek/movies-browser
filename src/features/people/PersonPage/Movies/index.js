import { MovieTile } from "../../../movies/MovieList/MovieTile";
import { Content, Title, Wrapper } from "./styled";

export const Movies = (props) => {
    const { header, list } = props;
    return (
        <Content>
            <Title>Movies - {header} ({list.length})</Title>
            <Wrapper>
                {list.map((movie) =>
                    <MovieTile key={list.indexOf(movie)}
                        title={movie.title || movie.name}
                        date={movie.release_date}
                        poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null}
                        tags={["Action", "Adventure", "Drama"]}
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