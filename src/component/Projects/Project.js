import "./Project.css"
function Project({info}){
    return(
        <div class="card" style={{"width":"14rem", height:"24rem"}}>
            <img style={{height:"50%"}} className="project-img" src={info.image}class="card-img-top" alt={info.title}/>
            <div class="card-body">
                <h5 style={{textAlign:"center", marginBottom:"10px"}} class="card-title">{info.title}</h5>
                <p class="card-text-description">{info.description}</p>
                <a href="#" class="btn btn-primary">Explore</a>
            </div>
        </div>
    );
}
export default Project;