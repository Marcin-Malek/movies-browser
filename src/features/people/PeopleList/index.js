import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { Pagination } from "../../../common/Pagination";
import { fetchPeople, selectPeopleFetchStatus, selectPeopleList } from "../peopleSlice";
import { PersonTile } from "./PersonTile";
import { Content, Title, Wrapper } from "./styled";

export const PeopleList = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectPeopleFetchStatus);
    const people = useSelector(selectPeopleList);
    const { page } = useParams();

    useEffect(() => {
        dispatch(fetchPeople(page));
    }, [dispatch, page]);

    switch (true) {
        case (fetchStatus === "completed" && people !== undefined):
            return (
                <Content>
                    <Title>Popular people</Title>
                    <Wrapper>
                        {people.map((person) =>
                            <PersonTile key={person.id}
                                name={person.name}
                                portrait={ person.profile_path ? `https://image.tmdb.org/t/p/w185/${person.profile_path}` : null}
                                id={person.id}
                                />
                        )}
                    </Wrapper>
                  <Pagination currentPage={page} allPages={500}/>
                </Content>
            );
        case (fetchStatus === "error"):
            return (<ErrorPage />);
        default:
            return (<Loader />);
    }
};