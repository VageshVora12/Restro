import React from 'react';
import { Row, Col ,Carousel,Button} from 'react-bootstrap'
import first from './image/fooood.jpg';
import second from './image/shop2.webp';
// import third from './image/Shop3.webp';
// import four from './image/shop4.webp';
// import five from './image/shop5.webp';
// import six from './image/shop6.webp';
// import seven from './image/shop7.webp';
// import eight from './image/shop8.webp';
// import nine from './image/shop9.webp';
// import ten from './image/shop10.webp';
import cor2 from './image/Sandw.jpg';
import cor3 from './image/yumm.jpg';
import man1 from './image/FeedEmp.svg';
import man2 from './image/heart.jpg';
import man3 from './image/FoodDel.svg';
// import man4 from './image/man4.webp';
// import man5 from './image/man5.webp';
// import man6 from './image/man6.webp';
// import man7 from './image/man7.webp';
// import man8 from './image/man8.webp';
// import bottom1 from './image/bottom1.webp'


const HomeComponent = () => {
  const input={
    border:'0px'
}
const button={
    marginTop:'20px'
}
const footer={
    height:'420px',
    backgroundColor:'#f8f9fa',
    marginTop:'100px',
    color:'black',
    padding:'50px'
}
const copyright={
    lineHeight:'0.4'
}
const list ={
    listStyle:'none',
}

  return (
    <React.Fragment>

<Carousel>
  <Carousel.Item interval={1000} style={{marginTop:'50px'}}>
    <img
      className="d-block w-100"
      src={first}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500} style={{marginTop:'50px'}}>
    <img
      className="d-block w-100"
      src={cor2}
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{marginTop:'50px'}}>
    <img
      className="d-block w-100"
      src={cor3}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 

      <img src={second} style={{ width: "100%" }}></img>

      <Row className="text-center justify-content-center">
        <Col lg={3} md={6}>
          <a href="/hungry"><img src={man1}></img></a>
        </Col>
        <Col lg={3} md={6}>
          <a href="/hungry"><img src={man2} style={{width: '320px'}}></img></a>
        </Col>
         <Col lg={3} md={6}>
          <a href="/hungry"><img src={man3} style={{marginLeft:'30px'}}></img></a>
        </Col>
        {/*
        <Col lg={3} md={6}>
          <a href=""><img src={man4}></img></a>
        </Col>
        <Col lg={3} md={6}>
          <a href=""><img src={man5}></img></a>
        </Col>
        <Col lg={3} md={6}>
          <a href=""><img src={man6}></img></a>
        </Col>
        <Col lg={3} md={6}>
          <a href=""><img src={man7}></img></a>
        </Col>
        <Col lg={3} md={6}>
          <a href=""><img src={man8}></img></a>
        </Col> */}
      </Row>
    {/* <img src={bottom1} style={{width:"98%"}}></img> */}

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

export default HomeComponent;