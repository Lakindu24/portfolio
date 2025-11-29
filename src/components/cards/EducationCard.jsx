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

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Styled Components
const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 14px;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.primary + '30'};
  box-shadow: 0 4px 15px rgba(23, 92, 230, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.card};
  
  &:hover {
    transform: scale(1.15) rotate(5deg);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 25px rgba(23, 92, 230, 0.4);
  }
  
  @media only screen and (max-width: 768px) {
    height: 55px;
    width: 55px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const School = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  margin-bottom: 4px;
  
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Degree = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '🎓';
    font-size: 16px;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_primary + 'dd'};
  margin: 16px 0;
  padding: 18px;
  background: linear-gradient(135deg, ${({ theme }) => theme.card + '80'}, ${({ theme }) => theme.card + '50'});
  border-radius: 14px;
  border-left: 5px solid ${({ theme }) => theme.primary};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  text-align: justify;
  
  &::before {
    content: '📖';
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 20px;
    opacity: 0.3;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 14px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  padding: 6px 12px;
  background: ${({ theme }) => theme.primary + 10};
  border-radius: 8px;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.primary + 30};
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const Skill = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  padding: 4px 10px;
  background: ${({ theme }) => theme.primary + 10};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.primary + 30};
  
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 3px 8px;
  }
`;

const CardContent = styled.div`
  animation: ${fadeInUp} 0.6s ease forwards;
`;

// Create styled component for the content with proper animation
const AnimatedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: linear-gradient(145deg, rgba(29, 24, 54, 0.98) 0%, rgba(17, 25, 40, 0.98) 100%);
  color: #fff;
  box-shadow: 0 10px 40px rgba(23, 92, 230, 0.2);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 28px;
  animation: ${fadeInUp} 0.6s ease forwards;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.secondary}, 
      ${({ theme }) => theme.primary});
    background-size: 200% 100%;
    animation: ${shimmer} 3s infinite linear;
  }

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 20px 60px rgba(23, 92, 230, 0.35);
    border: 1px solid rgba(23, 92, 230, 0.4);
  }
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    gap: 14px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <div style={{ 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          background: "linear-gradient(135deg, #1d1836 0%, #2a2366 100%)",
          borderRadius: "50%",
          border: "3px solid rgba(23, 92, 230, 0.3)"
        }}>
          <img
            width="70%"
            height="70%"
            alt={education?.school}
            style={{ 
              borderRadius: "50%", 
              objectFit: "cover",
            }}
            src={education?.img}
          />
        </div>
      }
      contentStyle={{
        // Remove inline styles and use the styled component instead
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(23, 92, 230, 0.3)",
      }}
      date={
        <div style={{ 
          color: "#fff", 
          fontWeight: "600",
          fontSize: "14px",
          padding: "4px 12px",
          background: "rgba(23, 92, 230, 0.2)",
          borderRadius: "12px",
          border: "1px solid rgba(23, 92, 230, 0.3)"
        }}>
          {education?.date}
        </div>
      }
      iconStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a2366 100%)",
        boxShadow: "0 0 0 4px rgba(23, 92, 230, 0.3)",
        border: "3px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <AnimatedContent>
        <CardContent>
          <Top>
            <Image src={education?.img} alt={education?.school} />
            <Body>
              <School>{education?.school}</School>
              <Degree>{education?.degree || education?.diploma}</Degree>
              {education?.grade && <Grade>{education.grade}</Grade>}
            </Body>
          </Top>
          
          {education?.desc && (
            <Description>
              {education.desc}
            </Description>
          )}
          
          {education?.skills && (
            <Skills>
              {education.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </Skills>
          )}
        </CardContent>
      </AnimatedContent>
    </VerticalTimelineElement>
  );
};

export default EducationCard;