import React, { useState, useEffect } from 'react';
// import ContentHeader from './ContentHeader';
import Card from './Card';
import { courses } from '../data/coursesData.js';
import '../styles/courses.css';

const Courses = ({ searchQuery }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showEnrolledCourses, setShowEnrolledCourses] = useState(false); // Toggle to show enrolled courses

  useEffect(() => {
    const storedEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  const toggleEnrolledCourses = () => {
    setShowEnrolledCourses(!showEnrolledCourses);
  };

  const filteredCourses = searchQuery
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

  return (
    <div>
      <div className="courses-container">
        <div className="toggle-enrolled">
          <button className="toggle-button" onClick={toggleEnrolledCourses}>
            {showEnrolledCourses ? 'Show All Courses' : 'Show Enrolled Courses'}
          </button>
        </div>
        {showEnrolledCourses ? (
          <div className="enrolled-courses">
            <h2>Enrolled Courses</h2>
            {enrolledCourses.length > 0 ? (
              <Card courses={enrolledCourses} />
            ) : (
              <p>No courses enrolled yet.</p>
            )}
          </div>
        ) : (
          <div className="all-courses">
            <h2>All Courses</h2>
            <Card courses={filteredCourses} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

