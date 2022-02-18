import React from 'react';
import { GridContainer, ListContainer, ListTitle, TagList, ListIcon, Tag } from './TechnologiesStyles'
import { TechnologiesData } from '../../constants/technologies';
import { Section, GradientText, BlogCard, H1 } from '../../themes/global';
import FadeInSection from '../../animations/FadeInSection';

const Technologies = () => (
    <Section id="technologies">
        <H1>Skills</H1>
        <GridContainer>
            {TechnologiesData.map((card,i)=>(
                <FadeInSection>
            <BlogCard key={card.id}>
                <ListIcon src='/logo512.png'>
                    {card.icon}
                </ListIcon>
                <ListContainer>
                    <ListTitle>
                        <GradientText>
                            {card.title}
                        </GradientText>
                    </ListTitle>
                    <TagList>
                        {card.tags.map((tag,i)=>(                            
                            <GradientText>
                                <Tag key={i}>{tag}</Tag>
                            </GradientText>
                        ))}
                    </TagList>
                </ListContainer>
            </BlogCard>
            </FadeInSection>
            ))}
        </GridContainer>
    </Section>
);

export default Technologies;
