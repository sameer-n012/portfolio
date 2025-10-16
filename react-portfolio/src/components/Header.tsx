import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(
        window.innerWidth >= 1200,
    );

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1200);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Don't render anything on smaller screens
    if (!isLargeScreen) {
        return null;
    }
    const sections = [
        { name: "Skills", divID: "skills-div" },
        { name: "Education", divID: "education-div" },
        { name: "Experience", divID: "experience-div" },
        { name: "Projects", divID: "projects-div" },
    ];

    const scrollTo = (elementId: string) => {
        if (elementId.startsWith("#")) {
            elementId = elementId.substring(1);
        }

        const el = document.getElementById(elementId);
        if (el) {
            console.log("Scrolling to section");
            const headerHeight = 80;
            const elementPosition = el.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        } else {
            console.log(`Cannot scroll to non-existing element #${elementId}`);
        }
    };

    return (
        <header
            id="header"
            className="fixed-top glass-background border-bottom-c1-translucent"
        >
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid px-4">
                    <div className="navbar-nav ms-auto">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className="nav-link header-nav-link fira-code text-c1 cursor-clickable pe-2 ps-2 me-3 ms-3 no-border no-background"
                                onClick={() => scrollTo(section.divID)}
                            >
                                {section.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
