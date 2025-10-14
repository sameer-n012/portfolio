import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { getFeaturedProjects, getFilteredProjects } from "../assets/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects: React.FC = () => {
    const [projList, setProjList] = useState(getFeaturedProjects());
    const [searchVal, setSearchVal] = useState("");

    const tagClick = (tag: string) => {
        setProjList(getFilteredProjects([tag]));
        setSearchVal(tag);
    };

    const search = (value: string) => {
        setProjList(getFilteredProjects(value.replace(",", " ").split(" ")));
    };

    const searchKeyPress = (
        e: React.KeyboardEvent<HTMLInputElement>,
        data: string,
    ) => {
        if (e.key === "Enter") {
            console.log("detected enter press");
            search(data);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    };

    return (
        <div id="projects-div">
            <div id="projects-inner-div">
                <h1 className="w-100 text-c1 p-2">Projects</h1>
                <div className="w-100 d-flex justify-content-center flex-column">
                    <div
                        id="projects-search-div"
                        className="d-flex justify-content-center p-2 pt-3"
                    >
                        <input
                            className="search-bar me-1 w-50"
                            id="projects-search-bar"
                            placeholder="Search"
                            onKeyDown={(e) => searchKeyPress(e, searchVal)}
                            value={searchVal}
                            onChange={handleSearchChange}
                        />
                        <button
                            id="projects-search-btn"
                            type="submit"
                            className="ms-1 background-c1"
                            onClick={() => search(searchVal)}
                        >
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                    </div>
                    <div className="project-cards p-2 pt-4 d-flex w-100 justify-content-evenly flex-wrap">
                        {projList.map((project) => (
                            <div key={project._id} className="p-3">
                                <ProjectCard
                                    project={project}
                                    onTagClick={tagClick}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
