

import React from 'react';
import {Jumbotron,DropdownButton,Dropdown,Table} from 'react-bootstrap';

class Viewdefect extends React.Component{

constructor(){
    super()
}

render(){
    return(
        <div>
            <form>
    <h1 style={{color:"black",margin:"30px",textAlign:"center"}}>Defect Tracker</h1>
    <div style={{textAlign:"center"}}>
    <a href="./Logout">Logout</a><br/>
    <a href="./Logout">Add Defect</a><br/>
    <a href="./Viewdefect">View Defect</a><br/>
    </div>
    <Jumbotron style={{margin:"0px 400px"}}>
        <h3 style={{textAlign:"center"}}>Filter Deatils</h3><br/>
     
         <div>
        <span>Priority:</span>
        <DropdownButton id="dropdown-basic-button"  title="All ">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <br/>
        </div>

        <div>
        <span>Category:</span>
        <DropdownButton id="dropdown-basic-button"  title="All ">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <br/>
        </div>

       </Jumbotron>

    
    <h3 style={{textAlign:"center", margin:"5px 5px"}}>Defect Details</h3><br/>
    <p style={{textAlign:"center",color:"red"}}>Search result: 3</p>
 
     <div style={{margin:"10px 200px"}}>
     <Table striped bordered hover>
  <thead style={{backgroundColor:"#34495E",color:"white"}}>
    <tr>
      <th>Defect Category</th>
      <th>Description</th>
      <th>Priority</th>
      <th>Status</th>
      <th>Change status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>UI</td>
      <td>Submit button comming to extreme left refer the screenshots.</td>
      <td>2</td>
      <td>Open</td>
      <td>Close defect</td>
    </tr>
    <tr>
      <td>Functional</td>
      <td>While submitting the form data confirmation pop up should appear,Refer SRS document</td>
      <td>1</td>
      <td>Open</td>
      <td>Close defect</td>
    </tr>
    <tr>
      <td>Change request</td>
      <td>Add and Remove user functionality</td>
      <td>3</td>
      <td>Closed</td>
      <td>Action Pending</td>
    </tr>
    <tr>
    <td>Functional</td>
      <td>Request certificate functionality result server error</td>
      <td>1</td>
      <td>Closed</td>
      <td>Action Pending</td>
    </tr>
  </tbody>
</Table>
         


    
    </div>
    
    
    </form>
    
    </div>   
    )
}

}
export default Viewdefect;