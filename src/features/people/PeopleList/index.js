import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { Pagination } from "../../../common/Pagination";
import { fetchPeople, selectPeopleFetchStatus, selectPeopleList, selectPeoplePageCount } from "../peopleSlice";
import { PersonTile } from "../../../common/PersonTile";
import { Wrapper } from "../../movies/MovieList/styled";
import { MainWrapper } from "../../../common/MainWrapper/styled";
import { Header } from "../../../common/Header/styled";
import { useQueryParameter } from "../../../common/useQueryParameter";
import { SearchResults } from "../../../common/SearchResults";

export const PeopleList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectPeopleFetchStatus);
    const people = useSelector(selectPeopleList);
    const { page } = useParams();

    const pageCount = useSelector(selectPeoplePageCount);
    const pageQuery = useQueryParameter("p");
    const searchQuery = useQueryParameter("search");
    const currentPage = searchQuery ? pageQuery : page;

    useEffect(() => {
        dispatch(fetchPeople({page: currentPage, query: searchQuery}));
    }, [dispatch, page, searchQuery, currentPage]);

    if (searchQuery) {
        return <SearchResults people={true}/>
    }

    switch (fetchStatus) {
        case ("completed"):
            return (
                <MainWrapper>
                    <Header>Popular people</Header>
                    <Wrapper>
                        {people.map((person) =>
                            <PersonTile key={person.id}
                                name={person.name}
                                portrait={person.profile_path ? `https://image.tmdb.org/t/p/w185/${person.profile_path}` : null}
                                id={person.id}
                            />
                        )}
                    </Wrapper>
                    <Pagination currentPage={currentPage || 1} allPages={pageCount > 500 ? 500 : pageCount} />
                </MainWrapper>
            );
        case ("error"):
            return <ErrorPage />
        default:
            return <Loader />
    }
};