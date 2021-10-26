import React from 'react';
import{Form} from 'react-bootstrap';

const FilterComponent =(props)=>{
    const style1 = {
        width:"330px",
        marginTop:'70px'
    }
    const onHandleChange=(e)=>{
        props.setSortby(e.target.value);
        //console.log(e.target.value);
    
    }
    return(
        <React.Fragment>
            <Form.Select onChange ={onHandleChange} style={style1}>
            <option>Select filter</option>
                <option value='-1'>HIGH TO LOW</option>
                <option value='1'>LOW TO HIGH</option>
            </Form.Select>
        </React.Fragment>
    )
}
export default FilterComponent;