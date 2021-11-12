import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects on Github'},
  { number: 5, text: 'Years of experience in web development and ML', },
  { number: 30, text: 'Machine learning models launched and maintained with over 20 customers', },
  { number: "Angel Hacks 2.0", text: '3rd Place - Developed a project with a team about summarization for zoom meetings', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.number}+
          </BoxNum>
          <BoxText>
            {card.text}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
