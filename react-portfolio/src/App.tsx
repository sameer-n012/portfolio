import React, { useEffect } from "react";
import "./App.css";
import "./common.css";
import Title from "./components/Title";
import Toc from "./components/Toc";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const bgStatic = document.getElementById("bg-static");
            const main = document.getElementById("main");
            const bgDynamic = document.getElementById("bg-dynamic");

            if (bgStatic && main && bgDynamic) {
                const mainHeight = main.offsetHeight || 0;
                const windowTop = window.scrollY;
                const elementTop = bgStatic.offsetTop || 0;
                const topDiff = sigmoid(
                    windowTop - elementTop,
                    mainHeight / 10,
                );

                const leftPosition = Math.max(70 - (70 - 0) * topDiff, 0);
                const topPosition = Math.min(62 + (100 - 62) * topDiff, 100);

                bgDynamic.style.backgroundPositionX = `${leftPosition}%`;
                bgDynamic.style.backgroundPositionY = `${topPosition}%`;
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

    const sigmoid = (x: number, k: number): number => {
        return 2 * (1.0 / (1.0 + Math.exp(-x / k)) - 0.5);
    };

    return (
        <div id="bg-static">
            <div id="bg-dynamic"></div>
            <div id="main">
                <Title />
                <Toc />
                <Skills />
                <Experience />
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

export default App;
