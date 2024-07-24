// components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ courses }) => {
  return (
    <div className="card-container">
      {courses.map(course => (
        <div key={course.id} className="card">
          <img src={course.image} alt={course.title} className="card-image" />
          <h3 className="card-title">{course.title}</h3>
          <p className="card-description">{course.description}</p>
          <Link to={`/courses/${course.id}`} className="card-link">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Card;


 

 