import React from 'react';
import "./EnrolledCourses.css"

const EnrolledCourses = (props) => {
    const {name,price,instructor}=props.course
    return (
        <div id="enrolled-course" className="bg-light">
            <h2>{name}</h2>
            <h2>by {instructor}</h2>
        </div>
    );
};

export default EnrolledCourses;