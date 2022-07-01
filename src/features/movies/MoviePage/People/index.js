import React from 'react';
import { Header, Item, List, Wrapper } from "./styled";

export const People = ({header}) => (
    <Wrapper>
        <Header>{header}</Header>
        <List>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </List>
    </Wrapper>
)