import {MovieTile} from "./MovieTile";

function MovieList() {
    return (
        <MovieTile
            title={"Mulan"}
            year={"2020"}
            genre={"Action"} //na podstawie tego w przyszłości będzie renderować te boksy z gatunkami
            rate={"7,8"}
            votes={"35"}
        />
    )
}

export default MovieList;