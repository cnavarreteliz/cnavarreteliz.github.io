import React from "react";
import Project from "../components/Project";
import {SocialMedia} from "../components/SocialMedia";
import {Title} from "../components/Title";

import {papers, projects} from "../helpers/projects";

import "./styles.scss";

// markup
function IndexPage() {
  return (
    <>
      <title>Home Page</title>
      <main className="main columns">
        <div className="column side">
          <h1 className="logo">Carlos Navarrete</h1>
          <img
            className="photo"
            src="/static/carlos-navarrete_400x400.jpeg" alt="" />
          <div><span>
            Are you interested in contacting me? Send an email to <a href="mailto:cnavarreteliz@gmail.com">cnavarreteliz@gmail.com</a>
          </span></div>

          <SocialMedia
            data={[
              {url: "https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en", name: "Google Scholar"},
              {url: "https://github.com/cnavarreteliz", name: "Github"},
              {url: "https://twitter.com/cnavarreteliz", name: "Twitter"}
            ]}
          />

        </div>
        <div className="column">
          <Title label="About me" />
          <p>
            My name is Carlos Navarrete. I am a Computer Science Ph.D. Candidate at the{" "}
            <a href="https://univ-toulouse.fr">Université de Toulouse</a> (France, 🇫🇷). I am affiliated to the{" "}
            <a href="https://centerforcollectivelearning.org">Center for Collective Learning</a> (CCL) and the{" "}
            <a href="https://irit.fr">Institut de Recherche en Informatique de Toulouse</a> (IRIT).
          </p>

          <p>
            I study how digital tools can contribute to global governance. For this, I apply some social choice theory methods in pairwise comparison datasets to understand agreements and disagreements of population.
          </p>

          <p>I am a pasionate researcher about society behaviour.</p>

          <Title label="Projects" />
          
          {projects.map(d => <Project
            {...d}
          />)}

          <Title label="Research" />

          {papers.map(d => <Project
            {...d}
          />)}
        </div>
      </main>
    </>
  );
}

export default IndexPage;
