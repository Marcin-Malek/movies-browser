import React from 'react';
import { Header } from '../../../../common/Header';
import { PersonTile } from "../../../../common/PersonTile";
import { PeopleWrapper } from '../../../people/PeopleList/styled';

export const People = ({ header, credits }) => {

    return (
        <>
            <Header>{header}</Header>
            <PeopleWrapper>
                {credits.map((person, personIndex) =>
                    <PersonTile
                        key={personIndex}
                        id={person.id}
                        portrait={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        name={person.original_name}
                        role={person.character ? person.character : person.department}
                    />
                )}
            </PeopleWrapper>
        </>
    );
};