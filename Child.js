import React from 'react';
import Parent from "./Parent"

class Child extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
       // const temp = "child componenet"
        return(
            <div>
           <p>I am a Child</p>
           <p> Props Received:{this.props.demoTemp}</p>
        
           </div>
        )
    }
}

export default Child;