import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

// Componente customizado do menu hambúrguer com cores reggae
const ReggaeMenuIcon = () => (
  <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1">
    <div className="w-6 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
    <div className="w-6 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></div>
    <div className="w-6 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
  </div>
);

// Componente customizado do X com cores reggae
const ReggaeCloseIcon = () => (
  <div className="relative w-6 h-6">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-6 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-full transform rotate-45"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-6 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full transform -rotate-45"></div>
    </div>
  </div>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationItems = [
    { name: 'Mapa', href: '/mapa' },
    { name: 'Lines', href: '/lines' },
    { name: 'Selectas', href: '/selectas' },
    { name: 'Artistas', href: '/artistas' },
    { name: 'Envie seu Sound', href: '/envie-seu-sound' },
  ];

  return (
    <>
      {/* Header - oculto quando menu mobile está aberto */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-transform duration-300 ${isMenuOpen ? 'md:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/favicon.png" 
              alt="ZonaDub" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:bg-gradient-to-r hover:from-reggae-green hover:via-reggae-yellow hover:to-reggae-red hover:bg-clip-text hover:text-transparent transition-all duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md bg-transparent hover:bg-muted/20 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <ReggaeCloseIcon /> : <ReggaeMenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Menu Bar - apenas a barra do menu visível */}
          <div className="absolute top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 py-4 flex items-center justify-end">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md bg-transparent hover:bg-muted/20 transition-all duration-200"
                aria-label="Close menu"
              >
                <ReggaeCloseIcon />
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-background">
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={toggleMenu}
                    className="text-2xl text-foreground hover:bg-gradient-to-r hover:from-reggae-green hover:via-reggae-yellow hover:to-reggae-red hover:bg-clip-text hover:text-transparent transition-all duration-200 font-bold py-3 border-b border-border/20"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black/50 -z-10"
            onClick={toggleMenu}
          />
        </div>
      )}
    </>
  );
}
