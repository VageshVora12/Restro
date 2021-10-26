import React from "react";
import image from './about-1.jpg';
import {Row, Col, Container,Button} from 'react-bootstrap';
import image2 from './cor2.jpg';
import image3 from './aboutus.jpg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

const style={
    marginTop:'-80px',
    marginLeft:'100px',
    fontSize:'50px'
}
const row={
    marginTop:'100px'
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

const AboutComponent =()=>{

    return(
        <React.Fragment>
            <div>
                <img src={image} className='img-fluid' style={{marginTop:'50px'}}></img>
                <h1 style={style} className='text-white'>About Us</h1>
            </div>
            {/* <h1>{element}</h1> */}
            <Container>
                <Row style={row}>
                    <Col>
                        <h2>Search, Select, Buy online</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a 
                            quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor 
                            consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat 
                            lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. 
                            Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam
                            id diam maecenas ultricies mi eget.</p>
                    </Col>
                    <Col>
                        <img src={image2}></img>
                    </Col>
                </Row>
                <Row style={row}>
                    <Col>
                        <img src={image3}></img>
                    </Col>
                    <Col>
                        <h2>Shop offline. Cozy outlet stores</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a 
                            quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor 
                            consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat 
                            lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. 
                            Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam
                            id diam maecenas ultricies mi eget.</p>
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
export default AboutComponent;