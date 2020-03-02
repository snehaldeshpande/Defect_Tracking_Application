import React from 'react';
import {Button} from 'react-bootstrap'


import Demo from './Demo'

class Demo1 extends React.Component{
    render(){
        return(
            <div>
            <h1 style={{textAlign: "center"}}> App Component</h1>
            <hr/>
            <Demo/><br/>
             <div  style={{textAlign:"center"}}>
           { /*<button className = "btn btn-primary"> Click Me</button>*/}
           <Button varient="primary">Click Me </Button>
            </div>
            <hr/>    
            </div>
        )
    }
}

export default Demo1;