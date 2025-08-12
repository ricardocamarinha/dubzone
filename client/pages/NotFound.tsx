import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-reggae-red to-reggae-orange rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-6xl">🎵</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-reggae-yellow mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ops! Esta página não foi encontrada na nossa sessão.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-foreground mb-6">
            Parece que você se perdeu no sound system. Que tal voltar para a página inicial?
          </p>
          <Link
            to="/"
            className="inline-block bg-reggae-yellow hover:bg-reggae-yellow/80 text-background px-6 py-3 rounded-full font-bold transition-colors duration-200"
          >
            Voltar ao DubZone
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
