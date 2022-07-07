import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { Pagination } from "../../../common/Pagination";
import { fetchPeople, selectFetchStatus, selectPeopleList } from "../peopleSlice";
import { PersonTile } from "./PersonTile";
import { Content, Title, Wrapper } from "./styled";

export const PeopleList = (props) => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);
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
                                portrait={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                                id={person.id}
                                // role={props.role}
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