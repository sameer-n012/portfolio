import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profileDetails from "../assets/profileDetails";
import "./Title.css";

const Title: React.FC = () => {
    const taglineReplaceRef = useRef<HTMLParagraphElement>(null);
    const [displayText, setDisplayText] = useState("build apps.");
    const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState("build apps.".length);

    const socials = [
        { icon: faEnvelope, url: `mailto:${profileDetails.email}` },
        { icon: faLinkedin, url: profileDetails.linkedinURL },
        { icon: faGithub, url: profileDetails.githubURL },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollDownChevron = document.getElementById(
                "scroll-down-chevron",
            );
            const main = document.getElementById("main");

            if (scrollDownChevron && main) {
                const windowTop = window.scrollY;
                const elementTop = main.offsetTop || 0;
                const topDiff = windowTop - elementTop;

                const opacity =
                    (100 - Math.min(Math.max(topDiff / 5, 0), 100)) / 100;
                scrollDownChevron.style.opacity = opacity.toString();
            }
        };

        window.addEventListener("load", handleScroll);
        window.addEventListener("resize", handleScroll);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("load", handleScroll);
            window.removeEventListener("resize", handleScroll);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const taglines = ["build apps", "explore data", "find solutions"];

        const currentText = taglines[currentTaglineIndex] + ".";
        let timeout: NodeJS.Timeout;

        if (isDeleting) {
            if (charIndex > 0) {
                timeout = setTimeout(
                    () => {
                        setCharIndex(charIndex - 1);
                        setDisplayText(currentText.substring(0, charIndex - 1));
                    },
                    50 + Math.random() * 50,
                );
            } else {
                // finished deleting, wait then start typing next
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setCurrentTaglineIndex(
                        (prev) => (prev + 1) % taglines.length,
                    );
                    setCharIndex(0);
                }, 1000);
            }
        } else {
            if (charIndex < currentText.length) {
                timeout = setTimeout(
                    () => {
                        setCharIndex(charIndex + 1);
                        setDisplayText(currentText.substring(0, charIndex + 1));
                    },
                    50 + Math.random() * 100,
                );
            } else {
                // finished typing, wait then start deleting
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 3000);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentTaglineIndex]);

    const scrollTo = (elementId: string) => {
        if (elementId.startsWith("#")) {
            elementId = elementId.substring(1);
        }

        const el = document.getElementById(elementId);
        if (el) {
            console.log("Scrolling to table of contents");
            el.scrollIntoView();
        } else {
            console.log(`Cannot scroll to non-existing element #${elementId}`);
        }
    };

    return (
        <div id="title-div">
            <div
                style={{ marginTop: "8rem" }}
                className="d-flex justify-content-between align-items-center flex-wrap flex-row-reverse title-container"
            >
                <img
                    src={`/assets/images/${profileDetails.profileImgName}`}
                    id="portrait-img"
                    className="rounded-circle border-thick-c1"
                    alt="my portrait"
                />
                <div className="title-content">
                    <h1 className="text-c1 fira-code" id="name">
                        Sameer Narendran
                    </h1>
                    <div className="d-flex flex-row" id="tagline-container">
                        <p className="text-c1 fira-code" id="tagline">
                            I like to&nbsp;
                        </p>
                        <p
                            ref={taglineReplaceRef}
                            id="tagline-replace"
                            className="text-c1 fira-code"
                        >
                            {displayText}
                        </p>
                    </div>
                    <div id="title-socials-div" className="text-light d-flex">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 align-self-center"
                            >
                                <FontAwesomeIcon
                                    className="title-social"
                                    icon={social.icon}
                                />
                            </a>
                        ))}
                        <a
                            href={profileDetails.resumeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="title-social">Resume</p>
                        </a>
                    </div>
                </div>
            </div>
            <img
                id="scroll-down-chevron"
                onClick={() => scrollTo("#skills-div")}
                src="/assets/images/down_chevron.png"
                alt="Scroll down"
            />
        </div>
    );
};

export default Title;
