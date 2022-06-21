import { Wrapper, InfoWrapper, TagsContainer, TagContainer, Tag, Title, Year } from "./styled";

export const Description = () => {
    return (
        <Wrapper>
            <InfoWrapper>
                <Title>
                    Mulan
                </Title>
                <Year>
                    2020
                </Year>
            </InfoWrapper>
            <TagsContainer>
                <TagContainer>
                    <Tag>
                        Action
                    </Tag>
                </TagContainer>
                <TagContainer>
                    <Tag>
                        Adventure
                    </Tag>
                </TagContainer>
                <TagContainer>
                    <Tag>
                        Drama
                    </Tag>
                </TagContainer>
            </TagsContainer>
        </Wrapper>
    )
};