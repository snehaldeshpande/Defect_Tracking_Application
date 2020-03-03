

import React from 'react';
import {Jumbotron,DropdownButton,Dropdown,Table,Card} from 'react-bootstrap';


var data= [
  {"Defect_Category":"UI","Description":"Submit button comming to extreme left refer the screenshots.","Priority":"1","Status":"open","Change_Status":"working"},
  {"Defect_Category":"Functional","Description":"While submitting the form data confirmation pop up should appear,Refer SRS document","Priority":"2","Status":"close","Change_Status":"completed"},
  {"Defect_Category":"Change Request","Description":"Add and Remove user functionality","Priority":"3","Status":"open","Change_Status":"working"},
  {"Defect_Category":"Change Request","Description":"Add and Remove user functionality","Priority":"1","Status":"open","Change_Status":"working"}
    ]

class Table1 extends React.Component{

constructor(props){
    super(props)
}

render(){
    return(
        <div>
   
  
     {/* <div style={{margin:"10px 200px"}}>
     <Table DefectCategory ={item.Category}
            Description={item.Description}
            Priority={item.Priority}
            Status={item.Status}

      /> */}
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
      {data.map((value,index) => <tr>
      <td>{value.Defect_Category}</td>
      <td>{value.Description}</td>
      <td>{this.props.demo}</td>
      <td>{value.Status}</td>
      <td>{value.Change_Status}</td>
     
    </tr>)}
    
    
  </tbody>
</Table> 
         

</div>
    
 
    
    
     
    )
}

}
export default Table1;