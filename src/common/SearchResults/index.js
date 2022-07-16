import { useSelector } from "react-redux";
import { MovieTile } from "../MovieTile";
import { Wrapper } from "../../features/movies/MovieList/styled";
import { selectMoviesFetchStatus, selectMoviesList, selectPageCount, selectResultCount } from "../../features/movies/moviesSlice";
import { ErrorPage } from "../ErrorPage";
import { Loader } from "../Loader";
import { Pagination } from "../Pagination";
import { useQueryParameter } from "../useQueryParameter";
import { StyledNoResults } from "./styled";
import { MainWrapper } from "../MainWrapper/styled";
import { Header } from "../Header/styled";

export const SearchResults = () => {
    const fetchStatus = useSelector(selectMoviesFetchStatus);
    const movies = useSelector(selectMoviesList);
    const resultCount = useSelector(selectResultCount);
    const pageCount = useSelector(selectPageCount);
    const searchQuery = useQueryParameter("search");
    const pageQuery = useQueryParameter("p");

    switch (fetchStatus) {
        case "completed":
            if (movies.length === 0) {
                return (
                    <MainWrapper>
                        <Header>Sorry, there are no results for “{searchQuery}”</Header>
                        <StyledNoResults />
                    </MainWrapper>
                )
            }
            return (
                <MainWrapper>
                    <Header>Search results for “{searchQuery}” ({resultCount})</Header>
                    <Wrapper>
                        {movies.map((movie) =>
                            <MovieTile
                                key={movie.id}
                                id={movie.id}
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                title={movie.title}
                                date={movie.release_date}
                                genreIds={movie.genre_ids}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                            />
                        )}
                    </Wrapper>
                    <Pagination currentPage={pageQuery || 1} allPages={pageCount > 500 ? 500 : pageCount} searchPages={true} />
                </MainWrapper>
            );
        case "error":
            return <ErrorPage />
        default:
            return (
                <MainWrapper>
                    <Header>Search results for {searchQuery}</Header>
                    <Loader />
                </MainWrapper>
            );
    }
};