import React from "react";
import Navbar from "../components/Navbar";
import {Title} from "../components/Title";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    pageTitle: "Op-Ed",
    description: "Opinion columns on technology, artificial intelligence, innovation, and their impact on Chilean society.",
    readMore: "Read article",
    publishedIn: "Published in"
  },
  es: {
    pageTitle: "Columnas de Opinión",
    description: "Columnas de opinión sobre tecnología, inteligencia artificial, innovación y su impacto en la sociedad chilena.",
    readMore: "Leer artículo",
    publishedIn: "Publicado en"
  }
};

// Columnas de opinión organizadas por año
const opEdColumns = [
  {
    year: 2025,
    columns: [
      {
        title: "Cómo ganar una elección presidencial: divide y vencerás",
        description: "Análisis sobre las estrategias de polarización y división electoral en las elecciones presidenciales contemporáneas.",
        publication: "El Mostrador",
        date: "18 de Octubre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/18/como-ganar-una-eleccion-presidencial-divide-y-venceras/"
      },
      {
        title: "Elecciones parlamentarias: competencia por escaños",
        description: "Un análisis de la competencia electoral parlamentaria en Chile utilizando datos de StreamData.",
        publication: "La Segunda",
        date: "Agosto, 2025",
        url: "https://www.lasegunda.com/Noticias/Opinion/2025/08/1107793/elecciones-parlamentarias-competencia-escanos-streamdata"
      },
      {
        title: "Primarias presidenciales: ¿para qué?",
        description: "Reflexión sobre el rol y la efectividad de las primarias presidenciales en el sistema político chileno.",
        publication: "El Mostrador",
        date: "2 de Agosto, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/08/02/primarias-presidenciales-para-que/"
      },
      {
        title: "El criptoescándalo y la supervivencia política de Javier Milei",
        description: "Análisis sobre las implicancias del escándalo de criptomonedas en la gestión política del presidente argentino.",
        publication: "El Mostrador",
        date: "3 de Marzo, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/03/03/el-criptoescandalo-y-la-supervivencia-politica-de-javier-milei/"
      }
    ]
  }
];

function OpEdPage() {
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

      <main className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-blue-900 to-black bg-clip-text text-transparent mb-4">
            {t.pageTitle}
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            {t.description}
          </p>
        </div>

        {/* Op-Ed Columns by Year */}
        <div className="space-y-12">
          {opEdColumns.map((yearData) => (
            <section key={yearData.year} className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                {yearData.year}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {yearData.columns.map((column, index) => (
                  <article
                    key={index}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-black/5 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {column.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {column.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="text-xs text-slate-500">
                        <span className="font-medium">{t.publishedIn}</span> {column.publication}
                        <span className="mx-2">•</span>
                        {column.date}
                      </div>
                      
                      <a
                        href={column.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {t.readMore}
                        <span className="text-[10px]">↗</span>
                      </a>
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

export default OpEdPage;
