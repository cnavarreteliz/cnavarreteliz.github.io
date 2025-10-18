import React from "react";
import Navbar from "../components/Navbar";
import {SocialMedia} from "../components/SocialMedia";
import {Title} from "../components/Title";
import {useLanguage} from "../helpers/useLanguage";

// Solo se actualiza el objeto translations (no se toca el resto del componente)
const translations = {
  en: {
    greeting: "Hi, I am Carlos — data scientist, technological innovator, and researcher applying artificial intelligence to tackle big problems that help us better solve real-life issues in Chile.",
    sendEmail: "You can write me at",
    aboutMe: "About me",
    bio1: "I am a data scientist, technological innovator and academic (Faculty of Engineering, Universidad de Concepción) focused on innovation, science & technology metrics, building data products and implementing artificial intelligence solutions.",
    bio2: "I have contributed to several data visualization and analytics platforms such as Data La Tercera",
    bio3: "My work bridges academic research and practical applications, creating AI‑enabled tools and insights that help understand complex socio‑economic systems and address challenges in Chilean society.",
    bio4: "My research has been published in journals such as",
    education: "Education",
    publications: "Publications",
    publicationsText: "You can find a full, up‑to‑date list of my publications on"
  },
  es: {
    greeting: "Hola, soy Carlos — científico de datos, innovador tecnológico e investigador que aplica inteligencia artificial para abordar grandes problemas que nos ayudan a resolver mejor los desafíos de la vida real en Chile.",
    sendEmail: "Puedes escribirme a",
    aboutMe: "Sobre mí",
    bio1: "Soy científico de datos, innovador tecnológico y académico (Facultad de Ingeniería, Universidad de Concepción) enfocado en métricas de innovación, ciencia y tecnología, en construir productos de datos y en implementar soluciones de inteligencia artificial.",
    bio2: "He contribuido a varias plataformas de visualización y analítica de datos como Data La Tercera",
    bio3: "Mi trabajo conecta la investigación académica con aplicaciones prácticas, creando herramientas e ideas potenciadas por IA para entender sistemas socioeconómicos complejos y abordar desafíos en la sociedad chilena.",
    bio4: "Mi investigación ha sido publicada en revistas como",
    education: "Educación",
    publications: "Publicaciones",
    publicationsText: "Puedes encontrar una lista completa y actualizada de mis publicaciones en"
  }
};

function IndexPage() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Gradientes suaves de fondo - estilo IA con azules MÁS CLAROS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/15 via-cyan-200/10 to-sky-300/15 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-200/12 via-blue-300/12 to-indigo-200/12 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200/12 via-blue-200/8 to-cyan-300/12 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
      </div>

      <Navbar language={language} setLanguage={setLanguage} />

      <main className="relative z-10 flex flex-col lg:flex-row max-w-7xl mx-auto px-8 md:px-12 py-16 gap-16">
        {/* Columna lateral */}
        <div className="lg:w-1/3 flex flex-col gap-12">
          <div className="sticky top-28 flex flex-col gap-10">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-400/40 via-cyan-400/35 to-sky-400/40 opacity-50 blur-2xl group-hover:opacity-70 transition duration-500" />
              <img
                className="relative rounded-2xl shadow-2xl ring-1 ring-black/5 object-cover w-full aspect-[4/5]"
                src="https://streamdata.cl/team/carlos-navarrete.webp"
                alt="Carlos Navarrete"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 leading-relaxed">
              <p className="text-base font-semibold bg-gradient-to-r from-blue-700 via-blue-900 to-black bg-clip-text text-transparent leading-relaxed">
                {t.greeting}
              </p>
              <p className="text-sm text-slate-600">
                {t.sendEmail}{" "}
                <a
                  href="mailto:cnavarretel@udec.cl"
                  className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-2"
                >
                  cnavarretel@udec.cl
                </a>
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-black/5 shadow-lg">
              <SocialMedia
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

        {/* Contenido principal - Diseño limpio sin cards */}
        <div className="lg:w-2/3 space-y-20">
          {/* About Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 pb-4 border-b border-slate-200/60">
              {t.aboutMe}
            </h2>
            <div className="space-y-6 text-slate-700 leading-relaxed text-[15px]">
              <p>{t.bio1}</p>
              <p>
                {t.bio2} (
                <a href="https://data.latercera.com" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 transition-colors">
                  https://data.latercera.com
                </a>
                ), DataChile (
                <a href="https://datachile.io" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 transition-colors">
                  https://datachile.io
                </a>
                ), the AI World (
                <a href="https://aiworld.eu" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 transition-colors">
                  https://aiworld.eu
                </a>
                ), and StreamData (
                <a href="https://streamdata.cl" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 transition-colors">
                  https://streamdata.cl
                </a>
                ).
              </p>
              <p>{t.bio3}</p>
              <p>
                {t.bio4}{" "}
                <a
                  href="https://www.nature.com/articles/s41562-023-01755-x"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2 transition-colors"
                >
                  Nature Human Behaviour
                </a>
                ,{" "}
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950?via%3Dihub"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2 transition-colors"
                >
                  Research Policy
                </a>
                ,{" "}
                <a
                  href="https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2 transition-colors"
                >
                  entre otras
                </a>
                .
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 pb-4 border-b border-slate-200/60">
              {t.education}
            </h2>
            <ul className="space-y-4 text-slate-700 leading-relaxed text-[15px]">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1.5 text-xs">●</span>
                <span><span className="font-semibold">Doctorate</span>, Université de Toulouse (2023)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1.5 text-xs">●</span>
                <span><span className="font-semibold">Engineering</span>, Universidad de Concepción (2016)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1.5 text-xs">●</span>
                <span><span className="font-semibold">B.Sc.</span>, Universidad de Concepción (2014)</span>
              </li>
            </ul>
          </section>

          {/* Publications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 pb-4 border-b border-slate-200/60">
              {t.publications}
            </h2>
            <p className="text-slate-700 leading-relaxed text-[15px]">
              {t.publicationsText}{" "}
              <a
                href="https://scholar.google.fr/citations?user=JqTxoC0AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                Google Scholar
                <span className="text-xs">↗</span>
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default IndexPage;
