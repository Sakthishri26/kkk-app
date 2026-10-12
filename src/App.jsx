import React,{useEffect,useState}from "react";
import axios from "axios";
function App(){
  const[msg,setMsg]=useState("");
  useEffect(()=>{
    axios.get("http://localhost:3000/api/message")
    .then(res=>{
      sentMsg(res.data.message);
    })
    .catch(err=>{
      console.log(err);
    });
  },[]);
  return(
    <div>
      <h1>React+Node conection</h1>
      <h2>msg</h2>
    </div>
  );
}
export default App;