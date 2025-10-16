import React, { useState } from "react";
import { getAllEducation } from "../assets/education";
import "./Education.css";
import "./Experience.css"; // use same styles as experience for cards

const Education: React.FC = () => {
    const educationList = getAllEducation()
        .filter((e) => e.featured)
        .sort((a, b) => Number(a.time > b.time) - Number(b.time > a.time))
        .reverse();

    console.log(educationList);

    const [activeId, setActiveId] = useState<string>(
        educationList[0]?._id?.toString() ?? "",
    );

    const activeEducation = educationList.find(
        (e) => e._id.toString() === activeId,
    );

    const listToFormattedString = (lst: string[]): string => {
        if (lst.length === 0) return "";
        if (lst.length === 1) return lst[0];
        if (lst.length === 2) return `${lst[0]} & ${lst[1]}`;
        return `${lst.slice(0, -1).join(", ")}, & ${lst.slice(-1)}`;
    };

    const formatDescription = (education: (typeof educationList)[0]) => {
        console.log(education);

        const scores_line = listToFormattedString(
            [
                ...(education.gpa && education.gpa.actual && education.gpa.total
                    ? [
                          `${education.gpa.actual.toPrecision(3)}/${education.gpa.total.toPrecision(3)} GPA`,
                      ]
                    : []),
                ...(education.tests && Object.keys(education.tests).length > 0
                    ? Object.entries(education.tests).map(
                          ([testName, score]) => `${score} on ${testName}`,
                      )
                    : []),
            ].filter((e) => e),
        );

        const awards_and_activities = [
            ...(education.awards ? education.awards : []),
            ...(education.activities ? education.activities : []),
        ];
        const awards_and_activities_line = awards_and_activities
            ? listToFormattedString(awards_and_activities)
            : null;

        return [
            education.majors && education.majors.length > 0
                ? `Studied ${listToFormattedString(education.majors)}`
                : null,
            scores_line ? scores_line : null,
            awards_and_activities_line ? awards_and_activities_line : null,
        ].filter((e) => e !== null) as string[];
    };

    return (
        <div id="education-div">
            <div id="education-inner-div">
                <h1 className="education-title w-100 text-c1 p-2 mb-4">
                    Education
                </h1>
                <div id="education-container">
                    <div className="experience-content">
                        {activeEducation && (
                            <div className="experience-card glass-background-c2-thick">
                                <div className="experience-header">
                                    <h3 className="experience-degree text-c1">
                                        {activeEducation.degree}
                                    </h3>
                                    <p className="experience-subtitle text-light">
                                        @ {activeEducation.school}
                                    </p>
                                    {/*{activeEducation.majors ? (
                                    <p className="education-school text-light">
                                        Studying{" "}
                                        {listToFormattedString(
                                            activeEducation.majors,
                                        )}
                                    </p>
                                ) : null}*/}
                                    <p className="experience-time text-light">
                                        {activeEducation.formattedTime}
                                    </p>
                                </div>
                                <div className="experience-body">
                                    <ul className="experience-description">
                                        {formatDescription(activeEducation).map(
                                            (desc: string, index: number) => (
                                                <li
                                                    key={index}
                                                    className="text-light align-items-baseline"
                                                >
                                                    <span className="bullet-point text-c1">
                                                        ▸
                                                    </span>
                                                    {desc}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                    <div className="experience-badges">
                                        {activeEducation.coursework.map(
                                            (skill: string, index: number) => (
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
                    <div className="experience-tabs">
                        {educationList.map((education) => (
                            <button
                                key={education._id}
                                className={`experience-tab ${
                                    activeId === education._id.toString()
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    setActiveId(education._id.toString())
                                }
                            >
                                {education.school}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
