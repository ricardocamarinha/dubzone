interface PlaceholderPageProps {
  title: string;
  description: string;
  titleClassName?: string;
}

export function PlaceholderPage({ title, description, titleClassName }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-reggae-yellow to-reggae-orange rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl">🔧</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold text-reggae-yellow mb-4 ${titleClassName ?? ''}`}>
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {description}
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8">
          <p className="text-foreground text-lg mb-6">
            Esta página está em desenvolvimento. Em breve teremos conteúdo incrível para você!
          </p>
          <p className="text-muted-foreground">
            Continue explorando as outras seções do DubZone ou volte em breve para conferir as novidades.
          </p>
        </div>
      </div>
    </div>
  );
}
