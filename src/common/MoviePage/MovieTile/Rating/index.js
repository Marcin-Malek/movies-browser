import { Wrapper, StarContainer, img, Rate, Votes } from "./styled";
import Star from "../../../../images/star.svg"
export const Rating = () => {
    return (
        <Wrapper>
            <StarContainer>
                <img src={Star} />
            </StarContainer>
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
        </Wrapper>
    )
};