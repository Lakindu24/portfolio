import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import StarsCanvas from "./components/canvas/Stars";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(39, 30, 214, 0.15) 0%,
      rgba(32, 102, 201, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StarsCanvas />
          <Content>
            <Hero />
            <Wrapper>
              <Skills />
             
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
            </Wrapper>
            <Footer />
          </Content>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
