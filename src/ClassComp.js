import React,{Component} from 'react'
import { Button ,Form} from 'react-bootstrap'

class ClassComp extends Component{
  state={
      count:0,
      name:""
  }
  componentDidMount(){
    setInterval(()=>{
       this.interval=  this.setState({count:this.state.count+1})
           },1000)
  }
//   componentDidUpdate(){
  
//   }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
    render() {
        return (
            <div className="counter">
                <Button variant="success" onClick={()=>this.setState({count:this.state.count+1})}>+</Button>
                <span>{this.state.count}</span>
                <Button variant="danger" onClick={()=>this.setState({count:this.state.count>0 ?this.state.count-1:0})}>-</Button>
          <Form  >
              <Form.Group controlId="formBasicText">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="enter your name" onChange={e=>this.setState({name:e.target.value})} />
              </Form.Group>
              <h3>Name:{this.state.name}</h3>
         </Form>
   </div>)
    }
}

export default ClassComp

