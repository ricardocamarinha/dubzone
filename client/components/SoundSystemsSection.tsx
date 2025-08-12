import { useState } from 'react';

interface SoundSystem {
  id: number;
  name: string;
  zone: 'Leste' | 'Sul' | 'Norte' | 'Oeste';
  description: string;
  image: string;
  color: string;
}

const soundSystems: SoundSystem[] = [
  {
    id: 1,
    name: 'Kurosound',
    zone: 'Leste',
    description: 'Nome do gosound stackit espursés trial.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    color: 'from-reggae-red to-reggae-orange',
  },
  {
    id: 2,
    name: 'Revolution',
    zone: 'Sul',
    description: 'Jogaeming unca eksperímáans.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
    color: 'from-reggae-green to-reggae-teal',
  },
  {
    id: 3,
    name: 'Ipiranga',
    zone: 'Norte',
    description: 'Agspenda psta, gelá e red extras.',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop',
    color: 'from-reggae-teal to-reggae-purple',
  },
  {
    id: 4,
    name: 'Radial System',
    zone: 'Oeste',
    description: 'Viogurmusjo geri.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop',
    color: 'from-reggae-yellow to-reggae-orange',
  },
  {
    id: 5,
    name: 'Babylon Sound',
    zone: 'Leste',
    description: 'Roots & culture vibes desde 2015.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    color: 'from-reggae-purple to-reggae-red',
  },
  {
    id: 6,
    name: 'Zion Gate',
    zone: 'Sul',
    description: 'Conscious reggae music for the people.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
    color: 'from-reggae-orange to-reggae-green',
  },
];

type Zone = 'Todas' | 'Leste' | 'Sul' | 'Norte' | 'Oeste';

export function SoundSystemsSection() {
  const [activeFilter, setActiveFilter] = useState<Zone>('Todas');

  const zones: Zone[] = ['Todas', 'Leste', 'Sul', 'Norte', 'Oeste'];

  const filteredSystems = activeFilter === 'Todas' 
    ? soundSystems 
    : soundSystems.filter(system => system.zone === activeFilter);

  return (
    <section className="w-full bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-rubik font-bold italic tracking-wide text-reggae-yellow mb-12 text-left">
          📢 | LINES
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start gap-4 mb-12">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setActiveFilter(zone)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeFilter === zone
                  ? 'bg-gradient-to-r from-reggae-green via-reggae-yellow to-reggae-red text-black shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-gradient-to-r hover:from-reggae-green hover:via-reggae-yellow hover:to-reggae-red hover:text-black'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Sound Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSystems.map((system) => (
            <div
              key={system.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Card Header with Gradient */}
              <div className={`h-32 bg-gradient-to-r ${system.color} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {system.name}
                  </h3>
                  <p className="text-sm text-white/90 font-medium">
                    Zona {system.zone}
                  </p>
                </div>
              </div>

              {/* Sound System Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={system.image}
                  alt={`${system.name} sound system`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Speaker Icon Overlay */}
                <div className="absolute bottom-2 right-2 w-12 h-12 bg-black/70 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-reggae-orange rounded border-2 border-white">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {system.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSystems.length === 0 && (
          <div className="text-left py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum sound system encontrado na zona {activeFilter}.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
