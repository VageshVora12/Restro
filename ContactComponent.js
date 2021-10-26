import React from "react";
import {Row, Col, Container, Button } from 'react-bootstrap';

const style2={
    border:'1px solid gray',
    height:'500px',
    paddingLeft:'50px',
    paddingRight:'50px',
    paddingTop:'40px',
    marginTop:'100px'
}

const input2={
    height:'50px'
}

const textarea={
    height:'200px'
}

const button2={
    backgroundColor:'black',
    height:'50px',
    borderRadius:'25px', 
    border:'none'
}

const footer={
    height:'400px',
    backgroundColor:'#f8f9fa',
    marginTop:'100px',
    color:'black',
    padding:'80px'
}

const list ={
    listStyle:'none',
}


const input={
    border:'0px'
}
const button={
    marginTop:'20px'
}
const copyright={
    lineHeight:'0.4'
}

const ContactComponent = ()=>{
    return(
        <React.Fragment>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={5} style={style2}>
                        <h2 className='text-center'>Send Us A Message</h2>
                        <br></br>
                        <input type='email' placeholder='Your Email Address' className='form-control' style={input2}></input>
                        <br></br>
                        <textarea placeholder='How Can We Help' className='form-control' style={textarea}></textarea>
                        <br></br>
                        <Button className='form-control' style={button2}>Submit</Button>
                    </Col>
                    <Col lg={5} style={style2}>
                        <h5 className='mt-5 ms-5'>Address</h5>
                        <p className='ms-5' style={{color:'gray'}}>Coza Store Center 8th floor, 379<br></br>Hudson St, New York, NY 10018 US</p>
                        <h5 className='mt-5 ms-5'>Lets Talk</h5>
                        <p className='ms-5' style={{color:'blue'}}>+1 800 1236879</p>
                        <h5 className='mt-5 ms-5'>Sale Support</h5>
                        <p className='ms-5' style={{color:'blue'}}>contact@example.com</p>
                    </Col>
                </Row>
            </Container>

            <div style={footer} bg='light'>
            <Row className='text-center p-5'>
                <Col lg={3}>
                    <h2>Categories</h2>
                        <ul style={list}>
                            <li >Indian</li>
                            <li>Italian</li>
                            <li>American</li>
                            <li>South Indian</li>
                            <li>Chinese</li>
                        </ul>
                </Col>
                <Col lg={3}>
                    <h2>Helper</h2>
                        <ul style={list}>
                            <li>Track Order</li>
                            <li>Returns</li>
                            <li>FAQs</li>
                            <li>Delivery</li>
                        </ul>
                </Col>
                <Col lg={3}>
                    <h2>Get in Touch</h2>
                        <ul style={list}>
                            <li>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on 
                                (+1) 96 716 6879</li>
                            <li>Contact us:1234567890</li>
                            <li>Email: support@gmail.com</li>
                        </ul>
                </Col>
                <Col lg={3}>
                    <h2>NewsLetter</h2>
                        <ul style={list}>
                            <li><input type='email' placeholder='Enter the email' style={input}></input></li>
                            <hr></hr>
                            <li style={button}><Button>Subscribe</Button></li>
                        </ul>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col style={copyright}>
                    <p>Copyright ©2021 All rights reserved.</p>
                    <p>This template is made by <span style={{color:'red'}}>VageshVora</span></p>
                </Col>
            </Row>
        </div>
        </React.Fragment>
    )
}

export default ContactComponent;