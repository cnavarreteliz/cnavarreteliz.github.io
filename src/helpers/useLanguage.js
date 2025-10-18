// Hook para manejar el idioma de forma persistente
import {useState, useEffect} from "react";

export function useLanguage() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLanguage = typeof window !== "undefined" 
      ? localStorage.getItem("preferredLanguage") 
      : null;
    
    if (savedLanguage) 
      setLanguage(savedLanguage);
    
  }, []);

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== "undefined") 
      localStorage.setItem("preferredLanguage", newLanguage);
    
  };

  return [language, updateLanguage];
}
