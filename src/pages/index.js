import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import {SocialMedia} from "../components/SocialMedia";
import {Title} from "../components/Title";

import {papers, projects} from "../helpers/projects";

import "./styles.scss";

// markup
function IndexPage() {
  return (
    <>
      <Navbar />
      <main className="main columns">
        <div className="column side">
          <img
            className="photo"
            src="/static/carlos-navarrete-lizama-photo.jpg" alt="" />
          <div>
            <p>Let&apos;s have a first call!</p>
            <p>
              Send an email to <a href="mailto:carlos@navarretelizama.com">carlos@navarretelizama.com</a>
            </p></div>

          <SocialMedia
            data={[
              {url: "https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en", name: "Google Scholar"},
              {url: "https://github.com/cnavarreteliz", name: "Github"},
              {url: "https://twitter.com/cnavarreteliz", name: "Twitter"}
            ]}
          />

        </div>
        <div className="column">
          <Title label="About me" permalink="about" />
          <p>
            <strong>Hola!</strong> <b>My name is Carlos Navarrete, Ph.D.</b> I am affiliated with the{" "}
            <a href="https://fi.udec.cl/">School of Engineering</a> at the Universidad of Concepción. 
          </p>

          <p>Prior joining to Concepción, I was a Visiting Student at the Department of Human Geography and Spatial Planning at Utrecht University, and at the Unidad de Data Science at the Universidad de Concepción.
          I completed my doctoral degree at the Université de Toulouse and my undergraduate studies at the Universidad de Concepción.
          </p>

          <p>
          My main research sets at the intersection of computer and social science, aiming to unravel the dynamics of agreement, citizen division, and polarization in society.
          </p>

          <p>Part of my work has appeared in journals like <a href="https://www.nature.com/articles/s41562-023-01755-x" target="_blank" rel="noreferrer">Nature Human Behaviour</a> and <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950?via%3Dihub" target="_blank" rel="noreferrer">Research Policy</a>, <a href="https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en" target="_blank" rel="noreferrer">among others</a>. From 2017 to 2020, I worked as a web developer.</p>

          <Title label="Education" permalink="education" />
          <ul>
            <li>B.Sc., Universidad de Concepción (2014)</li>
            <li>Eng., Universidad de Concepción (2016)</li>
            <li>Ph.D., Université de Toulouse (2023)</li>
          </ul>
          <Title label="Publications" permalink="publications" />
          <p>The full list of publications can be found in{" "}
            <a href="https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>.</p>
          
          <Title label="Courses" permalink="courses" />
          <ul>
            <li>Logistics (Spring, 2023)</li>
            <li>Data Visualization (Fall, 2024)</li>
            <li>Information Technologies (Fall, 2024)</li>
            <li>Innovation (Fall, 2024)</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default IndexPage;
