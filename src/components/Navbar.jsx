import React, {useState, useEffect} from "react";

export default function Navbar({language, setLanguage}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <title>Carlos Navarrete, Ph.D.</title>
      <nav className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? "border-neutral-200/40 bg-white/90 backdrop-blur-xl shadow-sm" 
          : "border-transparent bg-transparent"
      }`}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-20 flex items-center relative">
          {/* Left menu - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-[13px] font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="/research"
              className="text-[13px] font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              RESEARCH
            </a>
            <a
              href="/op-ed"
              className="text-[13px] font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              OP-ED
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Brand centered */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group select-none"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              CARLOS NAVARRETE
            </span>
          </a>

          {/* Right side - Language selector */}
          <div className="ml-auto flex justify-end">
            {language !== undefined && setLanguage && (
              <div className="flex bg-white/90 backdrop-blur rounded-full p-1 ring-1 ring-black/5 shadow-sm">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 text-[11px] font-semibold tracking-wide ${
                    language === "en"
                      ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 text-[11px] font-semibold tracking-wide ${
                    language === "es"
                      ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  ES
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200/40 bg-white/95 backdrop-blur-xl">
            <div className="px-6 py-4 space-y-3">
              <a
                href="/"
                className="block text-sm font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="/research"
                className="block text-sm font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RESEARCH
              </a>
              <a
                href="/op-ed"
                className="block text-sm font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                OP-ED
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Offset para que el contenido no quede debajo del navbar */}
      <div className="h-20" />
    </>
  );
}