import Project from "./Project";
import eatSplit from "../../Images/Eat-split.png";
import weather from "../../Images/weather.png";
import moviePopcorn from "../../Images/moviepopcorn.png";
import "./Projects.css"
function Projects(){
    const projects=[
        {
            title:"Eat-N-Split",
            description:"Eat-N-Split web application allowed users to split bills with friends, built using React.js",
            image: eatSplit,
        },
        {
            title:"Movie popcorn",
            description:"A web page for adding movies to your watched list and searching for information about movies, such as actors, genres, and more.",
            image:moviePopcorn
        },
        {
            title:"Investmet-Calculator",
            description:"Web-based Investment Calculator built using React.js library",
            image:"https://user-images.githubusercontent.com/113154901/264427615-5195a9df-f477-4875-921d-7dd4cb94f8b1.png",
        },
        {
            title:"Weather_App",
            description:"Web page to get temperature, built using HTML , CSS ,Javascript",
            image: weather,
        }
    ];
    return(
        <div className="projects-all">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-container">
                    {projects.map((item)=>{
                    return <Project info={item}/>
                    })}
                </div>
            </div>
        </div>

    );
}
export default Projects;