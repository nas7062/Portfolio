import React  from "react";
import styled from "styled-components";

const Logo = styled.nav`
    
    position:relative;
    left:400px;
    letter-spacing:10px;
    font-size:1.5em;
    cursor:pointer;
    @media  screen and (max-width:900px)
    {
        margin:0px -30px;
        position:relative;
        left:0px;
        top:-50px;
    }
    @media  screen and (max-width:1400px)
    {
        left:10px;
    }
`
const Nav = styled.nav`
    position:fixed;
    z-index:1;
`
const Content = styled.div`
    max-width:1800px;
    display :flex;
    align-items :center;
    justify-content :space-between;
    padding: 10px 50px;
    margin:0px 10px;
`
const Ul = styled.ul`
    display:flex;
    align-items :center;
    
    max-width:1600px;
    & > li{
        margin :0 50px;
        cursor :pointer;
        font-size:1.4em;
        position:relative;
        left:700px;
        @media  screen and (max-width:1300px)
        {
            position:relative;
            left:300px;
        }
        @media  screen and (max-width:900px)
        {
            position:relative;
            left:400px;
        }
        @media  screen and (max-width:800px)
        {
            position:relative;
            left:300px;
        }
        @media  screen and (max-width:700px)
        {
            position:relative;
            left:200px;
        }
        @media  screen and (max-width:600px)
        {
            position:relative;
            left:100px;
        }
    }
    @media  screen and (max-width:900px)
    {
            flex-direction: column;
            align-items :flex-start;
            position:relative;
            left:100px;
            li{
                margin-bottom:20px;
            }

    }
    & >li:after{
        display:block;
        content: "";
        border-bottom: solid 3px white;  
        transform: scaleX(0);  
        
        transition: transform 0.25s ease-in-out;
    }
    & >li:hover:after{
        transform: scaleX(1);
    }
`

export default function Navbar() {

   
    return (
        <Nav>
            
            <Content>
                <Logo>
                    <h2>10012</h2>
                </Logo>
                
                <Ul>
                    <li>About</li>
                    <li>SKills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </Ul>
            </Content>
        </Nav>
    );
}