import { MovieTile } from "./MovieTile";
import { Wrapper } from "./styled";

export const MovieList = () => {
    return (
        <>
            <h1>Popular movies</h1>
            <Wrapper>
                <MovieTile
                    title={"Mulan"}
                    year={"2020"}
                    tags={["Action", "Adventure", "Drama"]}
                    rate={"7,8"}
                    votes={"35"}
                />
                <MovieTile
                    title={"Mulan"}
                    year={"2020"}
                    tags={["Action", "Adventure", "Drama"]}
                    rate={"7,8"}
                    votes={"35"}
                />
                <MovieTile
                    title={"Mulan"}
                    year={"2020"}
                    tags={["Action", "Adventure", "Drama"]}
                    rate={"7,8"}
                    votes={"35"}
                />
                <MovieTile
                    title={"Mulan"}
                    year={"2020"}
                    tags={["Action", "Adventure", "Drama"]}
                    rate={"7,8"}
                    votes={"35"}
                />
            </Wrapper>
        </>
    )
};