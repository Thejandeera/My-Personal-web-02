import React, { useState } from 'react';
import NavigationBar from './navigationBar';
import './Gpa.css';

function GpaCalculator() {
  // Define the credits for each module
  const credits = {
    digitalElectronics: 3.0,
    dataStructures: 4.0,
    computerOrganization: 3.0,
    engineeringMathematics2: 3.0,
    englishForAcademic: 3.0
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

  // State to store the grades for each module
  const [grades, setGrades] = useState({
    digitalElectronics: '',
    dataStructures: '',
    computerOrganization: '',
    engineeringMathematics2: '',
    englishForAcademic: ''
  });

  // State to store the final GPA result
  const [finalGpa, setFinalGpa] = useState(null);

  // State to store the student's name
  const [name, setName] = useState('');

  // Handle grade change for each module
  const handleGradeChange = (module, value) => {
    setGrades(prevGrades => ({ ...prevGrades, [module]: value }));
  };

  // Calculate GPA for each module and final GPA
  const calculateGpa = () => {
    if (!name.trim()) {
      alert("Please enter your name before calculating GPA.");
      return;
    }

    // Check if all module grades are entered
    const allGradesEntered = Object.values(grades).every(grade => grade !== '');
    if (!allGradesEntered) {
      alert("Please enter grades for all modules.");
      return;
    }

    let totalPoints = 0;
    let totalCredits = 0;

    Object.keys(grades).forEach(module => {
      const grade = grades[module];
      if (gradePoints[grade]) {
        totalPoints += gradePoints[grade] * credits[module];
        totalCredits += credits[module];
      }
    });

    const finalGpaValue = totalPoints / totalCredits;
    setFinalGpa(finalGpaValue.toFixed(2));

    // Send data to Google Sheets
    sendToGoogleSheets(name, grades, finalGpaValue.toFixed(2));
  };
  

  const sendToGoogleSheets = async (name, grades, gpa) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('digitalElectronics', grades.digitalElectronics);
    formData.append('dataStructures', grades.dataStructures);
    formData.append('computerOrganization', grades.computerOrganization);
    formData.append('engineeringMathematics2', grades.engineeringMathematics2);
    formData.append('englishForAcademic', grades.englishForAcademic);
    formData.append('finalGpa', gpa);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwWAW1hk01HJhGM-0DLTIKWE4zDUtbJwi2ZOYMTPDFA4PKn0F4shjfbvtOLrLlkoIP0fg/exec', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        console.log('Data sent to Google Sheets successfully');
      } else {
        console.error('Failed to send data to Google Sheets');
      }
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
    }
  };

  return (
    <div className="gpa-container">
      <NavigationBar />
      <section className="gpa-hero-section">
        <h1>GPA Calculator</h1>
        <p>Enter your grades for each module to calculate your GPA.</p>

        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          style={{
            backgroundColor: 'white' , 
            color: 'black' ,
            height: '40px',
            fontSize:'25px'
          }}
          className="name-input"
        />

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
