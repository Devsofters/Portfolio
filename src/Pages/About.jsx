import { useEffect, useState } from "react";
import "../Styles/About.css";

const About = () => {

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const lines = [
            "> whoami",
            "Akash S — Frontend Developer",
            "> cat role.txt",
            "React.js specialist, 2+ yrs building production UI",
            "> status",
            "open to new opportunities",
        ];

        const fullText = lines.join("\n");
        const timers = [];

        for (let i = 0; i <= fullText.length; i++) {
            const timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, i));
            }, i * 30);

            timers.push(timer);
        }

        return () => {
            for (let i = 0; i < timers.length; i++) {
                clearTimeout(timers[i]);
            }
        };
    }, []);

    const visibleLines = displayText.split("\n");

    return (
        <div className="about" id="about">
            <div className="Header">
                <p className="Highlight">{"// ABOUT"}</p>
                <h1>About Me</h1>
            </div>

            <div className="Container">
                <div className="mainsection">
                    <div className="terminalBar">
                        <div className="terminalDots">
                            <span className="dot dotRed"></span>
                            <span className="dot dotYellow"></span>
                            <span className="dot dotGreen"></span>
                        </div>
                        <span className="terminalTitle">akash@portfolio: ~</span>
                    </div>

                    <div className="terminalBody">
                        {visibleLines.map((line, index) => {
                            const isCommand = line.startsWith(">");
                            return (
                                <p
                                    key={index}
                                    className={isCommand ? "terminalCmd" : "terminalOutput"}
                                >
                                    {line}
                                </p>
                            );
                        })}
                    </div>
                </div>

                <div className="aboutContent">
                    <h2>Frontend Developer</h2>

                    <p>
                        I'm Akash, a frontend developer who builds scalable, responsive
                        interfaces with React.js — from component architecture to the
                        last pixel of polish.
                    </p>

                    <p>
                        My day-to-day: turning designs into reusable components, wiring
                        up REST APIs, and squeezing out load-time milliseconds so the
                        experience feels instant everywhere it runs.
                    </p>

                    <div className="container1">
                        <div className="bodySection">
                            <span className="bodyKey">2+</span>
                            <span className="bodyValue">years shipping React in production</span>
                        </div>
                        <div className="bodySection">
                            <span className="bodyKey">20+</span>
                            <span className="bodyValue">reusable components architected</span>
                        </div>
                        <div className="bodySection">
                            <span className="bodyKey">100%</span>
                            <span className="bodyValue">cross-device compatibility achieved</span>
                        </div>
                    </div>

                    <div className="cardchip">
                        <span className="cardChipDiv">React.js</span>
                        <span className="cardChipDiv">JavaScript ES6+</span>
                        <span className="cardChipDiv">Tailwind CSS</span>
                        <span className="cardChipDiv">Node.js</span>
                        <span className="cardChipDiv">REST APIs</span>
                        <span className="cardChipDiv">Git</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;