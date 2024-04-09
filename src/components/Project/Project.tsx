import React from "react";
import styled from "styled-components";
import { Wave } from "../Skill/Skill";
import PJ1 from "../../image/1.png";
import PJ2 from "../../image/2.png";
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
const ProjectSection = styled.section`
    width:100%;
    height:1000px;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    
`
const Projects = styled.div`
    width:1200px;
    height:900px;
    position:relative;
    left:400px;
   
    
   
`
const ProjectSec = styled.div`
    margin-bottom:50px;

    & > img{
        width:700px;
        height:400px;
        display:inline-block;
    }
`
const Text = styled.div`
    display:inline-block;
    position:relative;
    top:-300px;
    left:5%;
    
    & > h2{
        font-size:2.5rem;
        margin-bottom:30px;
    }
    & > p {
        font-size:1.5rem;
        color:white;
        position:relative;
        left:8%;
        
    }
`
const Descript = styled.div`
    display:inline-block;
    position:relative;
    top:-250px;
    left:65%;
    & > span{
        border:2px solid #7B68EE;
        border-radius:30%;
        padding:8px 10px;
        color:#7B68EE;
        font-size:1.1rem;
        margin-right:20px;
        
    }

`
const Btn = styled.div`
    position:relative;
    left:68%;
    top:-180px;
& > button{
    font-size:1.2rem;
    border-radius:30%;
    padding:15px 30px;
    border:1px solid #7B68EE;
    background-color:#7B68EE;
    color:#D2D2FF;
    margin-left:30px;
    cursor:pointer;
}

`
export default function Project() {
    const NewTabHandler=(url:string ) =>{
        window.open(url, "_blank","noopener, noreferrer");
    }
    return (
        <ProjectSection>
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

                <ProjectSec>
                    <img src={PJ2} alt="" />
                    <Text>
                        <h2>react-Shop</h2>
                        <p>쇼핑몰 사이트 제작</p>
                    </Text>
                    <Descript>
                        <span>#React</span>
                        <span>#CSS</span>
                        <span>#솔로 프로젝트</span>
                        <span>#쇼핑몰</span>
                    </Descript>
                    <Btn>
                        <button onClick={()=>NewTabHandler("https://github.com/nas7062/react-shop")}>Github</button>
                        <button onClick={()=>NewTabHandler("https://10012.vercel.app")} >Hompage</button>
                    </Btn>
                </ProjectSec>
                <ProjectSec>
                    <img src={PJ1} alt="" />
                    <Text>
                        <h2>react-redux-Shop</h2>
                        <p>쇼핑몰 사이트 제작</p>
                    </Text>
                    <Descript>
                        <span>#React</span>
                        <span>#Styled-component</span>
                        <span>#Redux</span>
                        <span>#쇼핑몰</span>
                    </Descript>
                    <Btn>
                        <button onClick={()=>NewTabHandler("https://github.com/nas7062/redux-shopping")}>Github</button>
                        <button onClick={()=>NewTabHandler("https://10012-shopping-rd.vercel.app")}>Hompage</button>
                    </Btn>
                </ProjectSec>
            </Projects>
        </ProjectSection>

    );
}