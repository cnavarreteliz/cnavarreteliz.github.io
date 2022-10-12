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
            <strong>Hola!</strong> My name is Carlos Navarrete. I am an enthusiastic and extrovert Chilean Industrial Engineer doing my Ph.D. studies in Computer Science at the{" "}
            <a href="https://univ-toulouse.fr">Université de Toulouse</a> (France, 🇫🇷). I am affiliated to the{" "}
            <a href="https://centerforcollectivelearning.org">Center for Collective Learning</a> (CCL) and the{" "}
            <a href="https://irit.fr">Institut de Recherche en Informatique de Toulouse</a> (IRIT).
          </p>

          <p>
            My work is focused on understanding how digital participation tools can contribute to global governance. For this, I position myself in the intersection of computational social choice and human-computer interaction to provide empirical evidence about online participation.
          </p>

          <p>
          I have been spending part of my research doing a comprehensive analysis of agreements and divisiveness and how divisive issues can help us understand political action in contexts of massive mobilizations or presidential elections. Currently, I'm working in how geographical polarization correlates with poverty and turnout in elections. 
          </p>

          <p>
          I hope to contribute with my grain of sand so that my parents, relatives, and the population can have access to more fair governance through the benefits that come from computational advancements.
          </p>

          {/* <Title label="Research" />

          {papers.map(d => <Project
            {...d}
          />)} */}
        </div>
      </main>
    </>
  );
}

export default IndexPage;
