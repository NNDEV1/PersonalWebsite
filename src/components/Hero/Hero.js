import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello there, <br/>
        I'm Nalin Nagar
      </SectionTitle>
      <SectionText>
        A passionate AI and Deep Learning developer from the U.S. who enjoys learning about the  latest advances and applications in math and 
        deep learning research. I am always looking to expand my technical and theoretical knowledge of computer science and math
      </SectionText>
      <Button onClick={() => window.location = "https://github.com/NNDEV1"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;