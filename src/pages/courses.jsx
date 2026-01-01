import React from "react";
import Navbar from "../components/Navbar";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    pageTitle: "Teaching",
    description: "Carlos Navarrete teaches courses at the intersection of data science, artificial intelligence, and statistical analysis. His teaching philosophy emphasizes practical application and determining how advanced computational tools can solve complex real-world problems.",
    semester: "Semester",
    role: "Role"
  },
  es: {
    pageTitle: "Docencia",
    description: "Carlos Navarrete dicta cursos en la intersección de la ciencia de datos, la inteligencia artificial y el análisis estadístico. Su filosofía de enseñanza enfatiza la aplicación práctica y cómo las herramientas computacionales avanzadas pueden resolver problemas complejos del mundo real.",
    semester: "Semestre",
    role: "Rol"
  }
};

const coursesData = {
  en: [
    {
      title: "Generative Artificial Intelligence",
      role: "Professor / Lecturer",
      semester: "Spring 2025, Spring 2026 (Expected)",
      institution: "Universidad de Concepción",
      description: "This course explores the foundations and applications of Generative Models, focusing on their architectural principles, fine-tuning techniques, and practical implementation to solve complex engineering and data challenges."
    },
    {
      title: "Data Visualization",
      role: "Professor / Lecturer",
      semester: "Fall 2024, Fall 2025, Fall 2026 (Expected)",
      institution: "Universidad de Concepción",
      description: "Focuses on the theory and practice of visual data communication. Students learn to design effective, interactive visualizations to uncover insights from high-dimensional datasets using modern web standards and libraries."
    },
    {
      title: "Multivariate Statistical Analysis",
      role: "Professor / Lecturer",
      semester: "Fall 2025, Fall 2026",
      institution: "Universidad de Concepción",
      description: "Covers fundamental statistical techniques for analyzing datasets. The course focuses on linear regressions, logistic regressions, and Principal Component Analysis (PCA), applying these methods to real-world industrial engineering scenarios."
    }
  ],
  es: [
    {
      title: "Inteligencia Artificial Generativa",
      role: "Profesor / Docente",
      semester: "Primavera 2025, Primavera 2026 (Esperado)",
      institution: "Universidad de Concepción",
      description: "Este curso explora los fundamentos y aplicaciones de los Modelos Generativos, enfocándose en sus principios arquitectónicos, técnicas de fine-tuning e implementación práctica para resolver desafíos complejos de ingeniería y datos."
    },
    {
      title: "Visualización de Datos",
      role: "Profesor / Docente",
      semester: "Otoño 2024, Otoño 2025, Otoño 2026 (Esperado)",
      institution: "Universidad de Concepción",
      description: "Se enfoca en la teoría y práctica de la comunicación visual de datos. Los estudiantes aprenden a diseñar visualizaciones efectivas e interactivas para descubrir insights en conjuntos de datos de alta dimensión utilizando estándares web modernos."
    },
    {
      title: "Análisis Estadístico Multivariado",
      role: "Profesor / Docente",
      semester: "Otoño 2025, Otoño 2026",
      institution: "Universidad de Concepción",
      description: "Cubre técnicas estadísticas fundamentales para el análisis de datos. El curso se enfoca en regresiones lineales, regresiones logísticas y Análisis de Componentes Principales (PCA), aplicando estos métodos a escenarios reales de ingeniería industrial."
    }
  ]
};

export default function Courses() {
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

        {/* Courses List */}
        <div className="space-y-12">
          {coursesData[language].map((course, index) => (
            <article key={index} className="group border-b border-slate-100 pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-y-1 mb-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  {course.title}
                </h3>
                <span className="text-sm text-slate-500 font-medium whitespace-nowrap">
                  {course.semester}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-600 mb-4">
                <span className="font-medium text-slate-800">{course.institution}</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span>{course.role}</span>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm mb-4 max-w-3xl">
                {course.description}
              </p>

              {course.notes && (
                <div className="mt-4 pt-4 border-t border-slate-50/50">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Resources</h4>
                  <ul className="space-y-2">
                    {course.notes.map((note, i) => (
                      <li key={i}>
                        <a 
                          href={note.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                        >
                          {note.title}
                          <span className="text-xs">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}