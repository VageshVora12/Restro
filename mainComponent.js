import React from "react";
import sample from "./image/poster.jpg";
const MainComponent =()=>{

    const img1={
        backgroundImage : `url(${sample})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:"no-repeat",
        width:"100%",
        height:"100vh",
        // marginTop:"-8px"
    }
    const color={
        color:"#FFFFHH",
        fontSize:"3rem",
        fontFamily: 'Ink Free',
        marginLeft:"30%",
        paddingTop:"17%",
        paddingTop:'520px'
    }
    return(
        <React.Fragment>
            <div style={img1}>
            <h1 className="App" style={color}>"HAPPINESS is not in MONEY,but in FOOD".</h1>
            </div>
        </React.Fragment>
    )
}

export default MainComponent;