import { Content, Img, Name, Role } from "./styled.js";

export const PersonTile = ({name, role, portrait}) => {
    return (
        <Content>
            <Img src={portrait} alt={name}/>
            <Name> {name} </Name>
            <Role> {role} </Role>
        </Content>
    )
};