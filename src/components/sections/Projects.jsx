import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  padding: 80px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;
const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  line-height: 1.6;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.primary + '40'};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 16px;
  font-weight: 600;
  margin: 32px 0;
  padding: 4px;
  background: ${({ theme }) => theme.card + '80'};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    font-size: 11px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ToggleButton = styled.div`
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  &:hover {
    background: ${({ theme }) => theme.primary + '15'};
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
    border-radius: 8px;
  }
  ${({ active, theme }) =>
    active &&
    `
    background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary});
    color: white;
    box-shadow: 0 4px 15px ${theme.primary + '40'};
    transform: translateY(-2px);
  `}
`;
const Divider = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.primary + '30'};
  @media (max-width: 768px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
  width: 100%;
  margin-top: 20px;
  padding: 20px 0;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px;
  }
`;

const ProjectCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: -10px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.primary + '15'};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary + '30'};
  display: inline-block;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  
  const filteredProjects = toggle === "all" 
    ? projects 
    : projects.filter((item) => item.category === toggle);
  
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Explore my portfolio of innovative projects ranging from full-stack web applications to interactive websites. Each project showcases my expertise in modern technologies and problem-solving abilities.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />

          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APPS
          </ToggleButton>
          <Divider />

          <ToggleButton
            active={toggle === "web sites"}
            onClick={() => setToggle("web sites")}
          >
            WEBSITES
          </ToggleButton>
          <Divider />

          <ToggleButton
            active={toggle === "Portfolio web"}
            onClick={() => setToggle("Portfolio web")}
          >
            PORTFOLIO
          </ToggleButton>
          <Divider />

          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>
        
        <ProjectCount>
          {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
        </ProjectCount>

        <CardContainer>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
