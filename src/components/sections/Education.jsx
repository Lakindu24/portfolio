import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";

const Container = styled.section`
  position: relative;
  z-index: 1;
  padding: 110px 0 100px;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, ${({ theme }) => theme.primary + "1c"}, transparent 26%),
    radial-gradient(circle at 90% 75%, #2769df18, transparent 25%),
    linear-gradient(180deg, ${({ theme }) => theme.bg + "99"}, ${({ theme }) => theme.bg + "cc"});

  @media (max-width: 768px) {
    padding: 76px 0 66px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 52px;
  text-align: center;
`;

const Eyebrow = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.primary};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  position: relative;
  font-size: clamp(44px, 6vw, 64px);
  font-weight: 800;
  letter-spacing: -0.055em;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 50%;
    width: 112px;
    height: 3px;
    border-radius: 99px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.primary}, transparent);
    transform: translateX(-50%);
  }
`;

const Desc = styled.p`
  max-width: 700px;
  margin-top: 32px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.75;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Journey = styled(VerticalTimeline)`
  width: 100%;
  margin: 0;

  &::before {
    width: 2px;
    background: linear-gradient(180deg, transparent, ${({ theme }) => theme.primary}, #2769df, transparent);
    box-shadow: 0 0 18px ${({ theme }) => theme.primary + "77"};
  }

  .vertical-timeline-element {
    margin: 3.5em 0;
  }

  .vertical-timeline-element:first-child {
    margin-top: 0;
  }

  .vertical-timeline-element-date {
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 700;
  }

  @media only screen and (max-width: 1169px) {
    &::before { left: 24px; }
    .vertical-timeline-element { margin: 2.5em 0; }
  }
`;

const Education = () => (
  <Container id="Education">
    <Wrapper>
      <Header>
        <Eyebrow>Academic journey</Eyebrow>
        <Title>Education</Title>
        <Desc>
          My educational journey reflects continuous growth, dedication, and a passion for learning. Here's a timeline of my academic achievements and milestones.
        </Desc>
      </Header>

      <Journey>
        {education.map((item, index) => (
          <EducationCard key={`education-${index}`} education={item} />
        ))}
      </Journey>
    </Wrapper>
  </Container>
);

export default Education;
