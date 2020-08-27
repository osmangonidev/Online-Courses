import React from 'react';
import "./Cart.css"
import EnrolledCourses from "../EnrolledCourses/EnrolledCourses"

const Cart = (props) => {
    const cart=props.cart;
    const totalPrice= cart.reduce((sum,course)=>sum+course.price,0);
    return (
        <div>
            <div id="heading">
                <h2>Cart Items: {cart.length}</h2>
                <h2>Payable: ${totalPrice}</h2>
            </div>
            <div>
                {cart.map(course=><EnrolledCourses course={course}></EnrolledCourses>)}
            </div>
            <div>
                <button className="btn-lg btn-primary ml-5 mt-3">CheckOut</button>
            </div>
        </div>
    );
};

export default Cart;