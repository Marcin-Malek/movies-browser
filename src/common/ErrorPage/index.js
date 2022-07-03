import { Link } from "react-router-dom";
import { Wrapper, StyledDangerIcon, Title, Text, Button } from "./styled";

export const ErrorPage = () => {
    return (
        <Wrapper>
            <StyledDangerIcon />
            <Title>Ooops! Something went wrong...</Title>
            <Text>Please check your network connection<br /> and try again</Text>
            <Link to="/">
                <Button>Back to home page</Button>
            </Link>
        </Wrapper>
    )
};