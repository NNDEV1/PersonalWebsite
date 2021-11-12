import React from 'react';
import { DiPython, DiReact, DiJavascript, DiDjango, DiGit, DiJava } from 'react-icons/di';
import { SiTensorflow, SiPytorch, SiOpencv, SiFlutter, SiScikitlearn, SiAmazonaws, SiGooglecloud, SiFlask, SiNumpy, SiPandas,  } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <br/>
    <SectionTitle>Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a multitude of technologies ranging from ML and AI to Front-End and Back-End.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"/>
        <ListTitle>
          Python
        </ListTitle>
        <ListParagraph>
          Experience with Wed Development and ML in Python
        </ListParagraph>
      </ListItem>

      <ListItem>
        <div style={{ alignItems: 'center', display: 'flex' }} >
          <SiPytorch size="3rem"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SiTensorflow size="3rem"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SiScikitlearn size="3rem"/>
        </div>

        <ListTitle>
          PyTorch, TensorFlow
        </ListTitle>
        <ListParagraph>
          Multiple Projects with Deep Learning in PyTorch
        </ListParagraph>
      </ListItem>

      <ListItem>
        <DiJavascript size="3rem"/>
        <ListTitle>
          JavaScript
        </ListTitle>
        <ListParagraph>
          Experience with Front-End and Back-End technologies in Javascript
        </ListParagraph>
      </ListItem>

      <ListItem>
        <DiReact size="3rem"/>
        <ListTitle>
          ReactJS
        </ListTitle>
        <ListParagraph>
          Developed websites in ReactJS
        </ListParagraph>
      </ListItem>

      <ListItem>
        <div style={{ alignItems: 'center', display: 'flex' }} >
          <DiDjango size="3rem"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SiFlask size="3rem"/>
        </div>
        <ListTitle>
          Django and Flask
        </ListTitle>
        <ListParagraph>
          Back-End and Wed Development in Django and Flask
        </ListParagraph>
      </ListItem>

      <ListItem>
        <div style={{ alignItems: 'center', display: 'flex' }} >
          <SiAmazonaws size="3rem"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SiGooglecloud size="3rem"/>
        </div>
        <ListTitle>
          Cloud Technologies
        </ListTitle>
        <ListParagraph>
          Hosted projects and ML models on GCP and AWS
        </ListParagraph>
      </ListItem>

      <ListItem>
        <div style={{ alignItems: 'center', display: 'flex' }} >
          <SiPandas size="3rem"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SiNumpy size="3rem"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SiOpencv size="3rem"/>
        </div>
        <ListTitle>
          Pandas, NumPy, OpenCV
        </ListTitle>
        <ListParagraph>
          Data Engineering, Image Processing with Pandas, NumPy, and OpenCV
        </ListParagraph>
      </ListItem>

      <ListItem>
        <DiGit size="3rem"/>
        <ListTitle>
          Git
        </ListTitle>
        <ListParagraph>
          Developed projects in Git based environment
        </ListParagraph>
      </ListItem>

      <ListItem>
        <DiJava size="3rem"/>
        <ListTitle>
          Java
        </ListTitle>
        <ListParagraph>
          Used Java for competitive programming and android development
        </ListParagraph>
      </ListItem>

      

    </List>
  </Section>
);

export default Technologies;
