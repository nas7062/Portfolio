import React, { forwardRef } from "react";
import styled from "styled-components";
import { Wave } from "../Skill/Skill";
import PJ1 from "../../image/1.png";
import PJ2 from "../../image/2.png";
import PJ3 from '../../image/3.jpg'
import PJ4 from '../../image/4.jpg'
import PJ5 from '../../image/5.jpg'
import ProjectSection from "./ProjectSection";
const Title = styled.div`
display:flex;
    position:absolute;
    top:300%;
    left:21%;
    & >span{
        font-size:3.5rem;
        animation :${Wave} 1.5s ease-in-out infinite;
    }
    & >span:nth-child(1){
        animation-delay: 0.1s;
    }
    & >span:nth-child(3){
        animation-delay: 0.1s;
    }
    & >span:nth-child(5){
        animation-delay: 0.1s;
    }
    & >span:nth-child(7){
        animation-delay: 0.1s;
    }
`
const ProjectSections = styled.section`
    width:100%;
    height:2500px;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    
`
const Projects = styled.div`
    width:1200px;
    height:900px;
    position:relative;
    left:400px;
   
    
   
`
export interface ProjectSectionProps {
    img: string;
    title: string;
    title2?: string;
    descript: string[];
    NewTabHandler: (url: string) =>void;
    git :string;
    home:string;
    
}

const Project =forwardRef<HTMLDivElement>((props,ref) =>{
    const NewTabHandler=(url:string ) =>{
        window.open(url, "_blank","noopener, noreferrer");
    }
   
    return (
        <ProjectSections ref ={ref}>
            <Title>
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>S</span>
            </Title>
            <Projects>
            <ProjectSection  img ={PJ2} title ="React-Shop" title2="쇼핑몰 프로젝트"  
            descript= {["#React","#Css","#솔로 프로젝트","#쇼핑몰"]} NewTabHandler={NewTabHandler}
             git="https://github.com/nas7062/react-shop" home = "https://10012.vercel.app" />
            <ProjectSection  img ={PJ1} title ="Redux-Shop" title2="쇼핑몰 프로젝트"  
            descript= {["#React","#Styled-Components","#솔로 프로젝트","#쇼핑몰"]} NewTabHandler={NewTabHandler}
             git="https://github.com/nas7062/redux-shopping" home = "https://10012-shopping-rd.vercel.app" />
            <ProjectSection  img ={PJ3} title ="Redux-Todolist" title2="투두리스트 프로젝트"  
            descript= {["#React","#Redux","#Styled-Components","#Todo-List"]} NewTabHandler={NewTabHandler}
             git="https://github.com/nas7062/Todo-list" home = "https://10012-todo-list.vercel.app" />
              <ProjectSection  img ={PJ4} title ="Forum" title2="마음의 소리"  
            descript= {["#React","#TypeScript","#Styled-Components","#Forum"]} NewTabHandler={NewTabHandler}
             git="https://github.com/nas7062/Forum" home = "https://anonymousforum.vercel.app" />
             <ProjectSection  img ={PJ5} title ="Lecture" title2="강의 사이트"  
            descript= {["#React","#Redux","#Styled-Components","#Lecture"]} NewTabHandler={NewTabHandler}
             git="https://github.com/nas7062/Lecture" home = "https://lecture10012.vercel.app/" />
            </Projects>
        </ProjectSections>
    );
});

export default Project;