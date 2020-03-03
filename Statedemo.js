import React from 'react';
import {Button} from 'react-bootstrap';

class Statedemo extends React.Component{

    constructor(){
        super();

        this.state = {
            counter: 0,
            empid:"I100"
            //pointer:0
        }
    }

        onCalculate = () => {
            console.log("Counter:" ,this.state.counter);
            this.setState =({
                counter: this.state.counter + 1,
                empid: 'I1001'
               // pointer: this.state.pointer + 10
            });

        }
  
        render(){
             const temp ="Demo Component"
         return(
         <div className="Demo">
         <h3 style={{color:"blue"}}>{temp}</h3>
         <p>{this.state.counter}</p>
         
         <Button onClick={this.onCalculate}>Calculate</Button>
         </div>
         )
        }
        
    }

export default Statedemo;