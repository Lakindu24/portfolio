import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(23, 92, 230, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(23, 92, 230, 0.6);
  }
  100% {
    box-shadow: 0 0 20px rgba(23, 92, 230, 0.3);
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

// Styled Components - Define Image first to avoid reference errors
const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.4s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  height: 550px;
  background: linear-gradient(145deg, 
    ${({ theme }) => theme.card} 0%, 
    ${({ theme }) => theme.card + 'dd'} 50%,
    ${({ theme }) => theme.card} 100%);
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  animation: ${fadeInUp} 0.6s ease forwards;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.secondary}, 
      ${({ theme }) => theme.primary});
    background-size: 200% 100%;
    animation: ${shimmer} 3s infinite linear;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    animation: ${glow} 2s ease-in-out infinite;
    box-shadow: 
      0 20px 60px rgba(23, 92, 230, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    ${ImageContainer} {
      transform: scale(1.05);
    }
    
    ${Image} {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    min-height: 520px;
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  padding: 6px 12px;
  background: ${({ theme }) => theme.primary + '15'};
  border: 1px solid ${({ theme }) => theme.primary + '30'};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + '25'};
    transform: translateY(-2px);
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 4px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 'cc'};
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: "📅";
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 14.5px;
  font-weight: 400;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary + 'dd'};
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  text-align: justify;
`;

const MembersSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Members = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: -8px;
  border: 3px solid ${({ theme }) => theme.card};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.white};

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.a`
  padding: 12px 24px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.primary + '20'}, 
    ${({ theme }) => theme.secondary + '20'});
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primary + '30'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    color: white;
    transform: translateY(-3px);
    
    &::before {
      left: 100%;
    }
  }

  ${props => props.demo && `
    background: linear-gradient(135deg, 
      ${props.theme.primary + '15'}, 
      ${props.theme.secondary + '15'});
    color: ${props.theme.secondary};
    border: 1px solid ${props.theme.secondary + '30'};
    
    &::after {
      content: "🚀";
      font-size: 14px;
    }
  `}

  ${props => !props.demo && `
    &::after {
      content: "💻";
      font-size: 14px;
    }
  `}
`;

const ProjectStats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 'cc'};
  
  &::before {
    font-size: 14px;
  }
  
  ${props => props.stars && `&::before { content: "⭐"; }`}
  ${props => props.forks && `&::before { content: "🔗"; }`}
  ${props => props.issues && `&::before { content: "🐛"; }`}
`;

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card>
      <ImageContainer>
        <Image 
          src={project.image} 
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          style={{ 
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
      </ImageContainer>
      
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
        
        {project.stats && (
          <ProjectStats>
            {project.stats.stars && <Stat stars>{project.stats.stars}</Stat>}
            {project.stats.forks && <Stat forks>{project.stats.forks}</Stat>}
            {project.stats.issues && <Stat issues>{project.stats.issues}</Stat>}
          </ProjectStats>
        )}
      </Details>
      
      <MembersSection>
        <Members>
          {project.member?.map((member, index) => (
            <Avatar 
              key={index} 
              src={member.img} 
              alt={member.name}
              title={member.name}
            />
          ))}
        </Members>
        
        <ButtonGroup>
          {project.demo && (
            <Button href={project.demo} target="_blank" rel="noopener noreferrer" demo>
              Live Demo
            </Button>
          )}
          <Button href={project.github} target="_blank" rel="noopener noreferrer">
            View Code
          </Button>
        </ButtonGroup>
      </MembersSection>
    </Card>
  );
};

export default ProjectCard;