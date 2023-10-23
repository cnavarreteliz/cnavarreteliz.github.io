import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { SocialMedia } from "../components/SocialMedia";
import { Title } from "../components/Title";

import { papers, projects } from "../helpers/projects";

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
              { url: "https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en", name: "Google Scholar" },
              { url: "https://github.com/cnavarreteliz", name: "Github" },
              { url: "https://twitter.com/cnavarreteliz", name: "Twitter" }
            ]}
          />

        </div>
        <div className="column">
          <Title label="About me" />
          <p>
            <strong>Hola!</strong> My name is Carlos Navarrete. I am a Ph.D. candidate in Computer Science at the{" "}
            <a href="https://univ-toulouse.fr">Université de Toulouse</a>. Today, I am affiliated with the{" "}
            <a href="https://fi.udec.cl/">School of Engineering</a> at the Universidad of Concepción. I conduct research at the intersection of computer and social science, aiming to unravel the dynamics of agreement, citizen division, and polarization in society.
          </p>

          <p>My Ph.D. research was carried out at the <a href="https://irit.fr">Institut de Recherche en Informatique de Toulouse</a> (IRIT) at the Université de Toulouse, at the <a href="https://www.uu.nl/en/research/human-geography-and-planning">Department of Human Geography and Spatial Planning</a> at Utrecht University, and at the <a href="https://uds.udec.cl">Unidad de Data Science</a> at the Universidad de Concepción.</p>

          <p>
            I have participated as a web developer and researcher in several digital projects around the world, such as <a href="https://chilecracia.org">Chilecracia</a>, <a href="https://datachile.io">DataChile</a>, and <a href="https://monprogramme2022.org">Mon Programme 2022</a>, to name a few.
          </p>

          <p>
            Today, my research interests encompass the use and potential applications of Large Language Models (LLMs) and the study of Election Polarization and Competitiveness.
          </p>

          {/* <Title label="Recent work" /> */}

          {/* {papers.map(d => <Project
            {...d}
          />)} */}

          {/* <Title label="Digital platforms" />

          {projects.map(d => <Project
            {...d}
          />)} */}
        </div>
      </main>
    </>
  );
}

export default IndexPage;
