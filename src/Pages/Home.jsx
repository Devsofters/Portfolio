import { useState, useEffect } from "react";
import "../Styles/Home.css";

const SUMMARY = "Building fast, accessible interfaces with React — from reusable component systems to REST APIs that just work.";

const SYMBOLS = ["</>", "{ }", "=>", "( )", "#", "*", "&&", "[]", "||", "?"];

const Home = () => {
    const [text, setText] = useState("");
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const list = [];

        for (let i = 0; i < 16; i++) {
            list.push({
                id: i,
                symbol: SYMBOLS[i % SYMBOLS.length],
                left: Math.random() * 100,
                size: Math.random() * 15 + 15,
                delay: Math.random() * 10,
                duration: Math.random() * 10 + 10,
            });
        }

        setParticles(list);
    }, []);

    useEffect(() => {
        let index = 0;

        const timer = setInterval(() => {
            setText(SUMMARY.slice(0, index));
            index++;

            if (index > SUMMARY.length) {
                clearInterval(timer);
            }
        }, 25);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="Homepage">
            <div className="BackGround">
                <div className="RadiantDiv RadiantDivOne"></div>
                <div className="RadiantDiv RadiantDivTwo"></div>

                {particles.map((val) => (
                    <span
                        key={val.id}
                        className="ParentDiv"
                        style={{
                            left: `${val.left}%`,
                            fontSize: `${val.size}px`,
                            animationDelay: `${val.delay}s`,
                            animationDuration: `${val.duration}s`,
                        }}
                    >
                        {val.symbol}
                    </span>
                ))}
            </div>

            <div className="EditorDiv">
                <div className="EditorDivHeader">
                    <div className="EditorDivTab">
                        <span className="tabIcon">JS</span> Home.jsx
                    </div>
                </div>

                <div className="EditorDivBody">
                    <div className="EditorCodeLine">
                        <span className="EditorLineNum">1</span>
                        <span className="kw">const</span>{" "}
                        <span className="fn">developer</span> = {"{"}
                    </div>

                    <div className="EditorCodeLine EditorLineIndent">
                        <span className="EditorLineNum">2</span>
                        <span className="propertyKey">name</span>:{" "}
                        <span className="propertyValue">"Akash S"</span>,
                    </div>

                    <div className="EditorCodeLine EditorLineIndent">
                        <span className="EditorLineNum">3</span>
                        <span className="propertyKey">role</span>:{" "}
                        <span className="propertyValue">"Frontend Developer"</span>,
                    </div>

                    <div className="EditorCodeLine EditorLineIndent">
                        <span className="EditorLineNum">4</span>
                        <span className="propertyKey">experience</span>:{" "}
                        <span className="propertyValue">"2+ years"</span>,
                    </div>

                    <div className="EditorCodeLine EditorLineIndent">
                        <span className="EditorLineNum">5</span>
                        <span className="propertyKey">stack</span>: [
                        <span className="propertyValue">"React"</span>,{" "}
                        <span className="propertyValue">"JavaScript"</span>,{" "}
                        <span className="propertyValue">"Node.js"</span>,{" "}
                        <span className="propertyValue">"Express"</span>,{" "}
                        <span className="propertyValue">"MySQL"</span>],
                    </div>

                    <div className="EditorCodeLine EditorLineIndent">
                        <span className="EditorLineNum">6</span>
                        <span className="propertyKey">summary</span>:{" "}
                        <span className="cmt">
                            "{text}
                            <span className="cursor">|</span>"
                        </span>
                    </div>

                    <div className="EditorCodeLine">
                        <span className="EditorLineNum">7</span>
                        {"};"}
                    </div>

                    <div className="ctaRow">
                        <button className="resumeBtn"
                        onClick={()=>{
                            const link = document.createElement("a");
                            link.href = "/Resume.pdf"
                            link.download = "Resume.pdf"
                            link.click()
                        }}
                        >
                            &gt; Download Resume
                        </button>

                        <button className="contactBtn" onClick={() =>document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}>
                            &gt; Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;