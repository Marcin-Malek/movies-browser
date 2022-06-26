import React from 'react';
import { MovieDetails } from './MovieDetails';
import { MoviePoster } from './MoviePoster';
import { People } from './People';
import { MainWrapper } from './styled';
import image from "../../images/BigPoster.jpg"

export const MoviePage = () => (
    <>
        <MoviePoster
            image={image}
            rating={"7,8"}
            votes={"335"} />
        <MainWrapper>
            <MovieDetails
                title={"Mulan"}
                year={"2020"}
                production={"China, United States of America"}
                release={"24.10.2020"}
                tags={["Action", "Drama", "Adventure"]}
                rating={"7,8"}
                votes={"335"}
                description={"A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father."}
            />
            <People header={"Cast"}/>
            <People header={"Crew"}/>
        </MainWrapper>
    </>
);