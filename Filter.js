

import React from 'react';
import {Jumbotron,DropdownButton,Dropdown,Table,Card} from 'react-bootstrap';


class Filter extends React.Component{

constructor(){
    super()
}

render(){

     const temp1 ="*"
    //  const temp1 = 2
    //  const temp1 = 3
    return(
        <div>
    <Card style={{margin:" 20px 80px"}}>
  
    <Jumbotron style={{margin:"0px 200px"}}>
        <h3 style={{textAlign:"center"}}>Filter Deatils</h3><br/>
     
         <div>
        <span>Priority:</span>
        <DropdownButton id="dropdown-basic-button" title="Dropdown">
        <Dropdown.Item href="#/action-1"><Table demo = {temp1}/></Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        </DropdownButton>
        <br/>
        </div>

        <div>
        <span>Category:</span><DropdownButton id="dropdown-basic-button" title="Dropdown">
        
        <Dropdown.Item href="#/action-1">UI</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Functional</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Change request</Dropdown.Item>
        </DropdownButton>
        </div>

       </Jumbotron>

    
    </Card>


    
    </div>
    
     
    )
}

}
export default Filter;