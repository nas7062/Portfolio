import React, { forwardRef } from "react";
import styled from "styled-components";
import { Wave } from "../Skill/Skill";
import Img from "../../image/profile.jpg"
const ContactSection = styled.div`


    width:100%;
    height:1000px;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
`
const Title = styled.div`
display:flex;
    position:absolute;
    top:450%;
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
const Text = styled.div`
    font-size:1.8rem;
    position:relative;
    top:-100px;
    left:70%;
    margin-bottom:30px;
`
const Git = styled.div`
    font-size:1.8rem;
    position:relative;
    top:-100px;
    left:70%;
    margin-bottom:30px;
    cursor:pointer;
`
const Vel = styled.div`
    font-size:1.8rem;
    position:relative;
    top:-100px;
    left:70%;
    margin-bottom:30px;
    cursor:pointer;
`
const IMG = styled.img`
    width:300px;
    height:300px;
    display:inline-block;
    position:relative;
    top:400px;
    left:21%;
`
const Descript = styled.div`
    font-size:1.8rem;
    position:relative;
    top:150px;
    left:40%;
    margin-bottom:30px;
    line-height:50px;
`
const Contact = forwardRef<HTMLDivElement>((props,ref) =>
{   
    const NewTabHandler=(url:string ) =>{
        window.open(url, "_blank","noopener, noreferrer");
    }
    
       
    return(
        <ContactSection ref={ref}>
            <Title>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>T</span>
                <span>S</span>
            </Title>  
            <IMG src={Img} alt="" />
            <Descript>
                <p>아직 많이 부족하지만 끊임없는 노력으로</p>
                <p>꾸준한 성장을 하고 좀 더 유능한</p>
                <p>프론트엔드 개발자가 되기 위해 노력하겠습니다.</p>
                <p>포트폴리오를 봐주셔서 감사합니다.</p>
               
            </Descript>
            <Text>
                <p>E-Mail</p>
                <p>nas7062@naver.com</p>
            </Text>
            <Git>
                <p>GitHub</p>
                <p onClick={()=> NewTabHandler("https://github.com/nas7062")}>https://github.com/nas7062</p>
            </Git>
            <Vel>
                <p>Velog</p>
                <p onClick={()=>NewTabHandler("https://velog.io/@10012/posts")}>https://velog.io/@10012/posts</p>
            </Vel>
            <Text>
                <p>TEl</p>
                <p>010-9314-7062</p>
            </Text>
        </ContactSection>


    );
});

export default Contact;