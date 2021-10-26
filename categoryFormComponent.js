import React from 'react';
import { Formik } from 'formik';
// import './App.css';
// const categorystyle = {
//   // backgroundColor:"grey",
//   // height:"100vh"
//   // paddingTop:"130px"
// }
const cbw={
  width:"29%",
  border:"none",
  borderRadius:"25px",
  backgroundColor:"teal",
  color:"white",
  marginLeft:"5%",
  paddingTop:"6px"
}
// const form={
//     margin:'auto',
//     width:'30%',
//     border:'3px solid black',
//     padding:'50px',
//     borderRadius:'20px',
//    boxShadow:'2px 2px 2px black'
// }
// const input={
//   borderRadius:'15px',
//   height:'20px',
//   width:'200px',
//   border:'2px solid black'
// }
// const label={
//   fontSize:'20px'
// }
// const button ={
//   fontSize:'20px',
//   marginTop:'20px',
//   width:'250px',
//   borderRadius:'20px',
//   border:'2px solid black'
// }

const border={
  border:"5px solid black",
  borderRadius:"25px",
  width:"50%",
  marginLeft:"25%",
  backgroundColor:"grey",
  padding:"40px",
}

const inpcur ={
  borderRadius:"25px",
  border:"5px double teal"
}
 const CategoryFormComponent = () => (

  <div className="App" style={border}>
     <h1 style={{marginTop:'200px'}}>CATEGORY DETAIL</h1>
     <Formik 
       initialValues={{ name:'' , alias:'' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
          errors.name = 'Name required'
        }
         if (!values.alias) {
           errors.alias = 'Alias Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        //  setTimeout(() => {
          //  alert(JSON.stringify(values, null, 2));
          fetch(' http://localhost:9000/category/category-main',{
              method:'POST',
              headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify(values)
          }).then(function(response){
            return response.json();
          }).then((data)=>{
            console.log(data);
          })

          //  setSubmitting(false);
        //  }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} >
           <label>Name: </label>
           <input style={inpcur} className="mt-3"
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
             
           />
           <br></br>
           {errors.name && touched.name && errors.name}
           <br></br>
           <label>Alias : </label>
           <input style={inpcur} className="mt-3"
             type="text"
             name="alias"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.alias}
            
           />
           <br></br>
           <button type="submit" style={cbw} disabled={isSubmitting} className="mt-5">
             Submit
           </button>
         </form>
)}
     </Formik>
  </div>
 );
 export default CategoryFormComponent;