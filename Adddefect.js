import React from 'react';
import {DropdownButton,Dropdown,Form} from 'react-bootstrap';



class Adddefect extends React.Component{






render(){

return(
    <div>
    <form style={{margin:"10px "}}>
    <h1 style={{color:"black",margin:"30px",textAlign:"center"}}>Defect Tracker</h1>
    
    <div style={{textAlign:"center"}}>
    <a href="./Logout">Logout</a><br/>
    <a href="./Logout">Add Defect</a><br/>
    <a href="./Viewdefect">View Defect</a><br/>
    </div>

    <h3 style={{margin:"20px 400px", backgroundColor:"#34495E", textAlign:"center",color:"white"}}>Add Defects</h3>
    
    <div style={{margin:"0px 400px"}}>
        <span>Defect Category</span>
        <DropdownButton id="dropdown-basic-button"  title="All ">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <br/>
        <span>Description</span>
        <Form.Control as="textarea" rows="3" />

        <span>Priority</span>
        <DropdownButton id="dropdown-basic-button" title="All ">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <br/>
        </div>

        <button type="submit"  className="btn #34495E" style={{backgroundColor:"#34495E",margin:"0px 550px",color:"white"}}onClick={this.handleLogin}>Add Defect</button>

   </form> 
   
   
   </div>
)
}
}
export default Adddefect;