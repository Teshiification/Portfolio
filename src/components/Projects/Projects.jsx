import React from 'react';

import {H1, Section, Button, BlogCard} from '../../themes/global';
import {ProjectsData} from '../../constants/projects';
import {CardInfo, GridContainer, HrSmall, HrBig, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import FadeInSection from '../../animations/FadeInSection';

const Projects = () => (
  <Section id="projects">
  <H1>Projekte</H1>
    <GridContainer id="container">      
      {ProjectsData.reverse().map(({id, image, title, description, tags, more, code})=>(
        <FadeInSection>
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            {title}
          <HrSmall />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
            <TitleContent>Tags</TitleContent>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          <UtilityList>
            <Button href={code}>Code</Button>
            <Button href={more}>More</Button>
          </UtilityList>
        </BlogCard>
        </FadeInSection>
      ))}
    </GridContainer>
    </Section>
);

export default Projects;
