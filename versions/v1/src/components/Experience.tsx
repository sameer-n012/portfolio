import React, { useState } from "react";
import { getAllExperiences } from "../assets/experiences";
import "./Experience.css";

const Experience: React.FC = () => {
    const experiences = getAllExperiences()
        .filter((e) => e.featured)
        .sort((a, b) => Number(a.time > b.time) - Number(b.time > a.time))
        .reverse();

    const [activeId, setActiveId] = useState<string>(
        experiences[0]._id.toString(),
    );

    const parseDescription = (desc: string) => {
        return desc;
    };

    const activeExperience = experiences.find(
        (e) => e._id.toString() === activeId,
    );

    return (
        <div id="experience-div">
            <div id="experience-inner-div" className="ms-0">
                <h1 className="w-100 text-c1 p-2 mb-4">Experience</h1>

                <div id="experience-container">
                    <div className="experience-tabs">
                        {experiences.map((experience) => (
                            <button
                                key={experience._id}
                                className={`experience-tab ${activeId === experience._id.toString() ? "active" : ""}`}
                                onClick={() =>
                                    setActiveId(experience._id.toString())
                                }
                            >
                                {experience.position}
                            </button>
                        ))}
                    </div>

                    <div className="experience-content">
                        {activeExperience && (
                            <div className="experience-card glass-background-c2-thick">
                                <div className="experience-header">
                                    <h3 className="experience-position text-c1">
                                        {activeExperience.position}
                                    </h3>
                                    <p className="experience-subtitle text-light">
                                        @ {activeExperience.company}
                                    </p>
                                    <p className="experience-time text-light">
                                        {activeExperience.formattedTime}
                                    </p>
                                </div>

                                <div className="experience-body">
                                    <ul className="experience-description">
                                        {activeExperience.description.map(
                                            (desc, index) => (
                                                <li
                                                    key={index}
                                                    className="text-light align-items-baseline"
                                                >
                                                    <span className="bullet-point text-c1">
                                                        ▸
                                                    </span>
                                                    {parseDescription(desc)}
                                                </li>
                                            ),
                                        )}
                                    </ul>

                                    <div className="experience-badges">
                                        {activeExperience.skills.map(
                                            (skill, index) => (
                                                <span
                                                    key={index}
                                                    className="experience-badge"
                                                >
                                                    {skill}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
