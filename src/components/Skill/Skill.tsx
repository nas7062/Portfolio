import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import Html from "../../image/html.png";
import CSS from "../../image/Css.png";
import Js from "../../image/js.jpg";
import react from "../../image/React.png";
import redux from "../../image/redux.png";
import github from "../../image/github.png";
import notion from "../../image/notion.png";
import discord from "../../image/discord.jpg";

const SkillSection = styled.section`
    width:100%;
    height:1000px;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    
`
export const Wave = keyframes`
0%, 40%, 100% {
    transform: translateY(0);
}
20%{
    transform: translateY(-10px);
}
60%{
    transform: translateY(-5px);
}
`
const Title = styled.div`
display:flex;
    position:absolute;
    top:210%;
    left:25%;
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
`
const Descript = styled.div`
position:absolute;
    top:220%;
    left:25%;
    font-size:1.5rem;
    width:1000px;
    height:200px;
    @media  screen and (max-width:900px)
     {
        
        width:500px;
     }

    & > img{
        width:100px;
        height:100px;
        display:inline-block;
        margin:10px 10px;
        background-color:white;
    padding:30px 20px;
     border:1px solid white;
     box-shadow : 3px 3px 3px 3px grey inset;
    @media  screen and (max-width:1100px)
     {
        width:80px;
        height:80px;
     }
     
    }
    & > h2{
        margin :20px 0px;
    }
    
`


const SKill =forwardRef<HTMLDivElement>((props,ref)=>
{
    return(
        <SkillSection ref={ref}>
            <Title>
                <span>S</span>
                <span>K</span>
                <span>I</span>
                <span>I</span>
                <span>L</span>
                <span>S</span>
            </Title>
            <Descript>
                <h2>FrontEnd</h2>
            <img src={Html} alt="" />      
            <img src={CSS} alt="" />          
            <img src={Js} alt="" />            
            <img src={react} alt="" />
            <img src={redux} alt="" />
            <h2>Cooperation</h2>     
            <img src={github} alt="" />            
            <img src={notion} alt="" />
            <img src={discord} alt="" />   
            </Descript>


        </SkillSection>

    );
});

export default SKill;