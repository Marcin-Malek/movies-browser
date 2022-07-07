import React, { useEffect } from 'react';
import { MainWrapper } from './styled';
import { PersonDetails } from "./PersonDetails";
import { Movies } from './Movies';
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectFetchStatus, selectPersonDetails } from '../peopleSlice';
import { ErrorPage } from '../../../common/ErrorPage';
import Loader from '../../../common/Loader';
import { useParams } from 'react-router-dom';



export const PersonPage = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);
    const person = useSelector(selectPersonDetails);

    useEffect(() => {
        dispatch(fetchPerson(id));
    }, [dispatch, id]);

    switch (true) {
        case (fetchStatus === "completed" && person !== undefined):
            return (
                <MainWrapper>
                    <PersonDetails
                        image={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        name={person.name}
                        birthday={person.birthday}
                        birthplace={person.place_of_birth}
                        biography={person.biography}
                    />
                    <Movies header={"Cast"} list={person.combined_credits.cast} />
                    <Movies header={"Crew"} list={person.combined_credits.crew} />
                </MainWrapper>
            );
        case fetchStatus === "completed":
            return (<ErrorPage />);
        default:
            return (<Loader />);
    }
};