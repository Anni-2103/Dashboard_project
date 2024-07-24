// //using localstorage
import React, { useState, useEffect } from 'react';
import '../styles/CourseDetails.css';

const CourseDetails = ({ course, onEnroll }) => {
  const [enrolled, setEnrolled] = useState(false);
  const [expandedModules, setExpandedModules] = useState([]);
  const [expandedAssignments, setExpandedAssignments] = useState([]);

  useEffect(() => {
    const isEnrolled = localStorage.getItem(`enrolled_${course.id}`);
    if (isEnrolled) {
      setEnrolled(true);
    }
  }, [course.id]);

  const handleEnroll = () => {
    setEnrolled(true);
    localStorage.setItem(`enrolled_${course.id}`, true);
    onEnroll(course);
  };

  const toggleModule = (index) => {
    setExpandedModules((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const toggleAssignment = (index) => {
    setExpandedAssignments((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  if (!course) {
    return <div>No course details available</div>;
  }

  return (
    <div className="course-details">
      <img src={course.image} alt={course.title} className="course-image" />
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>

      {!enrolled ? (
        <button onClick={handleEnroll}>Enroll</button>
      ) : (
        <>
          <div className="course-section">
            <h4>Topics Covered:</h4>
            <ul>
              {course.details && course.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="course-section">
            <h4>Modules:</h4>
            {course.modules && course.modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="module-item">
                <div className="module-header" onClick={() => toggleModule(moduleIndex)}>
                  <h5>{module.moduleTitle} {expandedModules.includes(moduleIndex) ? '-' : '+'}</h5>
                </div>
                <div className={`module-details ${expandedModules.includes(moduleIndex) ? 'show' : ''}`}>
                  {module.videos.map((video, videoIndex) => (
                    <div key={videoIndex} className="video-item">
                      <h6>{video.title}</h6>
                      {video.videoFile ? (
                        <video controls>
                          <source src={video.videoFile} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <p>Video not available</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="course-section">
            <h4>Assignments:</h4>
            {course.assignments && course.assignments.map((assignment, index) => (
              <div key={index} className="assignment-item">
                <div className="assignment-header" onClick={() => toggleAssignment(index)}>
                  <h5>{assignment.title} {expandedAssignments.includes(index) ? '-' : '+'}</h5>
                </div>
                <div className={`assignment-details ${expandedAssignments.includes(index) ? 'show' : ''}`}>
                  <p>{assignment.description}</p>
                  <p><strong>Due Date:</strong> {assignment.dueDate}</p>
                  {assignment.link && <a href={assignment.link} target="_blank" rel="noopener noreferrer">Go to Assignment</a>}
                  <a href={assignment.submissionLink} target="_blank" rel="noopener noreferrer">Submit Assignment</a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
