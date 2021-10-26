import React, { useEffect } from "react";
 import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap";
import {useCookies} from 'react-cookie';  
import { useHistory , Link} from 'react-router-dom';

const NavBarComponent=()=>{

  const [cookies,setCookies] = useCookies(['Userid']);

  const stylew={
    textDecoration : "none",
    color : "grey"
  }
 

  const history = useHistory();

  const logfun=()=>{
    fetch(' http://localhost:9000/session/logout',{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      credentials:'include',
    
  }).then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data.message);
    history.push("/shopping")
    if(data.status){
      history.push("/shopping")
    }
  })

  }
  const navstyle={
    backgroundColor: "black",
    Color: "#FFFFFF",
    marginBottom: "1rem",
    position: "fixed",
    width:"100%",
    zIndex: "1"
  }
    return(
        <React.Fragment>
        <Navbar style = {navstyle} variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/main">HunGrY ;)</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Link to="/home" className="ms-5" style={stylew}>HOME</Link>
        <Link to="/about-us" className="ms-5" style={stylew}>ABOUT US</Link>
        <Link to="/contact-us" className="ms-5" style={stylew}>CONTACT</Link>
       
        <Link to ="/hungry" className="ms-5" style={stylew}>HUNGRY</Link>
       
        <Nav>{       
           (typeof(cookies.Userid) !== 'undefined' && cookies.Userid.length>0) ?
           <Link  to="#" onClick={logfun} className="ms-5" style={stylew}>LOG OUT</Link>
           :
           <Link to ="/logging" className="ms-5" style={stylew}>LOGIN</Link>
          }
       </Nav>
        <NavDropdown title="ADD HERE" className="ms-5" id="basic-nav-dropdown" style={{marginTop:'-0.5rem'}}>
          <NavDropdown.Item href="/user-form">ADD STAFF</NavDropdown.Item>   
          <NavDropdown.Item href="/category-form">ADD CATEGORY</NavDropdown.Item>
          <NavDropdown.Item href="/product-form">ADD CUISINE</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </React.Fragment>
    )
}
export default NavBarComponent;