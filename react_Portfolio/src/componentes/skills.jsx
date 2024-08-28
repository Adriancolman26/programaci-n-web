import React from "react";

const arrayLogos = [
  "python.png",
  "c++.png",
  "javaScript.png",
  "sql.png",
  "html.png",
];

const Skills = () => (
  <section id="skills" className="skills">
    <h2 className="center">Habilidades</h2>
    <ul className="rompeLista">
      {arrayLogos.map((element, index) => (
        <li key={index} className="image">
          <img className="fotoskills" src={element} alt="" />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
