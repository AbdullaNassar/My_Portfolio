import "./Header.css"
function Header(){
    return(
        <div className="header">
            <div className="container">
                <a className="logo" href="#">Abdullah</a>
                <div className="nav-items">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}
export default Header;