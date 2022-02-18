import React, { useState, useRef, useEffect } from 'react';

import { CarouselContainer, CarouselItem, CarouselItemText, CarouselItemTitle } from './TimelineStyles';
import { TimelineData } from '../../constants/timeline';
import { BlogCard, Section, H1} from '../../themes/global';

const Timeline = () => {
  return (
      <Section id="timeline">     
        <H1>Timeline</H1>
        <CarouselContainer>  
              {TimelineData.reverse().map((item) => (
                <CarouselItem>
                <BlogCard style={{width:"12rem"}}>
                  <CarouselItemTitle>
                      {item.year}                
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </BlogCard>
              </CarouselItem>
              ))}
        </CarouselContainer>  
      </Section>
  );
};

export default Timeline;
