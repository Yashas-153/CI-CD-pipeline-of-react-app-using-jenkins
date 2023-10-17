import {useState,useEffect} from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data:blogs,ispending,Error} = useFetch("/data/db.json/blogs")
    
    return ( 
        <div className="container mx-auto w-50 mt-5">
            { Error && <div> {Error}</div>}
            {ispending && <div> Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All blogs" style={{"color":"blue"}}/> }
        </div>
    );
}
 
export default Home;