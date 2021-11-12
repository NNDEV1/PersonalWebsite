import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { bold } from 'colorette';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiOutlineMail } from 'react-icons/ai';
import { DiCodeBadge } from 'react-icons/di';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <br/>
          <br/>
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
        <CardInfo>{description}</CardInfo>
        <br/>
        <br/>
        <div>
          <TitleContent><bold>Stack</bold></TitleContent>
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={source}>
              <AiFillGithub size="2rem"/> 
          </ExternalLinks>
          <ExternalLinks href={visit}>
            <DiCodeBadge size="2rem"/> 
          </ExternalLinks>
          <ExternalLinks href="mailto:nalinnagar1@gmail.com">
            <AiOutlineMail size="2rem"/> 
          </ExternalLinks>
        </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;