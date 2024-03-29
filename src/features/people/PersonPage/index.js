import React, { useEffect } from 'react';
import { PersonDetails } from "./PersonDetails";
import { Movies } from './Movies';
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectPersonFetchStatus, selectPersonDetails, fetchPeople } from '../peopleSlice';
import { ErrorPage } from '../../../common/ErrorPage';
import { Loader } from '../../../common/Loader';
import { useParams } from 'react-router-dom';
import { MainWrapper } from '../../../common/MainWrapper';
import { useQueryParameter } from '../../../common/useQueryParameter';
import { SearchResults } from '../../../common/SearchResults';

export const PersonPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectPersonFetchStatus);
    const person = useSelector(selectPersonDetails);
    const searchQuery = useQueryParameter("search");
    const currentPage = useQueryParameter("p");

    useEffect(() => {
        dispatch(fetchPerson(id));
        dispatch(fetchPeople({page: currentPage, query: searchQuery}));
    }, [dispatch, id, currentPage, searchQuery]);

    if (searchQuery) {
        return <SearchResults />
    }

    switch (fetchStatus) {
        case "completed":
            return (
                <MainWrapper>
                    <PersonDetails
                        image={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : null}
                        name={person.name}
                        birthday={person.birthday}
                        birthplace={person.place_of_birth}
                        biography={person.biography}
                    />
                    <Movies header={"Cast"} list={person.combined_credits.cast.filter(cast => cast.media_type === "movie")} />
                    <Movies header={"Crew"} list={person.combined_credits.crew.filter(crew => crew.media_type === "movie")} />
                </MainWrapper>
            );
        case "error":
            return <ErrorPage />
        default:
            return <Loader />
    }
};