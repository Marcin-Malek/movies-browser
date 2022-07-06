import React, { useEffect } from 'react';
import { MainWrapper } from './styled';
import { PersonDetails } from "./PersonDetails";
import { Movies } from './Movies';
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectFetchStatus, selectPersonDetails } from '../peopleSlice';
import { ErrorPage } from '../../../common/ErrorPage';
import Loader from '../../../common/Loader';



export const PersonPage = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);
    const personDetails = useSelector(selectPersonDetails);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    switch (fetchStatus) {
        case "completed":
            const person = personDetails.data;
            return (
                <MainWrapper>
                    <PersonDetails
                        image={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        name={person.name}
                        birthday={person.birthday}
                        birthplace={person.place_of_birth}
                        biography={person.biography}
                    />
                    <Movies header={"Cast"} list={person.combined_credits.cast}/>
                    <Movies header={"Crew"} list={person.combined_credits.crew}/>
                </MainWrapper>
            );
        case "error":
            return (<ErrorPage />);
        default:
            return (<Loader />);
    }
};