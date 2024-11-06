import React, { useState } from 'react';
import NavigationBar from './navigationBar';
import './Gpa.css';

function GpaCalculator() {
  // Define the credits for each module
  const credits = {
    digitalElectronics: 3.0,
    dataStructures: 4.0,
    computerOrg: 3.0,
    engineeringMath: 3.0,
    englishForAcad: 3.0
  };

  // Define grade points for each grade
  const gradePoints = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'E': 0.0
  };

  // State to store grades for each module
  const [grades, setGrades] = useState({
    digitalElectronics: '',
    dataStructures: '',
    computerOrg: '',
    engineeringMath: '',
    englishForAcad: ''
  });

  // State to store the final GPA result
  const [finalGpa, setFinalGpa] = useState(null);

  // Handle grade change for each module
  const handleGradeChange = (module, value) => {
    setGrades(prevGrades => ({ ...prevGrades, [module]: value }));
  };

  // Calculate GPA for each module and final GPA
  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    Object.keys(grades).forEach(module => {
      const grade = grades[module];
      if (gradePoints[grade]) {
        totalPoints += gradePoints[grade] * credits[module];
        totalCredits += credits[module];
      }
    });

    // Calculate the final GPA
    const finalGpaValue = totalPoints / totalCredits;
    setFinalGpa(finalGpaValue.toFixed(2));
  };

  return (
    <div className="gpa-container">
      <NavigationBar />
      <section className="gpa-hero-section">
        <h1>GPA Calculator</h1>
        <p>Enter your grades for each module to calculate your GPA.</p>

        <div className="grades-input">
          {Object.keys(grades).map((module, index) => (
            <div key={index} className="module-grade">
              <label>
                {module.replace(/([A-Z])/g, ' $1').toUpperCase()}:
              </label>
              <select
                value={grades[module]}
                onChange={(e) => handleGradeChange(module, e.target.value)}
              >
                <option value="">Select Grade</option>
                {Object.keys(gradePoints).map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <button className="calculate-btn" onClick={calculateGpa}>
          Calculate GPA
        </button>

        {finalGpa !== null && (
          <div className="gpa-result">
            <h2>Your Final GPA: {finalGpa}</h2>
          </div>
        )}
      </section>
    </div>
  );
}

export default GpaCalculator;
