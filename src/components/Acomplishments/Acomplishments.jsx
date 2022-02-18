import React from 'react';

import {Section} from '../../themes/global';
import {Container, Item, Number, Text, Icon} from './AcomplishmentsStyles';
import {AcomplishmentsData} from '../../constants/acomplishments';

const Acomplishments = () => {
    return (
    <Section id="acomplishments">
        <Container>
            {AcomplishmentsData.map((card, i)=>(
                <Item id={i}>
                    <Icon>{card.icon}</Icon>
                    <Number>{card.number}+</Number>
                    <Text>{card.text}</Text>                    
                </Item>
            ))}
        </Container>
    </Section>

    )};

export default Acomplishments;
