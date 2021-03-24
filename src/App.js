import React,{useState} from 'react'
import "./App.css"
import {Button} from "react-bootstrap"
import ClassComp from "./ClassComp"
// import FuncComp from "./FuncComp"
function App() {
    const [show,setShow]=useState(false)
    return (
        <div className="App">
            <h1>WorkShop intro hooks</h1>
            <Button variant="warning" onClick={()=>setShow(!show)}>show</Button> 
            { show ?  <ClassComp />:null}
           
        </div>
    )
}

export default App


