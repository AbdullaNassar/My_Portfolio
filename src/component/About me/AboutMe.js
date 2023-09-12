import image from "../../Images/second.jpeg";
import "./AboutMe.css"
function AboutMe (){
    return(
        <div className="about-me">
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
                        <a class="res" target="_blank" href="https://drive.google.com/file/d/1-Y3EceE1Jn6Y1hJiPP5kHswJoxCT_LDE/view?usp=sharing">Resume</a>
                    </span></p>
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