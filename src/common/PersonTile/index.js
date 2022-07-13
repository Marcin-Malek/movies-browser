import { useNavigate } from "react-router-dom";
import { Content, Img, Name, Role } from "./styled.js";

export const PersonTile = ({name, role, portrait, id}) => {
    const navigate = useNavigate();

    return (
        <Content onClick={() => navigate(`../people/${id}`)}>
            <Img src={portrait} alt={name}/>
            <Name> {name} </Name>
            {role && <Role> {role} </Role>}
        </Content>
    )
};