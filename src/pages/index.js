import React from "react";
import Navbar from "../components/Navbar";
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
              Send an email to <a href="mailto:cnavarretel@udec.cl">cnavarretel@udec.cl</a>
            </p></div>

          <SocialMedia
            data={[
              {url: "https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en", name: "Google Scholar"},
              {url: "https://github.com/cnavarreteliz", name: "Github"},
              {url: "https://twitter.com/cnavarreteliz", name: "Twitter"}
            ]}
          />

        </div>
        <div className="column">
          <Title label="About me" permalink="about" />
          <p>
            Carlos Navarrete is a Chilean engineer, Ph.D. in computer science, with over eight years of experience developing data-driven platforms worldwide and conducting interdisciplinary research. Carlos serves as an Assistant Professor at the School of Engineering at the Universidad de Concepción, and he is affiliated with the Millennium Nucleus for the Study of Politics, Public Opinion and Media, Chile.
          </p>

          <p>
          Carlos is one of the leading experts on Data Science and Generative Artificial Intelligence in Chile. He has extensive experience in both leading and collaborating on some of the country&apos;s most widely used data-driven platforms, including Elecciones en La Tercera (<a href="https://data.latercera.com">https://data.latercera.com</a>), DataChile (<a href="https://datachile.io">https://datachile.io</a>), the AI World (<a href="https://aiworld.eu">https://aiworld.eu</a>), and StreamData (<a href="https://streamdata.cl">https://streamdata.cl</a>).
          </p>

          <p>Prior joining to Concepción, he was a Doctoral Visiting Student at the Department of Human Geography and Spatial Planning at Utrecht University, and at the Centro de Datos e Inteligencia Artificial (CDIA) at the Universidad de Concepción.
          Carlos completed his doctoral degree at the Université de Toulouse and his undergraduate studies at the Universidad de Concepción.
          </p>

          <p>
          His main research sets at the intersection of computer and social science, aiming to unravel the dynamics of society behaviour and polarization. Part of his work has appeared in top journals like <a href="https://www.nature.com/articles/s41562-023-01755-x" target="_blank" rel="noreferrer">Nature Human Behaviour</a> and <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950?via%3Dihub" target="_blank" rel="noreferrer">Research Policy</a>, <a href="https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en" target="_blank" rel="noreferrer">among others</a>.</p>
          
          {/* <p>As part of Carlos&apos;s personal motivations, I am committed to the idea that technology can be used for social good. Currently, I am exploring how Large Language Models can help us in Social Sciences and how digital democracy systems can effectively identify the preferences and concerns of the population.</p> */}
          <Title label="Education" permalink="education" />
          <ul>
            <li>B.Sc., Universidad de Concepción (2014)</li>
            <li>Eng., Universidad de Concepción (2016)</li>
            <li>Doctorate., Université de Toulouse (2023)</li>
          </ul>
          <Title label="Publications" permalink="publications" />
          <p>The full list of publications can be found in{" "}
            <a href="https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>.</p>
          
          {/* <Title label="Courses" permalink="courses" />
          <ul>
            <li>Logistics (Spring, 2023)</li>
            <li>Data Visualization (Fall, 2024)</li>
            <li>Information Technologies (Fall, 2024)</li>
          </ul> */}
        </div>
      </main>
    </>
  );
}

export default IndexPage;
