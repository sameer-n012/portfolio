import React, { useEffect, useState } from "react";
import "./App.css";
import "./common.css";
import Title from "./components/Title";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
    const [screenSize, screenWidth] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    // useEffect(() => {
    //     const handleResize = () => {};

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            screenWidth([window.innerWidth, window.innerHeight]);

            const bgStatic = document.getElementById("bg-static");
            const main = document.getElementById("main");
            const bgDynamic = document.getElementById("bg-dynamic");

            if (bgStatic && main && bgDynamic) {
                const mainHeight = main.offsetHeight || 0;
                // const mainWidth = main.offsetWidth || 0;
                const windowTop = window.scrollY;
                const elementTop = bgStatic.offsetTop || 0;

                // Scale the background movement based on screen width
                // Use 1600, 900 px as the baseline (current working size)
                const widthScale = Math.min(screenSize[0] / 1600, 1);
                const heightScale = Math.min(screenSize[1] / 900, 1);

                const mv_sigmoid = (diff: number, x_scale: number): number => {
                    return sigmoid(diff, x_scale, 2, -0.5);
                };

                const topDiff = mv_sigmoid(
                    windowTop - elementTop,
                    mainHeight / 10,
                );

                const leftDiff = mv_sigmoid(
                    windowTop - elementTop,
                    mainHeight / 10,
                );

                // Adjust movement range based on screen size
                // const maxLeftMovement = 70 * screenWidthScale;
                // const leftPosition = Math.max(
                //     maxLeftMovement - (maxLeftMovement - 0) * topDiff,
                //     0,
                // );

                // const minTopPosition = 62;
                // const maxTopPosition = 100;
                // const topMovementRange =
                //     (maxTopPosition - minTopPosition) * screenWidthScale;
                // const topPosition = Math.min(
                //     minTopPosition + topMovementRange * topDiff,
                //     maxTopPosition,
                // );

                const leftPosition = Math.max(
                    70 - (70 - 0) * topDiff * widthScale,
                    0,
                );
                const topPosition = Math.min(
                    62 + (100 - 62) * leftDiff * heightScale,
                    100,
                );

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
    }, [screenSize]);

    const sigmoid = (
        x: number,
        x_scale: number,
        scale: number,
        shift: number,
    ): number => {
        return scale * (1.0 / (1.0 + Math.exp(-x / x_scale)) + shift);
    };

    return (
        <div id="bg-static">
            <div id="bg-dynamic"></div>
            <div id="main">
                <Header />
                <Title />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

export default App;
