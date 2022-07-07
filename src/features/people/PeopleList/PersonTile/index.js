import portrait from "../../../../images/portrait.jpg";
import { Content, Img, Name, Role } from "./styled.js";

export const PersonTile = ({name, role, portrait}) => {
    return (
        <Content>
            <Img src={portrait}/>
            <Name> {name} </Name>
            <Role> {role} </Role>
        </Content>
    )
};