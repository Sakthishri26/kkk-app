import React,{useEffect,useState}from "react";
import axios from "axios";
function App(){
    const[data,setData]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(res=>{
       setData(res.data.message);     
        })
        .catch(err=>console.log(err));
    },[]);
    return(
        <div>
            <h1>React Frontend</h1>
            <h2>{data}</h2>
        </div>
    );

}
export default App;