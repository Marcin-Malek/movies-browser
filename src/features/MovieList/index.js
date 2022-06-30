import { MovieTile } from "./MovieTile";
import { Content, Title, Wrapper } from "./styled";
import { Pagination } from "../../common/Pagination/index.js";

export const MovieList = () => {
    return (
        <>
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
                        tags={["Action"]}
                        rate={"7,8"}
                        votes={"35"}
                    />
                    <MovieTile
                        title={"Mulan long title long title Mulan long title long"}
                        year={"2020"}
                        tags={["Action"]}
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
                        tags={[]}
                        rate={"7,8"}
                        votes={"35"}
                    />
                    <MovieTile
                        title={"Mulan"}
                        year={"2020"}
                        tags={["Action"]}
                        rate={"7,8"}
                        votes={"35"}
                    />
                    <MovieTile
                        title={"Mulan long title long title Mulan long title long"}
                        year={"2020"}
                        tags={["Action", "Adventure", "Drama"]}
                        rate={"7,8"}
                        votes={"35"}
                    />
                </Wrapper>
            </Content>
            <Pagination />
        </>
    )
};