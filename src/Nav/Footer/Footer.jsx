import { BsFillHeartFill } from "react-icons/bs";
import { FaReact,FaGithub,FaLinkedinIn } from "react-icons/fa";

import "./Footer.scss"

export function Footer(){
    return (
        <>
        <div id="footer">
        <p>Made with <BsFillHeartFill style={{color:"red", marginBottom:"-3px"}}/> and <FaReact style={{color:"cyan", marginBottom:"-3px"}}/> 
        
        <br/>All rights reserved &copy; {new Date().getFullYear()},{" "}
        Created by: Lumine8 
        <br/>
        <a href='https://github.com/Lumine8' target="_blank" style={{ textDecoration: "none", color: "grey"}} rel="noreferrer" ><FaGithub /></a>{" "}
        <a href="https://www.linkedin.com/in/sankar-gopan-5660a1141/" target="_blank" style={{ textDecoration: "none", color: "#0A66C2"}} rel="noreferrer"><FaLinkedinIn/></a>
        </p>
        </div>
        </>
    )
}