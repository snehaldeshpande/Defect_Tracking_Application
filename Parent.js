import React from 'react';
import Child from './Child';

class Parent extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        const temp = "I am prop from parent";
        return(
            <div>
           <p>I am in parent</p>
           <Child demoTemp = {temp}/>
           </div>
        )
    }
}

export default Parent;