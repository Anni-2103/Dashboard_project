import React from 'react';
import { BiSearch, BiLogOut } from 'react-icons/bi';
import '../styles/ContentHeader.css';

const ContentHeader = ({ searchQuery, onSearchChange, handleLogout }) => {
  const logoutHandler = () => {
    handleLogout(); // Call the logout function passed via props
  };

  return (
    <div className='content--header'>
      <h1 className='header--title'>Welcome Anirudha!</h1>
      <div className="header--activity">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search anything here..."
            value={searchQuery}
            onChange={onSearchChange} // Handle search query changes
          />
          <BiSearch className="icon" />
        </div>
        <div className="logout">
          <button className="item" onClick={logoutHandler}>
            <BiLogOut className="icon" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

 