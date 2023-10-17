import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {

    const [title,setTitle] =useState('');
    const [body,setBody] =useState('');
    const [author,setAuthor] =useState('mario');
    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault() 
        const blog ={title,body,author};
        
        fetch('/data/db.json/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log("new blog added")
            // history.go(1)
            history.push('/');
        })

    
    }
    return ( 
        <div className="container mx-auto w-50 create mt-5">
            <div className="row">
                <h2>Add a new blog</h2>
                <div className="col">
                    <div className='container w-75 mx-auto'>
                        <form onSubmit={handleSubmit}>
                        <label>Blog Title:</label>
                        <input
                            type = "text"
                            required
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                        <label> Blog Body: </label>
                        <textarea 
                            required 
                            value={body}
                            onChange={(e)=>setBody(e.target.value)}></textarea>
                        <label>Blog author:</label>
                        <select
                            value={author}
                            onChange={(e)=> setAuthor(e.target.value)}
                        >
                            <option value="mario">Mario</option>
                            <option value ="yoshi">Yoshi</option>
                        </select>
                        <button>Add Blog</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default Create;