import { PersonTile } from "./PersonTile";
import { Content, Title, Wrapper } from "./styled";

export const PeopleList = () => {
    return (

        <Content>
            <Title>Popular people</Title>
            <Wrapper>
                <PersonTile/>
            </Wrapper>
        </Content>

    )
};