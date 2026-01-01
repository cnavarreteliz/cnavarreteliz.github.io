import React from "react";
import Navbar from "../components/Navbar";
import {Title} from "../components/Title";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    pageTitle: "Research",
    description: "My research focuses on addressing big problems that help us better understand and solve real-life issues in Chile, including computational social science, polarization, economic geography, and the application of artificial intelligence to complex socio-economic systems.",
    viewGoogleScholar: "View full profile on",
    publications: "Publications"
  },
  es: {
    pageTitle: "Investigación",
    description: "Mi investigación se enfoca en abordar grandes problemas que nos ayudan a comprender y resolver mejor los desafíos de la vida real en Chile, incluyendo ciencia social computacional, polarización, geografía económica y la aplicación de inteligencia artificial a sistemas socioeconómicos complejos.",
    viewGoogleScholar: "Ver perfil completo en",
    publications: "Publicaciones"
  }
};

// Publicaciones organizadas por año (ordenadas por fecha de publicación)
const publications = [
  {
    year: 2025,
    papers: [
      {
        title: "'It's the economy, stupid': mapping electoral divisiveness in Chile from 1989 to 2021",
        authors: "A Bustamante, M Parada-Contzen, C Navarrete",
        journal: "Regional Studies, Regional Science",
        volume: "12 (1)",
        pages: "554-573",
        year: 2025,
        citations: 0,
        url: "https://www.tandfonline.com/doi/full/10.1080/21681376.2025.2518158"
      },
      {
        title: "Surging Scientific Capabilities in Cities Worldwide after Significant Earthquakes",
        authors: "Y Liang, C Navarrete, J Wang",
        journal: "Global Environmental Change",
        year: 2025,
        citations: 0,
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5211336"
      }
    ]
  },
  {
    year: 2024,
    papers: [
      {
        title: "On the measurement of Electoral Divisiveness",
        authors: "C Navarrete, M Macedo, V Stojkoski, M Parada-Contzen, CA Martínez",
        journal: "arXiv preprint arXiv:2308.10862",
        year: 2024,
        citations: 1,
        url: "https://arxiv.org/abs/2308.10862"
      }
    ]
  },
  {
    year: 2023,
    papers: [
      {
        title: "Understanding political divisiveness using online participation data from the 2022 French and Brazilian presidential elections",
        authors: "C Navarrete, M Macedo, R Colley, J Zhang, N Ferrada, ME Mello, R Lira, et al.",
        journal: "Nature Human Behaviour",
        year: 2023,
        citations: 18,
        url: "https://www.nature.com/articles/s41562-023-01755-x"
      },
      {
        title: "Measuring and controlling divisiveness in rank aggregation",
        authors: "R Colley, U Grandi, C Hidalgo, M Macedo, C Navarrete",
        journal: "arXiv preprint arXiv:2306.08511",
        year: 2023,
        citations: 10,
        url: "https://arxiv.org/abs/2306.08511"
      },
      {
        title: "Unraveling Citizen Division and Polarization during Elections",
        authors: "CCN Lizama",
        journal: "Université Paul Sabatier-Toulouse III (PhD Thesis)",
        year: 2023,
        citations: 0,
        url: "https://theses.hal.science/tel-04424764"
      }
    ]
  },
  {
    year: 2022,
    papers: [
      {
        title: "The scientific and technological cross-space: Is technological diversification driven by scientific endogenous capacity?",
        authors: "P Catalán, C Navarrete, F Figueroa",
        journal: "Research Policy",
        volume: "51 (8)",
        pages: "104016",
        year: 2022,
        citations: 66,
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950"
      },
      {
        title: "Patents as indicators of the technological position of countries on a global level?",
        authors: "L Mora-Apablaza, C Navarrete",
        journal: "Scientometrics",
        volume: "127 (3)",
        pages: "1233-1246",
        year: 2022,
        citations: 8,
        url: "https://link.springer.com/article/10.1007/s11192-022-04268-y"
      }
    ]
  }
];

function ResearchPage() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            {t.pageTitle}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </div>

        {/* Publications by Year */}
        <div className="space-y-16">
          {publications.map((yearData) => (
            <section key={yearData.year} className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                {yearData.year}
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                {yearData.papers.map((paper, index) => (
                  <article
                    key={index}
                    className="group"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-tight">
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-700 transition-colors"
                      >
                        {paper.title}
                      </a>
                    </h3>
                    
                    <p className="text-base text-slate-600 mb-3 leading-relaxed">
                      {paper.authors}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-x-2 text-sm text-slate-500">
                      <span className="font-medium italic text-slate-800">{paper.journal}</span>
                      {paper.volume && <span>{paper.volume}</span>}
                      {paper.pages && <span>{paper.pages}</span>}
                      <span className="text-slate-400">({paper.year})</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ResearchPage;
