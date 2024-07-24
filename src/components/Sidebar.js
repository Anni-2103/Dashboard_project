// export default Sidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiBarChartAlt, BiBookAlt, BiHelpCircle, BiHomeAlt, BiSolidReport, BiTask, } from 'react-icons/bi';
 
import '../styles/sidebar.css';

import profilePic from '../images/profile_pic.jpg'; // Import your profile picture
 

const Sidebar = () => {
   

  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>Dashboard</h2> {/* Your name goes here */}
      </div>
      <div className="profile-info">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="user-name">Anirudha Kesarkar</span> {/* Your username goes here */}
      </div>
      <div className="menu--list">
        <NavLink to="/dashboard" className="item" activeClassName="active">
          <BiHomeAlt className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/courses" className="item" activeClassName="active">
          <BiSolidReport className="icon" />
          Courses
        </NavLink>
        <NavLink to="/resources" className="item" activeClassName="active">
          <BiTask className="icon" />
          Resources
        </NavLink>
        <NavLink to="/stats" className="item" activeClassName="active">
        <BiBarChartAlt />
          Stats {/* Add appropriate icon */}
        </NavLink>
        <NavLink to="/help" className="item" activeClassName="active">
          <BiHelpCircle className="icon" />
          Help
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { BiBarChartAlt, BiBookAlt, BiHelpCircle, BiHomeAlt, BiSolidReport, BiTask } from 'react-icons/bi';
// import { AiOutlineMenu } from 'react-icons/ai';
// import '../styles/sidebar.css';
// import profilePic from '../images/profile_pic.jpg'; // Import your profile picture

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={`menu ${isOpen ? 'open' : ''}`}>
//         <div className="logo">
//           <BiBookAlt className="logo-icon" />
//           <h2>Dashboard</h2> {/* Your name goes here */}
//         </div>
//         <div className="profile-info">
//           <img src={profilePic} alt="Profile" className="profile-pic" />
//           <span className="user-name">Anirudha Kesarkar</span> {/* Your username goes here */}
//         </div>
//         <div className="menu--list">
//           <NavLink to="/dashboard" className="item" activeClassName="active">
//             <BiHomeAlt className="icon" />
//             Dashboard
//           </NavLink>
//           <NavLink to="/courses" className="item" activeClassName="active">
//             <BiSolidReport className="icon" />
//             Courses
//           </NavLink>
//           <NavLink to="/resources" className="item" activeClassName="active">
//             <BiTask className="icon" />
//             Resources
//           </NavLink>
//           <NavLink to="/stats" className="item" activeClassName="active">
//             <BiBarChartAlt />
//             Stats {/* Add appropriate icon */}
//           </NavLink>
//           <NavLink to="/help" className="item" activeClassName="active">
//             <BiHelpCircle className="icon" />
//             Help
//           </NavLink>
//         </div>
//       </div>
//       <div className="hamburger" onClick={toggleSidebar}>
//         <AiOutlineMenu />
//       </div>
//     </>
//   );
// };

// export default Sidebar;
