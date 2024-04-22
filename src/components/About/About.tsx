import { forwardRef } from "react";
import Img from "../../image/profile.jpg";
import styled, { keyframes } from "styled-components";

const AboutSection = styled.section`
    width:100%;
    height:1000px;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    
`
const Image = styled.img`
    position:absolute;
    left:15%;
    top:135%;
    @media  screen and (max-width:1500px)
        {
           width:300px;
           top:145%;
        }
    @media  screen and (max-width:1100px)
        {
           width:250px;
           top:145%;
           
        }
    @media  screen and (max-width:900px)
        {
           top:110%;
           left:35%;
        }
        @media  screen and (max-width:600px)
        {
           top:110%;
           left:30%;
        }
`

const Text = styled.div`
position:absolute;
left:42%;
top:145%;
 & > p {
    
    font-size:1.8rem;
    margin-bottom:10px;
    & > span{
        font-size:1.8rem;
        margin-bottom:10px;
        color:red;
     }
}
 
 @media  screen and (max-width:900px)
 {
    left:15%;
    
    
 }
`
const Sizeup = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.15);
}
100% {
  transform: scale(1);
}
`
const Title = styled.h2`
display: inline-block;
position:absolute;
top:135%;
left:50%;
font-size:3.5rem;
transform :trans
color: white;

animation: ${Sizeup} 5s infinite;
@media  screen and (max-width:900px)
 {
    left:30%;
    
    text-align:center;
 }
 @media  screen and (max-width:600px)
 {
    left:30%;
    font-size:2.5rem;
    text-align:center;
    top:135%;
 }
`

const About = forwardRef<HTMLDivElement>((props,ref)=>
{
    return(
        <AboutSection ref={ref}>
            <Title>ABOUT ME!</Title>
            <Image src={Img}alt="" />
            <Text>
                <p>안녕하세요, 프론트엔드 개발자 김민석입니다.</p>
                <p>눈에 보이는 멋진 디자인과 플랫폼을 구현하는 것에 <span>흥미</span>를 느낍니다.</p>
                <p>새로운 것을 배우는 것에 흥미를 느끼고 </p>
                <p>사람들과의 의사소통과 <span>협력</span>을 중요하게 생각합니다.</p>
                <p>꾸준한 성장을 노력하고 새로운 <span>도전</span>을 두려워하지 않는 개발자가 되겠습니다.</p>
                
            </Text>
        </AboutSection>

    );
});

export default About;