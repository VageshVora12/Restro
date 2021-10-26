
import './App.css';
import MainComponent from "./mainComponent"
import HomeComponent from "./homeComponent";
import ProductComponent from './productComponent';
import CategoryComponent from './categoryComponent';
import UserFormComponent from './userFormComponent';
import CategoryFormComponent from './categoryFormComponent';
import NavBarComponent from './navComponent'
import ProductFormComponent from './productFormComponent';
import FilterComponent from './filterComponent';
import ShoppingComponent from './shoppingComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import Login from './loginForm';
import Orders from './orders.js';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
     
      {/* <MainComponent/> */}
      {/* <ShoppingComponent/> */}
      {/* <FilterComponent/> */}
      <Router>
      <NavBarComponent/>
        <Switch>
        <Route path ="/main">
            <MainComponent/>
          </Route>
          <Route path ="/home">
            <HomeComponent/>
          </Route>
          <Route path ="/product">
            <ProductComponent/>
          </Route>
          <Route path ="/category">
            <CategoryComponent/>
          </Route>
          <Route path="/user-form">
          <UserFormComponent/>
          </Route>
          <Route path="/about-us">
          <AboutComponent/>
          </Route>
          <Route path="/contact-us">
          <ContactComponent/>
          </Route>
          <Route path = "/category-form">
          <CategoryFormComponent/>
          </Route>
          <Route path = "/product-form">
          <ProductFormComponent/>
          </Route>
          <Route path = "/filter-form">
          <FilterComponent/>
          </Route>
          <Route path = "/hungry">
          <ShoppingComponent/>
          </Route>
          <Route path = "/logging">
          <Login/>
          </Route>
          <Route path = "/orders">
          <Orders/>
          </Route>

        </Switch>
      </Router>
    
    </React.Fragment>
  
  )
}

export default App;
