import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (  
        <div className="not-founf">
            <h2> Sorry </h2>
            <p>That page cannot be found </p>
            <Link to="/"> Back to the HomePage</Link>
        </div>
    );
}
 
<div className="not-founf">
    <h2> Sorry </h2>
    <p>That page cannot be found </p>
    <Link to="/"> Back to the HomePage</Link>
</div>
export default NotFound;