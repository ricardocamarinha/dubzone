import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://cdn.builder.io/api/v1/assets/7703c463373040bb8177b3aeb3d66af6/logo-2931de?format=webp&width=800" 
              alt="DubZone" 
              className="h-12 w-auto"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground font-medium">Siga a DubZone:</span>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/dubzone"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-reggae-yellow hover:text-background p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/dubzone"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-reggae-orange hover:text-background p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@dubzone"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-reggae-red hover:text-background p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.055-.09A6.44 6.44 0 0 0 3 15.756 6.44 6.44 0 0 0 9.44 22.2a6.44 6.44 0 0 0 5.98-4.023A6.44 6.44 0 0 0 15.98 16v-5.854a7.077 7.077 0 0 0 3.609 1.047V7.686a4.793 4.793 0 0 1-.001-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 DubZone. Conectando a cena reggae de São Paulo.
          </p>
        </div>
      </div>
    </footer>
  );
}
