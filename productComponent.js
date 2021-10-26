import React,{useState,useEffect} from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap';

const AddCart = {



}

const styl = {
    margin:'0px',
    padding:'20px'
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


const ProductComponent=(props)=>{
    const[product,setProduct] = useState([]);
    const [imagepath,setImagePath] = useState("");
    useEffect(()=>{
        fetch('http://localhost:9000/product/product-list',{
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({cateId:props.value.categoryid, sortby:props.value.sortby})
        }).then(function(response){
            return response.json();
        }).then((data)=>{
            console.log(data.data)
            setProduct(data.data);
            setImagePath(data.imgpath)
        });
    },[props.value])
 return(
     <React.Fragment>
         <h1 className="App">ShOppIng</h1>
         
            <Row style={styl}>
            {product.map((product,index)=>{               
             return(
                <Col key={index}>
                    <Card style={{ width: '17rem' ,margin: '1rem'}}>
                    <Card.Img variant="top" src={imagepath+product.image}/>

                <Card.Body>
               
                    <Card.Title> <p>NAME : {product.name}</p>
                    <p>PRICE : {product.price}</p>
                    <p>CATEGORY : {product.categoryname.name}</p>
                                      
                    </Card.Title>
                    <Card.Text>
                    
                   <h6>{product.detail}</h6>

                   </Card.Text>
                   <Button Type="submit" href="/orders">ADD to cart</Button>
                </Card.Body>
                </Card>
                </Col>
                 )
             })}
                 
            
            </Row>
             
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
export default ProductComponent;