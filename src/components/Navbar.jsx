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
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand - Left aligned */}
          <a href="/" className="flex items-center group">
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              CARLOS NAVARRETE
            </span>
          </a>

          {/* Desktop Menu - Right Aligned */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              ABOUT
            </a>
            <a href="/research" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              RESEARCH
            </a>
            <a href="/op-ed" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              OP-ED
            </a>
             <a href="/courses" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              TEACHING
            </a>
             {/* Language Selector */}
            {language !== undefined && setLanguage && (
              <div className="flex items-center gap-2 ml-4 border-l border-slate-200 pl-4">
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-xs font-semibold transition-colors ${
                    language === "en" ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`text-xs font-semibold transition-colors ${
                    language === "es" ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  ES
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900"
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
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-4">
            <a href="/" className="block text-sm font-medium text-slate-600 hover:text-slate-900">ABOUT</a>
            <a href="/research" className="block text-sm font-medium text-slate-600 hover:text-slate-900">RESEARCH</a>
            <a href="/op-ed" className="block text-sm font-medium text-slate-600 hover:text-slate-900">OP-ED</a>
            <a href="/courses" className="block text-sm font-medium text-slate-600 hover:text-slate-900">TEACHING</a>
          </div>
        )}
      </nav>
      <div className="h-20" />
    </>
  );
}