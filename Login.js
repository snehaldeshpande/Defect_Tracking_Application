import React from 'react';
import {Button,Card, Jumbotron} from 'react-bootstrap';
import Viewdefect from './Viewdefect';
import Adddefect from './Adddefect';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
         name: '',
         password: ''
        }
    }

        setEmpState = (e) => {
            // const value = e.target.value;
            // const field =  e.target.name;
            
            // this.setState({[field]:value})
            const value = e.target.value;
            const name = e.target.name;
            const pwd = e.target.pwd;
            this.setState({[name]:value}) 
            this.setState({[pwd]:value}) 
     }
     handleLogin = (e) => {
        // e.preventDefault();
         alert('Logged in successfully');
     }

    
   
    render() {
        return (
        <React.Fragment>
            <Card style={{margin:" 20px 80px"}}>
            <h1 style={{color:"black",margin:"40px",textAlign:"center"}}><b>Defect Tracker</b></h1>
            <h3 style={{margin:"20px 400px", backgroundColor:"#34495E", textAlign:"center",color:"white"}}>Login</h3>
            <Jumbotron style={{margin:"0 400px"}}>
            <p>{this.props.demotemp}</p>
            <form >
          

                <div className="form-group">
                    <label>Username:</label>
                    <input style={{width:'100%'}} type="text" className="form-control" value={this.state.name} id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'100%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div>

               < button type="submit"style={{backgroundColor:"#34495E",color:"white"}}onClick={this.handleLogin}>Login</button>
               </form>
    
             </Jumbotron>
             
             </Card>

             <Viewdefect/>

            <Adddefect/>
           
           
        </React.Fragment>
        
        )
    }
}
          
           
           

        
  

export default Login;