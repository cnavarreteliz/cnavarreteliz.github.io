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
            src="/static/carlos-navarrete_400x400.jpeg" alt="" />
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
          <p>
            <strong>Hola!</strong> My name is Carlos Navarrete. I am an enthusiastic and outgoing Chilean Industrial Engineer doing my Ph.D. studies in Computer Science at the{" "}
            <a href="https://univ-toulouse.fr">Université de Toulouse</a> (France, 🇫🇷). I am affiliated to the{" "}
            <a href="https://irit.fr">Institut de Recherche en Informatique de Toulouse</a> (IRIT). I conduct research at the intersection of computer and political science, aiming to understand the dynamics of agreements, disagreements, and polarization in society through computational techniques.
          </p>

          <p>Prior Toulouse, I worked three years as a software developer and during my bachelor, I conducted research on Economic Geography.</p>

          <p>
          I hope to contribute with my grain of sand so that my parents, relatives, and the population can have access to more fair governance through the benefits that come from computational advancements.
          </p>

          <Title label="Recent work" />

          {papers.map(d => <Project
            {...d}
          />)}
        </div>
      </main>
    </>
  );
}

export default IndexPage;
