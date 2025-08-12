import { useState } from 'react';
import { Instagram } from 'lucide-react';

interface SoundSystem {
  id: number;
  name: string;
  zone: string;
  position: { lat: number; lng: number };
  image: string;
  instagram: string;
}

const soundSystems: SoundSystem[] = [
  {
    id: 1,
    name: 'Revolution Sound',
    zone: 'São Lose',
    position: { lat: -23.5489, lng: -46.6388 },
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
    instagram: '@revolution_sound',
  },
  {
    id: 2,
    name: 'Guarulhos Sound',
    zone: 'Guarulhos',
    position: { lat: -23.4538, lng: -46.5333 },
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop',
    instagram: '@guarulhos_sound',
  },
  {
    id: 3,
    name: 'Santo André Sound',
    zone: 'Santo André',
    position: { lat: -23.6629, lng: -46.5308 },
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=200&h=200&fit=crop',
    instagram: '@santo_andre_sound',
  },
];

export function InteractiveMap() {
  const [selectedSystem, setSelectedSystem] = useState<SoundSystem | null>(null);

  const handlePinClick = (system: SoundSystem) => {
    setSelectedSystem(system);
  };

  const closePopup = () => {
    setSelectedSystem(null);
  };

  return (
    <section className="w-full bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-6">
          <h2 className="text-3xl md:text-4xl font-rubik font-bold italic tracking-wide text-left text-reggae-yellow">🗺️ | MAPA</h2>
        </div>
        <div className="relative bg-card rounded-lg overflow-hidden">
          {/* Map Background - Using a placeholder that looks like São Paulo map */}
          <div 
            className="relative w-full h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"800\" height=\"500\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Crect width=\"800\" height=\"500\" fill=\"%23264653\"%2F%3E%3Cpath d=\"M100,100 Q200,50 300,100 T500,150 Q600,120 700,150\" fill=\"none\" stroke=\"%232a9d8f\" stroke-width=\"3\"%2F%3E%3Cpath d=\"M150,200 Q250,170 350,200 T550,250 Q650,220 750,250\" fill=\"none\" stroke=\"%232a9d8f\" stroke-width=\"2\"%2F%3E%3Cpath d=\"M50,300 Q150,270 250,300 T450,350 Q550,320 650,350\" fill=\"none\" stroke=\"%232a9d8f\" stroke-width=\"2\"%2F%3E%3Ccircle cx=\"200\" cy=\"180\" r=\"30\" fill=\"%23e9c46a\" opacity=\"0.3\"%2F%3E%3Ccircle cx=\"400\" cy=\"250\" r=\"40\" fill=\"%23f4a261\" opacity=\"0.3\"%2F%3E%3Ccircle cx=\"600\" cy=\"200\" r=\"25\" fill=\"%23e76f51\" opacity=\"0.3\"%2F%3E%3C%2Fsvg%3E')"
            }}
          >
            {/* Pin Markers */}
            {soundSystems.map((system) => {
              const x = ((system.position.lng + 46.8) / 0.5) * 100; // Rough conversion for demo
              const y = ((system.position.lat + 23.7) / 0.4) * 100;
              
              return (
                <button
                  key={system.id}
                  onClick={() => handlePinClick(system)}
                  className="absolute transform -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform z-10"
                  style={{ 
                    left: `${Math.max(10, Math.min(90, x))}%`, 
                    top: `${Math.max(10, Math.min(90, y))}%` 
                  }}
                  aria-label={`${system.name} location`}
                >
                  <img 
                    src="https://cdn.builder.io/api/v1/assets/7703c463373040bb8177b3aeb3d66af6/image-removebg-preview-fb46b3?format=webp&width=800"
                    alt="Sound system pin"
                    className="w-8 h-10 filter drop-shadow-lg"
                  />
                </button>
              );
            })}

            {/* Popup */}
            {selectedSystem && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div 
                  className="absolute inset-0 bg-black/50"
                  onClick={closePopup}
                />
                <div className="bg-card border border-border rounded-lg p-6 max-w-sm mx-4 z-30 shadow-xl">
                  <div className="flex items-start gap-4">
                    <img
                      src={selectedSystem.image}
                      alt={selectedSystem.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-card-foreground">
                        {selectedSystem.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {selectedSystem.zone}
                      </p>
                      <a
                        href={`https://instagram.com/${selectedSystem.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-reggae-orange hover:bg-reggae-orange/80 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors"
                      >
                        <Instagram size={16} />
                        Ver mais
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-muted-foreground hover:text-card-foreground text-xl"
                    aria-label="Close popup"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Map Overlay Info */}
          <div className="absolute top-4 left-4 bg-black/70 text-white p-3 rounded-lg">
            <h3 className="font-bold text-sm">São Paulo Sound Systems</h3>
            <p className="text-xs opacity-80">Clique nos pins para ver mais</p>
          </div>
        </div>
      </div>
    </section>
  );
}
