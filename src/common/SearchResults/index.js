import { useSelector } from "react-redux";
import { MovieTile } from "../MovieTile";
import { Wrapper } from "../../features/movies/MovieList/styled";
import { selectMoviesFetchStatus, selectMoviesGenres, selectMoviesList, selectMoviesPageCount, selectMoviesResultCount } from "../../features/movies/moviesSlice";
import { ErrorPage } from "../ErrorPage";
import { Loader } from "../Loader";
import { Pagination } from "../Pagination";
import { useQueryParameter } from "../useQueryParameter";
import { StyledNoResults } from "./styled";
import { MainWrapper } from "../MainWrapper/styled";
import { Header } from "../Header/styled";
import { selectPeopleFetchStatus, selectPeopleList, selectPeopleResultCount, selectPeoplePageCount } from "../../features/people/peopleSlice";
import { useLocation } from "react-router-dom";
import { PersonTile } from "../PersonTile";

export const SearchResults = () => {
    const pageType = useLocation().pathname.split("/")[1];
    const fetchMoviesStatus = useSelector(selectMoviesFetchStatus);
    const fetchPeopleStatus = useSelector(selectPeopleFetchStatus);
    const genres = useSelector(selectMoviesGenres);
    const movies = useSelector(selectMoviesList);
    const people = useSelector(selectPeopleList);
    const resultMoviesCount = useSelector(selectMoviesResultCount);
    const pageMoviesCount = useSelector(selectMoviesPageCount);
    const resultPeopleCount = useSelector(selectPeopleResultCount);
    const pagePeopleCount = useSelector(selectPeoplePageCount);
    const searchQuery = useQueryParameter("search");
    const pageQuery = useQueryParameter("p");

    console.log(people);
    if (pageType === "movies") {
        switch (fetchMoviesStatus) {
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
                        <Header>Search results for “{searchQuery}” ({resultMoviesCount})</Header>
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
                        <Pagination currentPage={pageQuery || 1} allPages={pageMoviesCount > 500 ? 500 : pageMoviesCount} searchPages={true} />
                    </MainWrapper>
                );
            case "error":
                return <ErrorPage />
            default:
                return (
                    <MainWrapper>
                        <Header>Search results for "{searchQuery}"</Header>
                        <Loader />
                    </MainWrapper>
                );
        }
    }
    if (pageType === "people") {
        switch (fetchPeopleStatus) {
            case "completed":
                if (people.length === 0) {
                    return (
                        <MainWrapper>
                            <Header>Sorry, there are no results for “{searchQuery}”</Header>
                            <StyledNoResults />
                        </MainWrapper>
                    )
                };
                return (
                    <MainWrapper>
                        <Header>Search results for “{searchQuery}” ({resultPeopleCount})</Header>
                        <Wrapper>
                            {people.map((person) =>
                                <PersonTile
                                    key={person.id}
                                    name={person.name}
                                    portrait={person.profile_path ? `https://image.tmdb.org/t/p/w185/${person.profile_path}` : null}
                                    id={person.id}
                                />
                            )}
                        </Wrapper>
                        <Pagination currentPage={pageQuery || 1} allPages={pagePeopleCount > 500 ? 500 : pagePeopleCount} searchPages={true} />
                    </MainWrapper>
                )
            case "error":
                return <ErrorPage />
            default:
                return (
                    <MainWrapper>
                        <Header>Search results for "{searchQuery}"</Header>
                        <Loader />
                    </MainWrapper>
                );
        }
    };
};