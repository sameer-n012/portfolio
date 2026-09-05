import React from "react";
import profileDetails from "../assets/profileDetails";
import "./Skills.css";

const Skills: React.FC = () => {
    // Strict grid: 4 columns
    const skillsPerCol = 4;
    const lang_n = profileDetails.skills.languages.length;
    const lang_grid: string[][] = [];
    for (let i = 0; i < Math.ceil(lang_n / skillsPerCol); i++) {
        lang_grid.push([]);
        for (let j = 0; j < skillsPerCol; j++) {
            const idx = i * skillsPerCol + j;
            if (idx < lang_n) {
                lang_grid[i].push(profileDetails.skills.languages[idx]);
            }
        }
    }

    const tool_n = profileDetails.skills.tools.length;
    const tool_grid: string[][] = [];
    for (let i = 0; i < Math.ceil(tool_n / skillsPerCol); i++) {
        tool_grid.push([]);
        for (let j = 0; j < skillsPerCol; j++) {
            const idx = i * skillsPerCol + j;
            if (idx < tool_n) {
                tool_grid[i].push(profileDetails.skills.tools[idx]);
            }
        }
    }

    return (
        <div id="skills-div">
            <div id="skills-inner-div m-0">
                <h1 className="skills-title text-c1">Skills</h1>
                <p className="skills-about">{profileDetails.aboutMe}</p>
                <p className="skills-subtitle">In the past I've worked with:</p>
                <div className="skills-table">
                    {lang_grid.map((row, rowIdx) => (
                        <div key={rowIdx} className="skills-table-row">
                            {row.map((skill, colIdx) => (
                                <div key={colIdx} className="skills-table-cell">
                                    <span className="skills-prefix">&gt;</span>{" "}
                                    <span className="skills-text">{skill}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {/*<p className="skills-subtitle">and worked with:</p>*/}
                <div className="skills-table">
                    {tool_grid.map((row, rowIdx) => (
                        <div key={rowIdx} className="skills-table-row">
                            {row.map((skill, colIdx) => (
                                <div key={colIdx} className="skills-table-cell">
                                    <span className="skills-prefix">&gt;</span>{" "}
                                    <span className="skills-text">{skill}</span>
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
