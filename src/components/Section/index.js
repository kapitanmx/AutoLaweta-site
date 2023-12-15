import React from "react";
import {Wrapper, Content, Img} from './Section.styles';

const Section = ({text}) => (
    <Wrapper>
        <Content>
            <p>{text}</p>
        </Content>
    </Wrapper>
);

export default Section;