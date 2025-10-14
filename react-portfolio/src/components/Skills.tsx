import React from 'react';
import profileDetails from '../assets/profileDetails';
import './Skills.css';

const Skills: React.FC = () => {
  const feedSkills = (skillsPerCol: number): string[][] => {
    const n = profileDetails.skills.length;
    const skills: string[][] = [];

    for (let i = 0; i < Math.floor(n / skillsPerCol); i++) {
      skills.push([]);
      for (let j = 0; j < n && j < skillsPerCol; j++) {
        skills[i].push(profileDetails.skills[i * skillsPerCol + j]);
      }
    }

    return skills;
  };

  const skillsArr = feedSkills(4);

  return (
    <div id="skills-div">
      <div id="skills-inner-div">
        <h1 className="w-100 text-c1 p-2">Skills</h1>
        <p className="text-light p-2">{profileDetails.aboutMe}</p>
        <p className="text-light p-2">In the past I've worked with:</p>
        <div className="d-flex p-2">
          {skillsArr.map((arr, index) => (
            <div
              key={index}
              className="col-sm-6 d-flex flex-column container-fluid"
            >
              {arr.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-table-row text-light d-flex">
                  &gt; &nbsp;
                  <p className="text-c1 skill-table-cell fira-code">{skill}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
