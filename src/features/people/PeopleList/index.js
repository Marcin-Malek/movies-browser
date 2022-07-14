import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { Pagination } from "../../../common/Pagination";
import { fetchPeople, selectPeopleFetchStatus, selectPeopleList } from "../peopleSlice";
import { PersonTile } from "../../../common/PersonTile";
import { Wrapper } from "./styled";
import { MainWrapper } from "../../../common/MainWrapper/styled";
import { Header } from "../../../common/Header/styled";

export const PeopleList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectPeopleFetchStatus);
    const people = useSelector(selectPeopleList);
    const { page } = useParams();

    useEffect(() => {
        dispatch(fetchPeople(page));
    }, [dispatch, page]);

    switch (fetchStatus) {
        case ("completed"):
            return (
                <MainWrapper>
                    <Header>Popular people</Header>
                    <Wrapper>
                        {people.map((person) =>
                            <PersonTile key={person.id}
                                name={person.name}
                                portrait={`https://image.tmdb.org/t/p/w780/${person.profile_path}`}
                                id={person.id}
                            />
                        )}
                    </Wrapper>
                    <Pagination currentPage={page} allPages={500} />
                </MainWrapper>
            );
        case ("error"):
            return <ErrorPage />
        default:
            return <Loader />
    }
};