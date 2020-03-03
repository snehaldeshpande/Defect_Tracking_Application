import React from 'react';
import {DropdownButton,Dropdown,Form,Card} from 'react-bootstrap';



class Adddefect extends React.Component{






render(){

return(
    <div>
        <Card style={{margin:" 20px 80px"}}>
    <form style={{margin:"10px "}}>
    <h1 style={{color:"black",margin:"30px",textAlign:"center"}}><b>Defect Tracker</b></h1>
    
    <div style={{textAlign:"center"}}>
    <a href="./Logout">Logout</a><br/>
    <a href="./Logout">Add Defect</a><br/>
    <a href="./Viewdefect">View Defect</a><br/>
    </div>

    <h3 style={{margin:"20px 400px", backgroundColor:"#34495E", textAlign:"center",color:"white"}}>Add Defects</h3>
    
    <div style={{margin:"0px 400px"}}>
        <span>Defect Category</span>
        <DropdownButton id="dropdown-basic-button" title="Dropdown">
  <Dropdown.Item href="#/action-1">UI</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Functional</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Change request</Dropdown.Item>
</DropdownButton>
      
        <br/>
        <span>Description</span>
        <Form.Control as="textarea" rows="3" />

        <span>Priority</span>
        <DropdownButton id="dropdown-basic-button" title="Dropdown">
  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
</DropdownButton>
        <br/>
        </div>

        <button type="submit" className="btn #34495E" style={{backgroundColor:"#34495E",margin:"0px 450px",color:"white"}}onClick={this.handleLogin}>Add Defect</button>

   </form> 
   
   </Card>
   </div>
)
}
}
export default Adddefect;