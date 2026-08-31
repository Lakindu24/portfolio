import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";

const Container = styled.section`
  position: relative;
  z-index: 1;
  padding: 120px 24px;
  overflow: hidden;
  &::before { content: ""; position: absolute; width: 680px; height: 680px; top: 8%; left: -430px; border-radius: 50%; background: ${({ theme }) => theme.primary + "18"}; filter: blur(90px); pointer-events: none; }
  @media (max-width: 768px) { padding: 80px 16px; }
`;
const Wrapper = styled.div`position: relative; width: 100%; max-width: 1240px; margin: 0 auto;`;
const Eyebrow = styled.p`color: ${({ theme }) => theme.primary}; font-size: 12px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;`;
const Header = styled.div`
  display: flex; justify-content: space-between; align-items: end; gap: 32px; margin-bottom: 36px;
  @media (max-width: 700px) { align-items: start; flex-direction: column; gap: 18px; }
`;
const Title = styled.h2`
  margin-top: 12px; max-width: 650px; color: ${({ theme }) => theme.text_primary}; font-size: clamp(42px, 7vw, 76px); letter-spacing: -.07em; line-height: .95;
  span { color: ${({ theme }) => theme.primary}; }
`;
const Intro = styled.p`max-width: 350px; color: ${({ theme }) => theme.text_secondary}; font-size: 15px; line-height: 1.7;`;
const Filters = styled.div`display: flex; flex-wrap: wrap; gap: 9px; margin-bottom: 26px;`;
const Filter = styled.button`
  padding: 9px 15px; border: 1px solid ${({ active, theme }) => active ? theme.primary : "rgba(255,255,255,.14)"}; border-radius: 999px; color: ${({ active, theme }) => active ? theme.text_primary : theme.text_secondary}; background: ${({ active, theme }) => active ? theme.primary + "35" : "rgba(255,255,255,.025)"}; font: inherit; font-size: 12px; font-weight: 700; cursor: pointer; transition: .2s ease;
  &:hover { transform: translateY(-2px); border-color: ${({ theme }) => theme.primary}; }
`;
const Showcase = styled.article`
  display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(330px, .85fr); min-height: 510px; overflow: hidden; border: 1px solid rgba(255,255,255,.16); border-radius: 28px; background: linear-gradient(135deg, rgba(18,18,35,.54), rgba(12,12,28,.62)); box-shadow: 0 28px 80px rgba(0,0,0,.26); backdrop-filter: blur(5px);
  @media (max-width: 850px) { grid-template-columns: 1fr; }
`;
const Visual = styled.div`position: relative; min-height: 410px; overflow: hidden; background: #111124;`;
const VisualImage = styled.img`
  width: 100%; height: 100%; object-fit: contain; object-position: center; background: #0b0b1b;
`;
const VisualShade = styled.div`position: absolute; inset: 0; background: linear-gradient(90deg,transparent 35%,rgba(9,9,23,.62)), linear-gradient(0deg,rgba(9,9,23,.7),transparent 45%);`;
const Number = styled.span`position: absolute; top: 28px; left: 30px; color: white; font-size: 15px; font-weight: 800; letter-spacing: .12em;`;
const Category = styled.span`position: absolute; right: 24px; bottom: 24px; padding: 8px 12px; border: 1px solid rgba(255,255,255,.3); border-radius: 999px; color: white; background: rgba(8,8,22,.55); backdrop-filter: blur(8px); font-size: 12px; font-weight: 700; text-transform: uppercase;`;
const Details = styled.div`
  display: flex; flex-direction: column; align-items: flex-start; padding: 46px 38px 34px;
  @media (max-width: 500px) { padding: 34px 24px 28px; }
`;
const ProjectName = styled.h3`color: ${({ theme }) => theme.text_primary}; font-size: clamp(30px,4vw,46px); letter-spacing: -.05em; line-height: 1;`;
const Date = styled.p`margin-top: 14px; color: ${({ theme }) => theme.primary}; font-size: 13px; font-weight: 700;`;
const Description = styled.p`margin: 24px 0; color: ${({ theme }) => theme.text_secondary}; font-size: 14px; line-height: 1.8;`;
const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 8px;`;
const Tag = styled.span`padding: 6px 10px; border-radius: 6px; color: ${({ theme }) => theme.text_primary}; background: rgba(255,255,255,.07); font-size: 11px; font-weight: 600;`;
const Actions = styled.div`display: flex; align-items: center; gap: 12px; margin-top: auto; padding-top: 28px;`;
const Link = styled.a`
  padding: 12px 16px; border: 1px solid ${({ primary, theme }) => primary ? theme.primary : "rgba(255,255,255,.2)"}; border-radius: 10px; color: ${({ theme }) => theme.text_primary}; background: ${({ primary, theme }) => primary ? theme.primary : "transparent"}; font-size: 13px; font-weight: 700; text-decoration: none; transition: transform .2s ease, background .2s ease;
  &:hover { transform: translateY(-3px); background: ${({ theme }) => theme.primary}; }
`;
const RailHeader = styled.div`display: flex; justify-content: space-between; align-items: center; margin: 35px 0 16px; color: ${({ theme }) => theme.text_secondary}; font-size: 13px; font-weight: 600;`;
const BrowseControls = styled.div`display: flex; gap: 8px;`;
const BrowseButton = styled.button`
  width: 34px; height: 34px; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; color: ${({ theme }) => theme.text_primary}; background: transparent; font-size: 17px; cursor: pointer; transition: .2s ease;
  &:hover:not(:disabled) { border-color: ${({ theme }) => theme.primary}; color: ${({ theme }) => theme.primary}; } &:disabled { opacity: .35; cursor: not-allowed; }
`;
const Rail = styled.div`display: grid; grid-template-columns: repeat(auto-fit,minmax(180px,1fr)); gap: 12px;`;
const RailItem = styled.button`
  min-height: 112px; padding: 18px; border: 1px solid ${({ active, theme }) => active ? theme.primary : "rgba(255,255,255,.11)"}; border-radius: 14px; color: ${({ theme }) => theme.text_primary}; background: ${({ active, theme }) => active ? theme.primary + "22" : "rgba(255,255,255,.025)"}; text-align: left; font: inherit; cursor: pointer; transition: .25s ease;
  &:hover { transform: translateY(-4px); border-color: ${({ theme }) => theme.primary}; }
`;
const RailIndex = styled.span`display: block; margin-bottom: 22px; color: ${({ theme }) => theme.primary}; font-size: 11px; font-weight: 800;`;
const RailName = styled.span`display: block; font-size: 15px; font-weight: 700;`;
const Empty = styled.div`padding: 70px 20px; border: 1px dashed rgba(255,255,255,.2); border-radius: 22px; color: ${({ theme }) => theme.text_secondary}; text-align: center;`;

const filters = [["all", "All work"], ["web app", "Web apps"], ["web sites", "Websites"], ["Portfolio web", "Portfolio"], ["machine learning", "Machine learning"]];

const Projects = () => {
  const [category, setCategory] = useState("all");
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const filteredProjects = useMemo(() => category === "all" ? projects : projects.filter((project) => project.category === category), [category]);
  const activeProject = filteredProjects.find((project) => project.id === activeId) || filteredProjects[0];
  const activeIndex = filteredProjects.findIndex((project) => project.id === activeProject?.id);
  const chooseCategory = (nextCategory) => { setCategory(nextCategory); const next = nextCategory === "all" ? projects : projects.filter((project) => project.category === nextCategory); setActiveId(next[0]?.id); };
  const moveProject = (direction) => { const next = filteredProjects[activeIndex + direction]; if (next) setActiveId(next.id); };

  return <Container id="Projects"><Wrapper>
    <Header><div><Eyebrow>Selected work / 2025</Eyebrow><Title>Projects made to <span>matter.</span></Title></div><Intro>Explore a selection of products, platforms, and experiments shaped around useful digital experiences.</Intro></Header>
    <Filters aria-label="Project categories">{filters.map(([value, label]) => <Filter key={value} active={category === value} onClick={() => chooseCategory(value)}>{label}</Filter>)}</Filters>
    {activeProject ? <>
      <Showcase><Visual><VisualImage src={activeProject.image} alt={`${activeProject.title} project preview`} /><VisualShade /><Number>0{activeIndex + 1} / 0{filteredProjects.length}</Number><Category>{activeProject.category}</Category></Visual><Details><ProjectName>{activeProject.title}</ProjectName><Date>{activeProject.date}</Date><Description>{activeProject.description}</Description><Tags>{activeProject.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Tags><Actions>{activeProject.demo && <Link primary href={activeProject.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</Link>}<Link primary={!activeProject.demo} href={activeProject.github} target="_blank" rel="noopener noreferrer">View source ↗</Link></Actions></Details></Showcase>
      <RailHeader><span>Choose a project to explore</span><BrowseControls><BrowseButton aria-label="Previous project" onClick={() => moveProject(-1)} disabled={activeIndex <= 0}>←</BrowseButton><BrowseButton aria-label="Next project" onClick={() => moveProject(1)} disabled={activeIndex >= filteredProjects.length - 1}>→</BrowseButton></BrowseControls></RailHeader>
      <Rail>{filteredProjects.map((project, index) => <RailItem key={project.id} active={project.id === activeProject.id} onClick={() => setActiveId(project.id)}><RailIndex>0{index + 1}</RailIndex><RailName>{project.title}</RailName></RailItem>)}</Rail>
    </> : <Empty>No projects are available in this category yet.</Empty>}
  </Wrapper></Container>;
};

export default Projects;
