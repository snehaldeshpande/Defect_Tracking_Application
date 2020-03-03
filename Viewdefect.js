

import React from 'react';
import {Jumbotron,DropdownButton,Dropdown,Table,Card} from 'react-bootstrap';
import Filter from'./Filter';
import Table1 from './Table';

class Viewdefect extends React.Component{

constructor(){
    super()
}

render(){
    return(
        <div>
    <Card style={{margin:" 20px 80px"}}>
    <form>
    <h1 style={{color:"black",margin:"30px",textAlign:"center"}}><b>Defect Tracker</b></h1>
    <div style={{textAlign:"center"}}>
    <a href="./Logout">Logout</a><br/>
    <a href="./Logout">Add Defect</a><br/>
    <a href="./Viewdefect">View Defect</a><br/>
    </div>

    <Filter/>
    
    <h3 style={{textAlign:"center", margin:"5px 5px"}}>Defect Details</h3><br/>
    <p style={{textAlign:"center",color:"red"}}>Search result: 3</p>
 
     <Table1/>

    </form>
    </Card>
    </div>   
    )
}

}
export default Viewdefect;