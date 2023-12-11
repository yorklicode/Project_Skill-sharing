'use client'
import React, { useState, useEffect } from 'react';
import Skill from './skill';
import skills from './skills.json';
import NewAdvice from './new-skill';
//import axios from 'axios';

function SkillList({ skills: initialSkill, onSkillSelect}) {
 
    const [sortBy, setSortBy] = useState("advice");
 

  
  
    let sortedSkills = [...initialSkill];
    
    switch (sortBy) {
        case 'advice':
          sortedSkills.sort((a, b) => a.advice.localeCompare(b.advice));
          break;
        case 'category':
          sortedSkills.sort((a, b) => a.category.localeCompare(b.category));
          break;
       default:
          break;
    }
        return (
          <div>
            <div>
             <h1>Advice List</h1>
            <button
              className={`m-2 p-2 ${sortBy === "advice" ? "bg-blue-300" : ""}`}
              onClick={() => setSortBy("advice")}
            >
              Sort by Advice
            </button>
            <button
           className={`m-2 p-2 ${sortBy === "category" ? "bg-blue-300" : ""}`}
               onClick={() => setSortBy("category")}
            >
              Sort by Category
            </button>
    </div>

    <ul>
        {sortedSkills.map(skill => (
          <Skill 
            key={skill.id} 
            {...skill} 
            onSelect={() => onSkillSelect(skill)}
          />
        ))}
      </ul>
    </div>
        );
          
    }
    

export default SkillList;
