import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        // <nav classNameName="navbar">
        //     <h1>The Dojo Blog</h1>
        //     <div classNameName="links">
        //         <a href="/">Home</a>
        //         <a hrecreatef="/create">New Blog</a>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg mx-auto w-50 nav_bar" style={{"backgroundColor":"white"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">The Dojo-Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div classNameName="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/create">New Blog</a>
                    </li>
                    
                </ul>
                </div>
            </div>
</nav>    
    );
}
 
export default Navbar;