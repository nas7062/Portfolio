import styled from "styled-components";
import { Wave } from "../Skill/Skill";
import { ProjectSectionProps } from "./Project";
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
    width:700px;
    & > span {
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

export default function ProjectSection({img,title,title2,descript,NewTabHandler,git,home}:ProjectSectionProps)
{
    const GitClick =()=>{
        NewTabHandler(git);
    }
    const HomeClick =()=>{
        NewTabHandler(home);
    }
    return(
    <ProjectSec>
    <img src={img} alt="" />
    <Text>
        <h2>{title}</h2>
        <p>{title2}</p>
    </Text>
    <Descript>
        {descript.map((item:string,idx:number)=>{
            return(
            <span key={idx}>{item}</span>
            );
        })}
    </Descript>
    <Btn>
        <button onClick={GitClick}>Github</button>
        <button onClick={HomeClick}>Hompage</button>
    </Btn>
    </ProjectSec>
    );
}