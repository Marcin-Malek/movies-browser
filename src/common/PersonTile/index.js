import { useNavigate } from "react-router-dom";
import { Content, Img, Name, Role } from "./styled.js";

export const PersonTile = ({name, role, portrait, id}) => {
    const navigate = useNavigate();

    return (
        <Content onClick={() => navigate(`../people/${id}`)}>
            <Img src={portrait === "https://image.tmdb.org/t/p/w780/null" ? null : portrait} alt={name} loading="lazy" />
            <Name> {name} </Name>
            {role && <Role> {role} </Role>}
        </Content>
    )
};