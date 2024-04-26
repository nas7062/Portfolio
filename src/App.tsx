
import './App.css';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import bgimg from "./image/background.gif";
import { Down } from './components/Home/Home';
import About from './components/About/About';
import SKill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import { useRef } from 'react';
const BgImg = styled.div`
    background-image : url(${bgimg});
    width:2000px;
    height:1000px;
    animation: ${Down} 5s ;
    
    
`
const Scroll = styled.div`
  scroll-snap-type: y mandatory;
`
function App() {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  }; // 특정 div 섹션으로 스크롤 하는 함수
  return (
    <BgImg >
      <Navbar   scrollToHome={() => scrollToRef(homeRef)}
                scrollToAbout={() => scrollToRef(aboutRef)}
                scrollToSkill={() => scrollToRef(skillRef)}
                scrollToProject={() => scrollToRef(projectRef)}
                scrollToContact={() => scrollToRef(contactRef)}
                />
      <Scroll>
        <Home ref={homeRef} />
        <About ref= {aboutRef}/>
        <SKill ref={skillRef}/>
        <Project ref={projectRef}/>
      </Scroll>
      <Contact ref ={contactRef}/>
    </BgImg>
  );
}

export default App;
