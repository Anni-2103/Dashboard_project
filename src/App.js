import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './AppRoutes';
import './styles/App.css';
// import { courses } from './data/coursesData.js';
import ContentHeader from './components/ContentHeader.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleEnroll = (course) => {
    const updatedEnrolledCourses = [...enrolledCourses, course];
    setEnrolledCourses(updatedEnrolledCourses);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolledCourses));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update searchQuery state
  };

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Sidebar />}
        <div className={`main-content ${isLoggedIn ? '' : 'full-width'}`}>
          {isLoggedIn && (
            <ContentHeader
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              handleLogout={handleLogout}
            />
          )}
          <AppRoutes
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin}
            handleEnroll={handleEnroll}
            enrolledCourses={enrolledCourses}
            handleLogout={handleLogout}
            searchQuery={searchQuery} // Pass searchQuery to AppRoutes
            onSearchChange={handleSearchChange} // Pass onSearchChange to AppRoutes
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
