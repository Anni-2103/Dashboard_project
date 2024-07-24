// src/components/EnrolledCourses.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EnrolledCourses.css';

const EnrolledCourses = ({ courses }) => {
  return (
    <div className="enrolled-courses-container">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="enrolled-course-card">
            <img src={course.image} alt={course.title} className="enrolled-course-image" />
            <h3 className="enrolled-course-title">{course.title}</h3>
            <Link to={`/courses/${course.id}`} className="enrolled-course-link">
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </div>
  );
};

export default EnrolledCourses;
