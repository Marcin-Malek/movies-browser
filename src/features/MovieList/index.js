import { MovieTile } from "./MovieTile";

export const MovieList = () => {
    return (
        <>
            <h1>Popular movies</h1>
            <MovieTile
                title={"Mulan"}
                year={"2020"}
                genre={"Action"} //na podstawie tego w przyszłości będzie renderować te boksy z gatunkami
                rate={"7,8"}
                votes={"35"}
            />
        </>
    )
};