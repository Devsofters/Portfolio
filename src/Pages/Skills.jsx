import { useState } from "react";
import "../Styles/Skills.css";

const skillsData = [
  {
    Name: "frontend",
    File: "frontend.json",
    Color: "#38BDF8",
    Skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    Name: "backend",
    File: "backend.json",
    Color: "#34D399",
    Skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    Name: "database",
    File: "database.json",
    Color: "#C084FC",
    Skills: ["MySQL"],
  },
  {
    Name: "tools",
    File: "tools.json",
    Color: "#FBBF24",
    Skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  const data = skillsData[active];

  return (
    <div className="Skills">
      <p className="skillsEyebrow">{"// tech-stack"}</p>
      <h1>Skills</h1>

      <div className="Editor">
        <div className="EditorTabs">
          {skillsData.map((item, index) => (
            <button
              key={item.Name}
              className={`EditorTab ${active === index ? "isActive" : ""}`}
              style={active === index ? { borderColor: item.Color, Color: "#E2E8F0" }: {}}
              onClick={() => setActive(index)}
            >
              <span className="TabDots"  style={{ background: item.Color }}/>
              {item.File}
            </button>
          ))}
        </div>

        <div className="EditorCont">
          <div className="CodeLines">
            <span className="lineNumber">1</span>
            <span className="lineText brace">{"{"}</span>
          </div>

          <div className="CodeLines">
            <span className="lineNumber">2</span>
            <span className="lineText key">{`  "${data.Name}": [`}</span>
          </div>

          {data.Skills.map((val, index) => (
            <div className="CodeLines" key={val}>
              <span className="lineNumber">{index + 3}</span>
              <span className="lineText value">
                {`"${val}"${
                  index === data.Skills.length - 1 ? "" : ","
                }`}
              </span>
            </div>
          ))}

          <div className="CodeLines">
            <span className="lineNumber">{data.Skills.length + 3}</span>
            <span className="lineText key">  ]</span>
          </div>

          <div className="CodeLines">
            <span className="lineNumber">{data.Skills.length + 4}</span>
            <span className="lineText brace">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;