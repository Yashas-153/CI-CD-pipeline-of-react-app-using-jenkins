import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const BlogDetails = () => {
    
    const { id } = useParams();
    const {data:blog, isPending, error} = useFetch('http://localhost:4000/blogs/' + id);
    const history = useHistory();
    const handledelete = ()=>{
        fetch('http://localhost:4000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push("/");
        })
    }
    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>} 
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> {blog.body}</p>
                    <button onClick={handledelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;