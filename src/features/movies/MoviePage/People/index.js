import React from 'react';
import { Header } from '../../../../common/Header/styled';
import { PersonTile } from "../../../../common/PersonTile";
import { Wrapper } from '../../../people/PeopleList/styled';

export const People = ({ header, credits }) => {

    return (
        <>
            <Header>{header}</Header>
            <Wrapper>
                {credits.map((person, personIndex) =>
                    <PersonTile
                        key={personIndex}
                        id={person.id}
                        portrait={`https://image.tmdb.org/t/p/w780/${person.profile_path}`}
                        name={person.original_name}
                        role={person.character ? person.character : person.department}
                    />
                )}
            </Wrapper>
        </>
    );
};