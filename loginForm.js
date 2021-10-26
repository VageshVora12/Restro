import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const history = useHistory();
  return(
<React.Fragment>
 
  <div>
    <h1>LOGIN HERE!</h1>
    <Formik 
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }

       else if (!values.password) {
          errors.password = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        fetch(' http://localhost:9000/login/Login-info',{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify({email:values.email,password:values.password})
        }).then(function(response){
          return response.json();
        }).then(function(data){
          console.log(data.message);
          // alert(data.message);
          if(data.status===true){
            history.push("/shopping")

          }
        })
          setSubmitting(false);
        }, 400);
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" href="#" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  </React.Fragment>
   )
};

export default Login;