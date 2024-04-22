import React from "react";
import styled, { keyframes } from "styled-components";
import { forwardRef } from "react";
import { FaAnglesDown } from "react-icons/fa6";
export const Down = keyframes`
0% {
    transform: translateY(-100%);
    opcity:0;
  }
10% {
    opcity:1;
    }
  90% {
    opcity:1;
  }
  100% {
    transform: translateY(0);
    opcity:0;
  }
`

const DownUp = keyframes`
0%{
    transform: translateY(0%);
    opcity:1;
}
25%{
    transform: translateY( 50%);
    opcity:1;
}
50%{
    transform: translateY( 100%);
    opcity:1;
}
75%{
    transform: translateY( 50%);
    opcity:1;
}
100%{
    transform: translateY( 0%);
    opcity:1;
}
`
const Scroll = styled(FaAnglesDown)`
  font-size:3.0em;
  position:absolute;
  left:48%;
  top:80%;
  animation:  ${DownUp} 3s linear alternate infinite;
`
const ScrollDown = styled.div`


  & > p{
    animation:  ${DownUp} 3s linear alternate infinite;
    position:absolute;
    left:46.5%;
    top:88%;

  }
  
`


const Circle = styled.div`
    width: 750px;
    height: 550px;
    position:relative;
    left:25%;
    top:80px;
    @media  screen and (max-width:900px)
        {
           left:0px;
        }
    @media  screen and (max-width:600px)
        {
          left:-30px;
        }
    & > h2{
        position:absolute;
        top:38%;
        right:15%;
        text-align:center;
        color:white;
        font-size:5.5rem;
        letter-spacing:20px;
    }
    & > h3{
        position:absolute;
        top:58%;
        line-height:70px;
        right:-10%;
        text-align:center;
        color:white;
        font-size:1.9rem;
        letter-spacing:16px;
        
    }
`
const HomeSection =styled.section`
    width:100%;
    height:1000px;
    display:block;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
   
`
const  Home = forwardRef<HTMLDivElement>((props,ref) =>{
    return (
        <HomeSection ref ={ref}>
            <div>
                <Circle>
                    <h2>10012</h2>
                    <h3>Web Developer PortFolio</h3>
                </Circle>
                <ScrollDown>
                <Scroll />
                <p>Scroll Down</p>   
                </ScrollDown>

                
            </div>
        </HomeSection>
    )
});

export default Home;