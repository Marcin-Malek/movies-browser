import { Wrapper, StarContainer, Img, Rate, Votes } from "./styled";
import Star from "../../../../images/star.svg"
export const Rating = () => {
    return (
        <Wrapper>
            <StarContainer>
                <Img src={Star} />
            </StarContainer>
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
        </Wrapper>
    )
};