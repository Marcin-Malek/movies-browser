import { useSelector } from "react-redux";
import { MovieTile } from "../../features/movies/MovieList/MovieTile";
import { Content, Title, Wrapper } from "../../features/movies/MovieList/styled";
import { selectFetchMoviesStatus, selectMoviesGenres, selectMoviesList, selectPageCount } from "../../features/movies/moviesSlice";
import { ErrorPage } from "../ErrorPage";
import Loader from "../Loader";
import { Pagination } from "../Pagination";
import { useQueryParameter } from "../useQueryParameter";

export const SearchResults = () => {
    const fetchStatus = useSelector(selectFetchMoviesStatus);
    const genres = useSelector(selectMoviesGenres);
    const movies = useSelector(selectMoviesList);
    const pageCount = useSelector(selectPageCount);
    const searchQuery = useQueryParameter("search");
    const pageQuery = useQueryParameter("p");

    switch (fetchStatus) {
        case "completed":
            return (
                <Content>
                    <Title>Search results for {searchQuery}</Title>
                    <Wrapper>
                        {movies.map((movie) =>
                            <MovieTile
                                key={movie.id}
                                id={movie.id}
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                title={movie.title}
                                date={movie.release_date}
                                tags={movie.genre_ids.map(
                                    (genreId) => genres.find(
                                        (genre) => genre.id === genreId).name
                                )
                                }
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                    <Pagination currentPage={pageQuery || 1} allPages={pageCount > 500 ? 500 : pageCount} searchPages={true} />
                </Content>
            );
        case "error":
            return (<ErrorPage />);
        default:
            return (
                <Content>
                    <Title>Search results for {searchQuery}</Title>
                    <Loader />
                </Content>
            );
    }
};