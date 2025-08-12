const logos = [
  { id: 1, name: 'Revolution Sound', image: 'https://via.placeholder.com/120x80/2a9d8f/ffffff?text=REV' },
  { id: 2, name: 'Babylon Sound', image: 'https://via.placeholder.com/120x80/e76f51/ffffff?text=BAB' },
  { id: 3, name: 'Zion Gate', image: 'https://via.placeholder.com/120x80/f4a261/ffffff?text=ZG' },
  { id: 4, name: 'Rasta Vibes', image: 'https://via.placeholder.com/120x80/e9c46a/000000?text=RV' },
  { id: 5, name: 'Dubwise', image: 'https://via.placeholder.com/120x80/264653/ffffff?text=DW' },
  { id: 6, name: 'Jah Works', image: 'https://via.placeholder.com/120x80/2a9d8f/ffffff?text=JW' },
  { id: 7, name: 'Roots Culture', image: 'https://via.placeholder.com/120x80/e76f51/ffffff?text=RC' },
  { id: 8, name: 'Irie Session', image: 'https://via.placeholder.com/120x80/f4a261/ffffff?text=IS' },
  { id: 9, name: 'Sound System', image: 'https://via.placeholder.com/120x80/e9c46a/000000?text=SS' },
  { id: 10, name: 'Dub Nation', image: 'https://via.placeholder.com/120x80/264653/ffffff?text=DN' },
  { id: 11, name: 'Reggae United', image: 'https://via.placeholder.com/120x80/2a9d8f/ffffff?text=RU' },
  { id: 12, name: 'Conscious Sound', image: 'https://via.placeholder.com/120x80/e76f51/ffffff?text=CS' },
];

export function LogoCarousel() {
  // Duplicate logos to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-muted py-12 overflow-hidden">
      <div className="relative">
        {/* Scrolling Container */}
        <div
          className="flex animate-marquee hover:pause-animation"
          style={{
            animation: 'marquee 40s linear infinite',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 mx-6 bg-card rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="w-30 h-20 object-contain filter hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
