import portrait from "../../../images/portrait.jpg";
import { Content, Img, Title } from "./styled.js";

export const PersonTile = () => {
    return (
        <Content>
            <Img src={portrait}/>
            <Title>Liu Yifei</Title>
        </Content>
    )
};