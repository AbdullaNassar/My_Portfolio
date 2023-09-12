function WebLogo({info}){
    return(
        <a target="_blank" href={info.link}>
            <img src={info.image} alt={info.name} width="50" height="50"/>
        </a>
    );
}
export default WebLogo;