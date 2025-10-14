import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profileDetails from "../assets/profileDetails";
import "./Title.css";

const Title: React.FC = () => {
    const taglineReplaceRef = useRef<HTMLParagraphElement>(null);

    const socials = [
        { icon: faEnvelope, url: `mailto:${profileDetails.email}` },
        { icon: faLinkedin, url: profileDetails.linkedinURL },
        { icon: faGithub, url: profileDetails.githubURL },
    ];

    const taglines = ["build apps.", "explore data.", "find solutions."];

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
        const updateTagline = async () => {
            let c = 1;
            const taglineEl = taglineReplaceRef.current;

            if (!taglineEl) return;

            const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

            while (true) {
                let curText = taglineEl.innerHTML;

                while (curText !== "") {
                    await sleep(Math.floor(Math.random() * 50 + 50));
                    curText = curText.substring(0, curText.length - 1);
                    taglineEl.innerHTML = curText;
                }

                await sleep(1000);

                for (let i = 0; i < taglines[c].length; i++) {
                    await sleep(Math.floor(Math.random() * 100 + 50));
                    curText += taglines[c][i];
                    taglineEl.innerHTML = curText;
                }

                c = (c + 1) % taglines.length;
                await sleep(3000);
            }
        };

        updateTagline();
    }, [taglines]);

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
                style={{ marginTop: "10rem" }}
                className="d-flex justify-content-between align-items-center flex-wrap flex-row-reverse"
            >
                <img
                    src={`/assets/images/${profileDetails.profileImgName}`}
                    id="portrait-img"
                    className="rounded-circle border-thick-c1"
                    alt="my portrait"
                />
                <div>
                    <h1 className="text-c1 fira-code" id="name">
                        Sameer Narendran
                    </h1>
                    <div className="d-flex flex-row">
                        <p className="text-c1 fira-code" id="tagline">
                            I like to&nbsp;
                        </p>
                        <p
                            ref={taglineReplaceRef}
                            id="tagline-replace"
                            className="text-c1 fira-code"
                        >
                            {taglines[0]}
                        </p>
                    </div>
                    <div id="title-socials-div" className="text-light d-flex">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4"
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
                onClick={() => scrollTo("#toc-div")}
                src="/assets/images/down_chevron.png"
                alt="Scroll down"
            />
        </div>
    );
};

export default Title;
