import React from 'react';
import "./Courses.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Courses = (props) => {
    const {name,instructor,price,url,rating}=props.course;
    return (
        <div id="course-wrapper">
           <div id='img-wrapper'>
            <img id="img" src={url} alt=""/>
           </div>
           <div id="description">
            <h1>{name}</h1>
            <h3>Instructor: {instructor}</h3>
            <h3>Rating: {rating}</h3>
            <h3>Price: ${price}</h3>
            <button className="btn btn-secondary" onClick={()=>props.enrolled(props.course)}><FontAwesomeIcon icon={faPlusSquare}/> Enroll Now</button>
           </div>
        </div>
    );
};

export default Courses;