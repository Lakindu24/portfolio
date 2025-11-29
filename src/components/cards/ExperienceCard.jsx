import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(23, 92, 230, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(23, 92, 230, 0.5);
  }
  100% {
    box-shadow: 0 0 5px rgba(23, 92, 230, 0.3);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: linear-gradient(135deg, rgba(29, 24, 54, 0.95) 0%, rgba(17, 25, 40, 0.95) 100%);
  color: #fff;
  box-shadow: 0 8px 32px rgba(23, 92, 230, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  animation: ${fadeInUp} 0.6s ease forwards;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border: 1px solid rgba(23, 92, 230, 0.3);
    box-shadow: 0 12px 40px rgba(23, 92, 230, 0.25);
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(23, 92, 230, 0.1), transparent);
    animation: ${slideIn} 0.6s ease forwards;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    gap: 12px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 16px;
  align-items: flex-start;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary + 20};
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 20px rgba(23, 92, 230, 0.3);
  }
  
  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.text_primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: "🏢";
    font-size: 14px;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  padding: 4px 12px;
  background: ${({ theme }) => theme.primary + 15};
  border-radius: 20px;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.primary + 30};
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: "📅";
    font-size: 12px;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 3px 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary + 99};
  margin: 8px 0;
  padding: 0;
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.card + 40};
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => theme.primary};
  animation: ${fadeInUp} 0.6s ease 0.2s both;
`;

const SkillsLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: "🛠️";
    font-size: 14px;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  padding: 6px 12px;
  background: ${({ theme }) => theme.primary + 15};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary + 30};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "•";
    color: ${({ theme }) => theme.primary};
    margin-right: 6px;
    font-weight: bold;
  }
  
  &:hover {
    background: ${({ theme }) => theme.primary + 25};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(23, 92, 230, 0.2);
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1d1836 0%, #2a2366 100%);
  border-radius: 50%;
  border: 3px solid rgba(23, 92, 230, 0.3);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(23, 92, 230, 0.6);
    animation: ${pulse} 2s infinite ease-in-out;
    
    img {
      transform: scale(1.1);
    }
  }
  
  img {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
`;

const StyledDate = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 14px;
  background: rgba(23, 92, 230, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(23, 92, 230, 0.3);
  backdrop-filter: blur(10px);
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <IconWrapper>
          <img
            alt={experience?.company}
            src={experience?.img}
          />
        </IconWrapper>
      }
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(23, 92, 230, 0.3)",
      }}
      date={
        <StyledDate>
          {experience?.date}
        </StyledDate>
      }
      iconStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a2366 100%)",
        boxShadow: "0 0 0 4px rgba(23, 92, 230, 0.3)",
        border: "3px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <ExperienceContent>
        <Top>
          <Image src={experience?.img} alt={experience?.company} />
          <Body>
            <Role>{experience?.role}</Role>
            <Company>{experience?.company}</Company>
            <Date>{experience?.date}</Date>
          </Body>
        </Top>
        
        {experience?.desc && (
          <Description>
            {experience.desc}
          </Description>
        )}
        
        {experience?.skills && (
          <SkillsContainer>
            <SkillsLabel>Technologies & Skills</SkillsLabel>
            <SkillsGrid>
              {experience.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        )}
      </ExperienceContent>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;