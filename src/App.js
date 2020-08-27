import React from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from "./fakeData/fakedata";
import Courses from "./Componets/Courses/Courses"
import { useState } from 'react';
import Cart from './Componets/Cart/Cart';

function App(props){

  const [cart,setcart]=useState([]);
  let totalEnrolled=0;
  function cartUpdate(course){
    totalEnrolled=[...cart,course];
    setcart(totalEnrolled);
  }

  return (
    <div className="App">
      <header id="header" className="bg-dark ">
        <h1>Welcome to Our E-Learning Platform</h1>
      </header>
     <main id="main">
      <div id="courses">
        {fakeData.map(course=><Courses enrolled={cartUpdate} course={course}></Courses>)}
      </div>
      <div id="cart" className="bg-secondary">
        <Cart cart={cart}></Cart>
      </div>
     </main>
    </div>
  );
}

export default App;
