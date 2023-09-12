import "./Main.css"
import logo from "../../Images/logo.jpeg"
import WebLogo from "./WebLogo";
function Main(){
    const socialIcon=[
        {
            name:"Linked-in",
            link:"https://www.linkedin.com/in/abdallah-moemen/",
            image:"https://iili.io/HaY3BBR.webp",
            // image:"https://freeimage.host/i/whatsapp-image-2023-08-30-52733-pm.J9yFmqx"
        },
        {
            name:"Gmail",
            link:"mailto:abdallahmoemen44@gmail.com",
            image:"https://iili.io/HaY3z7t.webp",
        },
        {
            name:"Github",
            link:"https://github.com/AbdullaNassar",
            image:"https://iili.io/HaY3YB4.webp",
        },
        {
            name:"Codeforces",
            link:"https://codeforces.com/profile/abdallah_moemen",
            image:"https://iili.io/HaY3Ev9.webp",
        },
        {
            name:"Leetcode",
            link:"https://leetcode.com/abdullah_Nassar/",
            image:"https://iili.io/HaY3Whb.webp",
        },
    ];
    return(
        <div className="main-container">
            <div className="container">
                <div className="info">
                    <h5>Hello, I'm Abdullah</h5>
                    <h1>Software Engineer</h1>
                    <p>Front-end Developer</p>
                    <div className="social-icon">
                        {socialIcon.map((item)=>{
                            return<WebLogo info={item}/>
                        })}
                        

                    </div>
                    
                </div>
                <div className="img-frame">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    );
}
export default Main;