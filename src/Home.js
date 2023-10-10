import {useState,useEffect} from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data:blogs,ispending,Error} = useFetch("http://localhost:4000/blogs")

    return ( 
        <div className="home">
            { Error && <div> {Error}</div>}
            {ispending && <div> Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All blogs" style={{"color":"blue"}}/> }
        </div>
    );
}
 
export default Home;