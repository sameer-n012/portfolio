import React, { useState, useEffect, useRef } from "react";
import { getFeaturedProjects } from "../assets/projects";
import "./Projects.css";

const Projects: React.FC = () => {
    const projects = getFeaturedProjects();
    const [currentIdx, setCurrentIdx] = useState(0);
    const carouselInterval = useRef<NodeJS.Timeout | null>(null);

    // Helper for circular index
    const getCircularIdx = (idx: number) => {
        const len = projects.length;
        return ((idx % len) + len) % len;
    };

    const getCircularDistance = (from: number, to: number) => {
        const len = projects.length;
        const directDist = to - from;
        const wrappedDist =
            directDist > 0 ? directDist - len : directDist + len;
        return Math.abs(directDist) < Math.abs(wrappedDist)
            ? directDist
            : wrappedDist;
    };

    const getSurrounding = () => {
        console.log(currentIdx);
        const idxs = Array.from(Array(5).keys())
            .map((k) => k - 2)
            .map((x) => getCircularIdx(currentIdx + x));

        console.log(idxs);
        return idxs.map((idx) => ({
            actualIdx: currentIdx + idx,
            project: projects[idx],
        }));
    };

    useEffect(() => {
        const interval_ms = 4000;
        // autoscroll
        carouselInterval.current = setInterval(() => {
            setCurrentIdx((prev) => getCircularIdx(prev + 1));
        }, interval_ms);
        return () => {
            if (carouselInterval.current)
                clearInterval(carouselInterval.current);
        };
    }, [projects.length]);

    const currIdxInSurrounding = 2;

    return (
        <div id="projects-div">
            <div id="projects-inner-div">
                <div className="projects-title-row">
                    <h1 className="projects-title w-100 text-c1 p-2 mb-4">
                        Projects
                    </h1>
                </div>
                <div className="projects-carousel-container">
                    <div className="projects-carousel">
                        {getSurrounding().map((item, idx) => (
                            <div
                                key={item.project._id}
                                className={`projects-carousel-card glass-background-c2${idx === currIdxInSurrounding ? "-thick" : ""} cursor-clickable ${idx === currIdxInSurrounding ? "active" : ""}`}
                                style={{
                                    // Calculate circular offset
                                    transform: `translateX(${(idx - 2) * 110 - 50}%)`,
                                    zIndex: idx === currentIdx ? 2 : 1,
                                    cursor:
                                        idx === currentIdx
                                            ? "default"
                                            : "pointer",
                                    display:
                                        getCircularDistance(
                                            idx,
                                            currIdxInSurrounding,
                                        ) > 2
                                            ? "none"
                                            : "flex",
                                }}
                                // onClick={() => {
                                //     if (idx !== currIdxInSurrounding)
                                //         setCurrentIdx(item.actualIdx);
                                // }}
                            >
                                <div className="projects-carousel-container">
                                    <div className="projects-carousel-title">
                                        <h3 className="projects-carousel-name text-c1">
                                            {item.project.name}
                                        </h3>
                                    </div>
                                    {/*add project tags here as badges*/}
                                    <div className="projects-carousel-image-container">
                                        <img
                                            src={`/assets/images/${item.project.images[0]}`}
                                            alt={item.project.name}
                                            className="projects-carousel-image"
                                        />
                                    </div>
                                </div>
                                {idx === currIdxInSurrounding ? (
                                    <div className="projects-carousel-overlay">
                                        <div className="projects-carousel-details text-align-center">
                                            <h3 className="projects-carousel-name text-c1">
                                                {item.project.name}
                                            </h3>
                                            <p className="projects-carousel-description text-light">
                                                {item.project.description}
                                            </p>
                                            <div className="projects-carousel-tags">
                                                {item.project.tags.map(
                                                    (tag, tagIdx) => (
                                                        <span
                                                            key={tagIdx}
                                                            className="projects-tag"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                            {item.project.githubRepoName && (
                                                <a
                                                    href={`https://github.com/sameer-n012/${item.project.githubRepoName}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="projects-link text-c1"
                                                >
                                                    View Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
