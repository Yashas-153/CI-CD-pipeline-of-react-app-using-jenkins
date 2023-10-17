import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const BlogDetails = () => {
    
    const { id } = useParams();
    const {data:blog, isPending, error} = useFetch('/data/db.json/blogs' + id);
    const history = useHistory();
    const handledelete = ()=>{
        fetch('/data/db.json/blogs/blogs/' + blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push("/");
        })
    }
    return (  

        <div className="container mx-auto w-50 blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>} 
            {blog && (
                <div className="container">
                    <article>
                        <h2 clas>{blog.title}</h2>
                        <p> {blog.body}</p>
                        <button onClick={handledelete}>Delete</button>
                    </article>
                </div>
            )}
        </div>
    );
}
 
export default BlogDetails;