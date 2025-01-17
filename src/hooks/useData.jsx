import { useEffect, useState } from "react";


const useData = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>setData(data))
    
    },
    [])
    return [data]
};

export default useData;