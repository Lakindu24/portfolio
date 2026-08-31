import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import { FaCode } from "react-icons/fa";
import {
  SiAdobexd,
  SiAmazonaws,
  SiAndroidstudio,
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGooglecolab,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJetpackcompose,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedux,
  SiScikitlearn,
  SiTensorflow,
  SiVisualstudiocode,
} from "react-icons/si";

const skillIcons = {
  "React Js": SiReact,
  Redux: SiRedux,
  "Next Js": SiNextdotjs,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  Flutter: SiFlutter,
  "Node Js": SiNodedotjs,
  "Express Js": SiExpress,
  Python: SiPython,
  Flask: SiFlask,
  Django: SiDjango,
  MySQL: SiMysql,
  Postgresql: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  AWS: SiAmazonaws,
  "Google Cloud": SiGooglecloud,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  Nginx: SiNginx,
  Grafana: SiGrafana,
  Prometheus: SiPrometheus,
  Java: SiOpenjdk,
  Kotlin: SiKotlin,
  "Jetpack Compose": SiJetpackcompose,
  XML: FaCode,
  "Android Studio": SiAndroidstudio,
  Tenserflow: SiTensorflow,
  "Google Colab": SiGooglecolab,
  "Sk Learn Kit": SiScikitlearn,
  Git: SiGit,
  GitHub: SiGithub,
  Netlify: SiNetlify,
  "VS Code": SiVisualstudiocode,
  Postman: SiPostman,
  "Adobe XD": SiAdobexd,
  Figma: SiFigma,
};

const skillColors = {
  "React Js": "#61DAFB", Redux: "#764ABC", "Next Js": "#F2F2F2", HTML: "#E34F26", CSS: "#1572B6", JavaScript: "#F7DF1E", Bootstrap: "#7952B3", Flutter: "#54C5F8",
  "Node Js": "#339933", "Express Js": "#F2F2F2", Python: "#3776AB", Flask: "#F2F2F2", Django: "#44B78B", MySQL: "#4479A1", Postgresql: "#4169E1", MongoDB: "#47A248", Firebase: "#FFCA28",
  AWS: "#FF9900", "Google Cloud": "#4285F4", Docker: "#2496ED", Jenkins: "#D24939", Nginx: "#009639", Grafana: "#F46800", Prometheus: "#E6522C",
  Java: "#F89820", Kotlin: "#A97BFF", "Jetpack Compose": "#4285F4", XML: "#F2F2F2", "Android Studio": "#3DDC84",
  Tenserflow: "#FF6F00", "Google Colab": "#F9AB00", "Sk Learn Kit": "#F7931E", Git: "#F05032", GitHub: "#F2F2F2", Netlify: "#00C7B7", "VS Code": "#007ACC", Postman: "#FF6C37", "Adobe XD": "#FF61F6", Figma: "#F24E1E",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    top: -110px;
    right: -80px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary + "24"};
    filter: blur(30px);
  }

  &:hover {
    transform: translateY(-7px);
    border-color: ${({ theme }) => theme.primary + "88"};
    box-shadow: 0 18px 42px rgba(23, 92, 230, 0.24);
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  position: relative;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ $color }) => $color + "88"};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, ${({ $color }) => $color + "22"}, rgba(255, 255, 255, 0.02));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    border-color: ${({ $color }) => $color};
    background: linear-gradient(135deg, ${({ $color }) => $color + "40"}, rgba(255, 255, 255, 0.05));
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const SkillLogo = styled.span`
  width: 24px;
  height: 24px;
  display: inline-flex;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 7px;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color + "22"};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Here are some of my skills on which I have been working on for the
          past year.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`} title={item.name} $color={skillColors[item.name] || "#854CE6"}>
                      {skillIcons[item.name] ? (
                        <SkillLogo aria-hidden="true" $color={skillColors[item.name] || "#854CE6"}>
                          {React.createElement(skillIcons[item.name])}
                        </SkillLogo>
                      ) : (
                        <SkillImage src={item.image} alt="" loading="lazy" decoding="async" />
                      )}
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
