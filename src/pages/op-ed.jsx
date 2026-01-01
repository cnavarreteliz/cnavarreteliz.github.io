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
        title: "El destino de dirigir a Chile",
        description: "Gobernar Chile con una mirada regional no consiste solo en anunciar el fin de los delegados presidenciales o en prometer más infraestructura pública en regiones.",
        publication: "El Mostrador",
        date: "11 de Diciembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/11/el-destino-de-dirigir-a-chile/"
      },
      {
        title: "Inteligencia artificial, desigualdad real: el costo social de un acceso desigual a la IA",
        description: "Si no abordamos la discusión con ambición y políticas capaces de permear más allá de nichos empresariales y académicos, la expansión de la IA corre el riesgo de ser un amplificador de desigualdades.",
        publication: "El Mostrador",
        date: "3 de Diciembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/03/inteligencia-artificial-desigualdad-real-el-costo-social-de-un-acceso-desigual-a-la-ia/"
      },
      {
        title: "Elecciones: Chile es un pueblo al sur y al norte de Santiago",
        description: "La historia es clara en esto: los movimientos extremos no emergen porque la ciudadanía se vuelva súbitamente más radical, sino porque las élites centralistas dejan de dar respuestas.",
        publication: "El Mostrador",
        date: "18 de Noviembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/18/elecciones-chile-es-un-pueblo-al-sur-y-al-norte-de-santiago/"
      },
      {
        title: "La indiferencia frente a la verdad en la era digital",
        description: "Este fenómeno no nació con la inteligencia artificial ni con las redes sociales: primero fueron las teorías conspirativas; hoy es la aceptación pasiva de información sin reflexión ni contraste.",
        publication: "El Mostrador",
        date: "8 de Noviembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/08/la-indiferencia-frente-a-la-verdad-en-la-era-digital/"
      },
      {
        title: "La inteligencia artificial y la destrucción de empleos en Chile",
        description: "Tal vez el verdadero debate de esta elección no sea cuántos empleos se crean o se destruyen hoy, sino qué tipo de trabajos podrán generarse mañana.",
        publication: "El Mostrador",
        date: "2 de Noviembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/02/la-inteligencia-artificial-y-la-destruccion-de-empleos-en-chile/"
      },
      {
        title: "Regiones vs. Santiago: la segunda lectura de las presidenciales",
        description: "Cuando conozcamos los resultados del 16 de noviembre, la conversación no será solo sobre quien gane, sino sobre dónde gana.",
        publication: "El Mostrador",
        date: "28 de Octubre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/28/regiones-vs-santiago-la-segunda-lectura-de-las-presidenciales/"
      },
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

        {/* Op-Ed Columns by Year */}
        <div className="space-y-16">
          {opEdColumns.map((yearData) => (
            <section key={yearData.year} className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                {yearData.year}
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                {yearData.columns.map((column, index) => (
                  <article
                    key={index}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-y-2 mb-2">
                       <a
                        href={column.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                      >
                        {column.title}
                      </a>
                      <div className="text-sm text-slate-400 shrink-0">
                        {column.date}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                       <span className="font-medium text-slate-700">{column.publication}</span>
                    </div>
                    
                    <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                      {column.description}
                    </p>
                    
                    <div className="mt-4">
                      <a
                        href={column.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {t.readMore}
                        <span>→</span>
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
