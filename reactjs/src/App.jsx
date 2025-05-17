// src/App.jsx

import React from 'react';
import './App.css';
import StudentRegistrationForm from './StudentRegistrationForm';
import Studentdata from './components/studentdata';

function App() {
  return (
    <div>
      <StudentRegistrationForm />
      <Studentdata/>
    
    </div>
  );
}

export default App;
