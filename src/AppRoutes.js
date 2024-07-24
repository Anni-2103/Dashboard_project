import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Resources from './components/Resources';
import Statistics from './components/Statistics';
import CourseDetailsPage from './components/CourseDetailPage';
import EnrolledCourses from './components/EnrolledCourses';
import Login from './components/Login';
import Help from './components/Help';
import { courses } from './data/coursesData';

const AppRoutes = ({ isLoggedIn, handleLogin, handleEnroll, enrolledCourses, handleLogout, searchQuery,onSearchChange }) => {
  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard courses={courses} searchQuery={searchQuery} onSearchChange={onSearchChange} />} />
          <Route path="/courses" element={<Courses onEnroll={handleEnroll} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/courses/:courseId"
            element={<CourseDetailsPage courses={courses} onEnroll={handleEnroll} />}
          />
          <Route path="/enrolled-courses" element={<EnrolledCourses courses={enrolledCourses} />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;

 


