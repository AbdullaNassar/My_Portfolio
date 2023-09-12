import "./Header.css"
function Header(){
    return(
        <div className="header">
            <div className="container">
                <a className="logo" href="#">Abdullah</a>
                <div className="nav-items">
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    );
}
export default Header;