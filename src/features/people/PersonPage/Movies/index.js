import { useSelector } from "react-redux";
import Loader from "../../../../common/Loader";
import { MovieTile } from "../../../movies/MovieList/MovieTile";
import { selectFetchStatus } from "../../../people/peopleSlice";
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
                        date={movie.release_date || movie.first_air_date}
                        poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        tags={["Action", "Adventure", "Drama"]}
                        rate={movie.vote_average}
                        votes={movie.vote_count}
                        featured={movie.character}
                    />
                )}
            </Wrapper>
        </Content>
    );
};