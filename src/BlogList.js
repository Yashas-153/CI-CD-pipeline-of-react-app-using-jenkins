import { Link } from "react-router-dom/cjs/react-router-dom.min";


const BlogList = ({blogs,title}) => { 

    console.log(blogs)
    return ( 
        <div>
            <h2 className="mb-5"> {title}</h2>
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h3> {blog.title}</h3>
                    <p> Written by  {blog.author}</p>    
                </Link>
            </div>
        ))}  
        </div>
    );
}
 
export default BlogList;