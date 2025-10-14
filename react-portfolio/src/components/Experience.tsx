import React, { useState } from 'react';
import { getAllExperiences } from '../assets/experiences';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = getAllExperiences()
    .filter((e) => e.featured)
    .sort((a, b) => Number(a.time > b.time) - Number(b.time > a.time))
    .reverse();

  const [activeId, setActiveId] = useState<string>(experiences[0]._id.toString());

  const parseDescription = (desc: string) => {
    return desc;
  };

  const activeExperience = experiences.find(e => e._id.toString() === activeId);

  return (
    <div id="experience-div">
      <div id="experience-inner-div">
        <h1 className="w-100 text-c1 p-2">Experience</h1>

        <div className="d-flex p-2 pt-4">
          <div className="nav-pills flex-column w-25" style={{ display: 'flex', flexDirection: 'column' }}>
            {experiences.map((experience) => (
              <button
                key={experience._id}
                className={`nav-link ${activeId === experience._id.toString() ? 'active' : ''}`}
                onClick={() => setActiveId(experience._id.toString())}
              >
                {experience.position}
              </button>
            ))}
          </div>

          <div className="ms-4 w-75">
            {activeExperience && (
              <div>
                <p className="experience-position-company-time text-light">
                  {activeExperience.formattedTime} @ {activeExperience.company}
                </p>
                <ul className="experience-position-description text-light">
                  {activeExperience.description.map((desc, index) => (
                    <li key={index}>{parseDescription(desc)}</li>
                  ))}
                </ul>
                <p className="text-light experience-position-skills">
                  Skills: {activeExperience.skills.join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
