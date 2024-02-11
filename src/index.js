import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
        <Intro className="data" />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="photo.jpeg" alt="photo" />;
}
function Intro() {
  return (
    <div>
      <h1>Adam Kopjak</h1>
      <h2>
        Frontend Developer, trying to perfect his React skills and find a Junior
        Developer job soon.
      </h2>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👆" color="red" />
      <Skill skill="HTML & CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="👍" color="yellow" />
      <Skill skill="Python" emoji="🤏" color="pink" />
      <Skill skill="Webflow" emoji="👌" color="blue" />
      <Skill skill="Git and GitHub" emoji="🤝" color="grey" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
