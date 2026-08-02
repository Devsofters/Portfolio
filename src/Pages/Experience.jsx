import { useRef } from "react";
import "../Styles/Experience.css";

const experiences = [
  {
    hash: "a3f9c2d",
    branch: "nanosoft-solutions",
    role: "Frontend Developer",
    duration: "June 2024 — Present",
    points: [
      "Architected scalable React.js apps, improving code reusability by 40%",
      "Built 20+ reusable components, cutting new feature dev time by 30%",
      "Integrated REST APIs with Axios and robust error handling",
      "Optimized performance via code splitting and lazy loading, -25% load time",
    ],
  },
  {
    hash: "7e1b48f",
    branch: "emed-hub-internship",
    role: "Frontend Developer Intern",
    duration: "Feb 2024 — May 2024",
    points: [
      "Built responsive interfaces with a mobile-first approach",
      "Implemented filtering, search, sorting, and export features",
      "Integrated REST APIs for dynamic data rendering",
      "Improved accessibility and usability based on QA feedback",
    ],
  },
];

const Experience = () => {
  const refs = useRef([]);

  return (
    <div className="Experience">
      <p className="Experience-Head">$ git log --oneline --graph</p>
      <h1>Experience</h1>

      <div className="CommitLog">
        {experiences.map((exp, index) => (
          <div
            className="Commit"
            key={exp.hash}
            ref={(el) => (refs.current[index] = el)}
          >
            <div className="CommitLine">
              <span className="CommitDot"></span>
              {index !== experiences.length - 1 && (
                <span className="commitConnector"></span>
              )}
            </div>

            <div className="commitCard">
              <div className="commitTop">
                <span className="commitHash">{exp.hash}</span>
                <span className="commitBranch">{exp.branch}</span>
              </div>

              <h2 className="commitMessage">{exp.role}</h2>
              <p className="commitDuration">{exp.duration}</p>

              <ul className="commitBody">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;