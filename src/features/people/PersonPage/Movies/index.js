import { MovieTile } from "../../../../common/MovieTile";
import { Content, Title, Wrapper } from "./styled";

export const Movies = (props) => {
    const { header, list } = props;

    return (
        <Content>
            <Title>Movies - {header} ({list.length})</Title>
            <Wrapper>
                {list.map((movie, index) =>
                    <MovieTile key={index}
                        title={movie.title}
                        date={movie.release_date}
                        poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null}
                        genreIds={movie.genre_ids}
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