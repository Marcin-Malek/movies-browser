import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    switch (fetchStatus) {
        case "completed":
            const peopleData = people.data;
            console.log(peopleData)
            return (
                <Content>
                    <Title>Popular people</Title>
                    <Wrapper>
                        {peopleData.results.map((person) =>
                            <PersonTile key={person.id}
                                name={person.name}
                                portrait={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                                // role={props.role}
                                />
                        )}
                    </Wrapper>
                  <Pagination />
                </Content>
            );
        case "error":
            return (<ErrorPage />);
        default:
            return (<Loader />);
    }
};