export function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-reggae-green via-reggae-yellow to-reggae-orange py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-background mb-6">
            ENVIE SEU SOUND
          </h2>
          <p className="text-lg md:text-xl text-background/90 mb-8 font-medium">
            Faça parte da cena reggae de São Paulo. Cadastre seu sound system e conecte-se com a comunidade.
          </p>
          <button 
            className="bg-background text-reggae-green hover:bg-background/90 hover:scale-105 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl"
            onClick={() => window.location.href = '#'}
          >
            Envie seu Sound
          </button>
        </div>
      </div>
    </section>
  );
}
