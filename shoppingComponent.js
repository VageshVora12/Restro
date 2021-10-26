import React,{useEffect, useState} from 'react';
import CategoryComponent from './categoryComponent';
import FilterComponent from './filterComponent';
import ProductComponent from './productComponent';
import {Row , Col} from 'react-bootstrap';
const ShoppingComponent=()=>{
    const[categoryid,setCategoryid] = useState([]);
    const[sortby , setSortby] = useState();

    useEffect(()=>{
    setCategoryid(categoryid)        
    },[categoryid]);
    useEffect(()=>{
        setSortby(sortby);
    },[sortby]);

    return(
        <React.Fragment>
            <Row>
                <Col lg={8} style={{marginTop:"70px"}}>
                    <CategoryComponent setCategoryid={setCategoryid} categoryid={categoryid}/>
    </Col>
    <Col>
                    <FilterComponent setSortby={setSortby}/>
                </Col>
               </Row>
               <Row>
                    <ProductComponent value={{categoryid:categoryid,sortby:sortby}}/>
              </Row>
           
            
        </React.Fragment>
    )
}
export default ShoppingComponent;