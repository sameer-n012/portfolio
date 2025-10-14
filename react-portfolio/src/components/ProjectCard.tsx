import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import profileDetails from "../assets/profileDetails";
import "./ProjectCard.css";

interface Project {
    _id: number;
    name: string;
    description: string;
    githubRepoName: string;
    images: string[];
    tags: string[];
    featured: boolean;
}

interface ProjectCardProps {
    project: Project;
    onTagClick: (tag: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onTagClick }) => {
    return (
        <div className="card project-card">
            <img
                className="card-img-top project-image cursor-clickable"
                src={`/assets/images/${project.images[0]}`}
                alt="project thumbnail"
            />
            <div className="card-body p-0">
                <h5 className="card-title p-2 m-0 pb-1 text-truncate cursor-clickable text-light">
                    {project.name}
                </h5>
                <div className="card-text p-2 m-0 pt-1 project-tag-div text-truncate">
                    {project.tags.map((tag, index) => (
                        <small
                            key={index}
                            className="project-tag m-1 p-1 cursor-clickable"
                            onClick={() => onTagClick(tag)}
                        >
                            {tag}
                        </small>
                    ))}
                </div>
                <div className="card-footer m-0 p-2 d-flex justify-content-between align-items-center">
                    <a
                        href={`${profileDetails.githubURL}/${project.githubRepoName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`small cursor-clickable project-footer-text m-0 fira-code ${
                            !project.githubRepoName ? "link-disabled" : ""
                        }`}
                    >
                        See Source Code <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
