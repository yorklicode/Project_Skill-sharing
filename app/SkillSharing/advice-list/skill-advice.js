'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const fetchSkillAdvice = async () => {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  const data = await response.json();
 
  return data.slip;
};

const SkillAdvice = ({ }) => {
  
  const [advice, setAdvice] = useState("");

  const loadSkillAdvice = async () => {
    const fetchedAdvice = await fetchSkillAdvice();
    setAdvice(fetchedAdvice.advice);
  };

  
  useEffect(() => {
    loadSkillAdvice();
  }, []);

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Set the container height
      padding: '20px',
      backgroundColor: '#f0f0f0',
    },
    adviceText: {
      margin: '20px 0',
      fontSize: '18px',
      color: '#333',
    },
    refreshButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    logo: {
      width: '100px', 
      height: 'auto',
      marginBottom: '20px',
    }
  };
  // Render the component
  return (
    <div style={style.container}>
     
      <h1 className="block text-gray-700 text-sm font-bold mb-2">Skill Advice</h1>
      <p style={style.adviceText}>{advice}</p>
      <button style={style.refreshButton} onClick={loadSkillAdvice}>Refresh Advice</button> 
    </div>
  );
};

export default SkillAdvice;
