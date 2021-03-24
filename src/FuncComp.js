import React,{useState,useEffect} from 'react'
import {Button,Form} from "react-bootstrap"

function FuncComp() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    useEffect(()=>{
        console.log("component didmount")
    //  const interval=  setInterval(() => {
    //        setCount(count+1)
    //    }, 1000);
    //   return ()=>{ clearInterval(interval)
       return ()=>console.log("component will unmount")
    },[])
  return (
      <div className="counter">
        <Button variant="success" onClick={()=>setCount(count+1)}>+</Button>
                <span>{count}</span>
                <Button variant="danger" onClick={()=>setCount(count >0 ? count-1:0)}>-</Button>
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>
                </Form>
                <h2>Name:{name}</h2>
      </div>
  )
}

export default FuncComp
