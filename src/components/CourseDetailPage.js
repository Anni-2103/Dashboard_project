import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetails from './CourseDetails'; // Import the CourseDetails component

const CourseDetailsPage = ({ courses, onEnroll }) => {
  const { courseId } = useParams(); // Get the courseId from URL params
  const [loading, setLoading] = useState(true);
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    // Simulate fetching course details with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        const course = courses.find(course => course.id === parseInt(courseId));
        setCourseDetails(course);
        setLoading(false); // Set loading to false once data is fetched
      }, 1000); // Simulate 1 second delay
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup any resources if needed
    };
  }, [courseId, courses]); // Run effect whenever courseId changes

  const handleEnroll = (course) => {
    // Implement your enrollment logic here
    alert(`Enrolled in ${course.title}`);
    // For example, you can add the enrolled course to user's enrolled courses list
    // or perform any other necessary actions
    onEnroll(course); // Pass the course object to the onEnroll callback
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Course Details</h1>
      <CourseDetails course={courseDetails} onEnroll={handleEnroll} />
    </div>
  );
};

export default CourseDetailsPage;
 
  