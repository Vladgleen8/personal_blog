import logo from "./assets/personally-logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo}></img>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New post</a>
            </div>
        </div>
    );
};

export default Navbar;
