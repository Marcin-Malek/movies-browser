import { MovieTile } from "./MovieTile";
import { Content, Title, Wrapper } from "./styled";
import { Pagination } from "../../common/Pagination";

export const MovieList = () => {
    return (

        <Content>
            <Title>Popular movies</Title>
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
                    tags={[]}
                    rate={"7,8"}
                    votes={"35"}
                />
                <MovieTile
                    title={"Mulan"}
                    tags={["Action", "Drama"]}
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
            <Pagination />
        </Content>
    )
};