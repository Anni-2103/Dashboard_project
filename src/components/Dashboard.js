import React from 'react';
// import ContentHeader from './ContentHeader';
import Card from './Card';
import Chart from './Chart';
// import EnrolledCourses from './EnrolledCourses';
import '../styles/dashboard.css';
 

const Dashboard = ({ courses, searchQuery, onSearchChange }) => {

  const firstThreeCourses = courses.slice(0, 3); // Adjust to display first three courses

  return (
    <div className="content">
      {/* <ContentHeader /> */}
      <div className="dashboard-cards">
        <Card courses={firstThreeCourses} />
      </div>
      <Chart />
    </div>
  );
}

export default Dashboard;

 

 
