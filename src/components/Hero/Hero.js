import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Willkommen <br/>auf meinem Portfolio
      </SectionTitle>
      <SectionText>
      "Das Portfolio ist eine zielgerichtete Sammlung von Arbeiten, welche die Anstrengungen des Lernenden, den Lernfortschritt und die Leistungsresultate auf einem oder mehreren Gebieten zeigt."
      </SectionText>
      <Button onClick={()=> window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Ein Button</Button>
    </LeftSection>
  </Section>
);

export default Hero;