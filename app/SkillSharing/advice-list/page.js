'use client';
import React, { useState, useEffect } from 'react';
import SkillList from './skill-list';
import NewSkill from './new-skill';
//import skillsData from './skills.json';
import SkillAdvice from './skill-advice';
import { useUserAuth } from '../_utils/auth-context';
import { getSkills, addSkill, deleteSkill } from '../_services/skillSharing-service'; 

function Page() {
    const { user } = useUserAuth();
    const [skills, setSkills] = useState([]);
    const [selectedSkillName, setSelectedSkillName] = useState(''); // New state
    
    
  async function loadSkills() {
    if (user) {
      const userSkills = await getSkills(user.uid);
      setSkills(userSkills);
   }
  }

  
  useEffect(() => {
    if (user) {
      loadSkills();
    }
  }, [user]);


  const handleAddSkill = async (newSkill) => {
   //setSkills(prevSkills => [...prevSkills, newSkill]);
 // };
   
     if (user) {
      const skillId = await addSkill(user.uid, newSkill);
   
 setSkills(prevSkills => [...prevSkills, { ...newSkill, id: skillId }]);
    }
  };
      
  const handleDeleteSkill = async (skillId) => {
    if (user) {
      await deleteSkill(user.uid, skillId);
      setSkills(prevSkills => prevSkills.filter(skill => skill.id !== skillId));
    }
  };
 
    const handleSkillSelect = (skill) => {
        const cleanedName = skill.advice.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
        setSelectedSkillName(cleanedName);
      };


      if (!user) {
        return (
          <div>
            <h1>Access Denied</h1>
            <p>You must be logged in to view the shopping list.</p>
          </div>
        );
      }
      const style = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
        },
        skillList: {
            width: '40%', // Adjust width as needed
        },
        skillAdvice: {
            width: '55%', // Adjust width as needed
        }
    }
      return (
        <div  >
          <h1>SkillShare</h1>
          <div style={style.container}>
            <div style={style.skillList}>
              <NewSkill onAddSkill={handleAddSkill} />
              <SkillList skills={skills} onSkillSelect={handleSkillSelect}  onDeleteSkill={handleDeleteSkill}/>
            </div>
            <div style={style.skillAdvice}>
            <SkillAdvice query={selectedSkillName} />
            </div>
          </div>
        </div>
  );

      }
export default Page;
