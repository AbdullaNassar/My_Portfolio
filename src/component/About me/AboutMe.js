import image from "../../Images/second.jpeg";
import "./AboutMe.css"
function AboutMe (){
    return(
        <div className="about-me" id="about">
            <div className="container">
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>I'm Front end Developer</p>
                    <p>I am a Fresh Graduate from <span>faculty of Computer Science </span>at <span>Shrouk Academy</span></p>
                    <p><span>ECPC</span> Finalist</p>
                    <p>I'm Competitve Programmer @ <span>Codeforces, Leetcode.</span></p>
                    <p>Solved <span>+1500 Problems</span> on Data structure and Algorthims</p>
                    <p>Always learning new things</p>
                    <p>Check out my <span>
                        <a class="res" target="_blank" href="https://drive.google.com/file/d/17qQHDImvgNUNa7VaQUzIoe6kMDtbNk7p/view?usp=sharing">Resume</a>
                    </span></p>
                    <h3 style={{paddingTop:"50px", paddingBottom:"20px"}} align="left">Languages and Tools:</h3>
                    <p align="left"> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

                {/* <div className="skills">
                    <h4>Skills</h4>
                    <img width="20px" src="https://cdn-icons-png.flaticon.com/512/732/732212.png"/>
                    <img width="100px" src=""/>
                    

                </div> */}
                </div>
                <img className="my-image" src={image}/>
            </div>
        </div>
    );
}

export default AboutMe;