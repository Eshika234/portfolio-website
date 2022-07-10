import React from "react";
import ProjectBox from "./ProjectBox/ProjectBox";
import "./Projects.css";

function Projects() {
  const projectsData = [
    {
      image: "https://wallpaperaccess.com/full/1376490.jpg",
      title: "Crypto Tracker",
      Sentences: [
       "Using front-end technologies I made a crypto tracker that basically tracks the current price of bitcoins and other crypto coins",        "I used crypto exchange rate Api that fetch the current prices of crypto",
      ],
      link: "",
    },
    {
      image: "https://wallpaperaccess.com/full/1376490.jpg",
      title: "Todo App",
      sentences: [
        "It is made using basic Html, css and javascript where we can edit , delete the items"
      ],
      link:"",
    },
    
  ];

  return (
    <div id="projects">
      <p className="projects_title">Projects</p>
      <div className="projects_box_container">
        {projectsData.map((value, key) => (
          <ProjectBox
            title={value.title}
            image={value.image}
            sentences={value.sentences}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
