import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [ispending,setIspending] = useState(true);
    const [error,seterror] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch the data for the resouce");
                }
                return res.json();
            })
             .then(data => {
                setIspending(false);
                setData(data)
                seterror(null)
            }).catch((err) => {
                setIspending(false);
                seterror(err.message);
                console.log(err.message);
            });
        },1000)
    },[url]);

    return {data,ispending,error};
}
export default useFetch;
 
