
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
  return (
    <BgImg >
      <Navbar/>
      <Scroll>
        <Home />
        <About/>
        <SKill/>
        <Project/>
      </Scroll>
      <Contact/>
    </BgImg>
  );
}

export default App;
