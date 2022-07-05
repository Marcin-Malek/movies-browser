import React from 'react';
import { MainWrapper } from './styled';
import { PersonDetails } from "./PersonDetails";
import image from "../../../images/BigPortrait.jpg"

export const PersonPage = () => (
    <>
        <MainWrapper>
            <PersonDetails
                image={image}
                name={"Liu Yifei"}
                birthday={"25.08.1987"}
                birthplace={"Wuhan, Hubei, China"}
                biography={"Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years."}
            />
            {/* <Movies header={"Cast"}/>
            <Movies header={"Crew"}/> */}
        </MainWrapper>
    </>
);