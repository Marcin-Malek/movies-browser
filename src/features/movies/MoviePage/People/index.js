import React from 'react';
import { Header, List, Wrapper } from "./styled";
import { PersonTile } from "../../../people/PeopleList/PersonTile/index.js";

export const People = ({ header, credits }) => {

    return (
        <Wrapper>
            <Header>{header}</Header>
            <List>
                {credits.map((person) =>
                    <PersonTile
                        key={person.id}
                        id={person.id}
                        portrait={person.profile_path ? `https://image.tmdb.org/t/p/w185/${person.profile_path}` : null}
                        name={person.original_name}
                        role={person.character ? person.character : person.department}
                    />
                )}
            </List>
        </Wrapper>
    );
};