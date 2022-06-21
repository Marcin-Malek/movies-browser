import Container from "./Container";
import { Poster } from "./Poster";
import { Description } from "./Description";
import { Rating } from "./Rating";

function MovieTile() {
    return (
        <Container>
            <Poster />
            <Description />
            <Rating />
        </Container>
    )
}

export default MovieTile;