import React from "react";
import Navbar from "../components/Navbar";
import {SocialMedia} from "../components/SocialMedia";
import {Title} from "../components/Title";
import {useLanguage} from "../helpers/useLanguage";

// Solo se actualiza el objeto translations (no se toca el resto del componente)
// Solo se actualiza el objeto translations (no se toca el resto del componente)
const translations = {
  en: {
    sendEmail: "Contact:",
    bioTitle: "Bio",
    bio1: "Professor Navarrete is a faculty member at the Faculty of Engineering, Universidad de Concepción. His research focuses on computational social science, innovation metrics, and the application of artificial intelligence to address structural problems in social and economic systems. He has examined the dynamics of political polarization, the measurement of electoral divisiveness, and the geography of scientific capabilities.",
    bio2_start: "He has also developed advanced data products for visualizing complex data at scale, contributing to platforms such as ",
    bio2_end: ". His work has been published in key journals including ",
    bio3: "Professor Navarrete received a PhD in Computer Science from the Université de Toulouse in 2023, and holds an Industrial Engineering degree from Universidad de Concepción.",
    education: "Education",
    publications: "Publications",
    publicationsText: "You can find a full, up‑to‑date list of his publications on"
  },
  es: {
    sendEmail: "Contacto:",
    bioTitle: "Bio",
    bio1: "El profesor Navarrete es académico de la Facultad de Ingeniería de la Universidad de Concepción. Su investigación se centra en ciencias sociales computacionales, métricas de innovación y la aplicación de inteligencia artificial para abordar problemas estructurales en sistemas sociales y económicos. Ha examinado las dinámicas de la polarización política, la medición de la división electoral y la geografía de las capacidades científicas.",
    bio2_start: "También ha desarrollado productos de datos avanzados para visualizar datos complejos a gran escala, contribuyendo a plataformas como ",
    bio2_end: ". Su trabajo ha sido publicado en revistas destacadas, incluyendo ",
    bio3: "El profesor Navarrete recibió un Doctorado en Informática de la Université de Toulouse en 2023 y es Ingeniero Civil Industrial de la Universidad de Concepción.",
    education: "Educación",
    publications: "Publicaciones",
    publicationsText: "Puedes encontrar una lista completa y actualizada de sus publicaciones en"
  }
};

function IndexPage() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Profile */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="sticky top-28">
              <div className="mb-8">
                 <img
                  className="rounded-lg shadow-sm border border-slate-200 object-cover w-full max-w-[280px] aspect-[4/5] mx-auto lg:mx-0"
                  src="https://streamdata.cl/team/carlos-navarrete.webp"
                  alt="Carlos Navarrete"
                  loading="lazy"
                />
              </div>

               <div className="space-y-4">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                   Carlos Navarrete, Ph.D.
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {t.role}
                </p>
                <div className="text-sm text-slate-600 pt-2">
                  <span className="font-semibold text-slate-700">{t.sendEmail}</span>{" "}
                  <a
                    href="mailto:cnavarretel@udec.cl"
                    className="text-blue-700 hover:text-blue-900 hover:underline font-medium"
                  >
                    cnavarretel@udec.cl
                  </a>
                </div>
                 
                 <div className="pt-4">
                   <SocialMedia
                    className="justify-start lg:justify-start"
                    data={[
                      {url: "https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en", name: "Google Scholar"},
                      {url: "https://github.com/cnavarreteliz", name: "Github"},
                      {url: "https://x.com/cnavarreteliz", name: "X"},
                      {url: "https://www.linkedin.com/in/cnavarreteliz/", name: "LinkedIn"}
                    ]}
                  />
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Bio Section */}
            <section>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-6">
                {t.bioTitle}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-[16px]">
                <p>{t.bio1}</p>
                <p>
                  {t.bio2_start}
                  <a href="https://data.latercera.com" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">Data La Tercera</a>,{' '}
                  <a href="https://datachile.io" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">DataChile</a>,{' '}
                  <a href="https://aiworld.eu" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">the AI World</a>
                  {language === 'en' ? ', and ' : ' y '}
                  <a href="https://streamdata.cl" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">StreamData</a>
                  {t.bio2_end}
                  <i>Nature Human Behaviour</i>, <i>Research Policy</i>
                  {language === 'en' ? ', and ' : ' y '}
                  <i>Global Environmental Change</i>.
                </p>
                <p>{t.bio3}</p>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-6">
                {t.education}
              </h2>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <span className="font-semibold text-slate-900">Ph.D. in Computer Science</span>
                    <div className="text-slate-600">Université de Toulouse</div>
                  </div>
                  <div className="text-slate-500 text-sm">2023</div>
                </li>
                <li className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <span className="font-semibold text-slate-900">Industrial Engineering</span>
                    <div className="text-slate-600">Universidad de Concepción</div>
                  </div>
                  <div className="text-slate-500 text-sm">2016</div>
                </li>
                <li className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <span className="font-semibold text-slate-900">B.Sc. in Engineering</span>
                    <div className="text-slate-600">Universidad de Concepción</div>
                  </div>
                  <div className="text-slate-500 text-sm">2014</div>
                </li>
              </ul>
            </section>

            {/* Publications Link */}
            <section>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-6">
                {t.publications}
              </h2>
              <p className="text-slate-700">
                {t.publicationsText}{" "}
                <a
                  href="https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  Google Scholar
                  <span className="text-xs">↗</span>
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}

export default IndexPage;
