import { EventsCarousel } from "../components/EventsCarousel";
import { InteractiveMap } from "../components/InteractiveMap";
import { SoundSystemsSection } from "../components/SoundSystemsSection";
import { LogoCarousel } from "../components/LogoCarousel";
import { CTASection } from "../components/CTASection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Events Carousel Section */}
      <EventsCarousel />
      
      {/* Interactive Map Section */}
      <InteractiveMap />
      
      {/* Sound Systems Section */}
      <SoundSystemsSection />
      
      {/* Logo Carousel Section */}
      <LogoCarousel />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
