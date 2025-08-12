import { useState, useEffect, type TouchEvent, type MouseEvent } from "react";

const eventFlyers = [
  {
    id: 1,
    title: "Flyer 1",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-11.jpg",
  },
  {
    id: 2,
    title: "Flyer 2",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-1d.jpg",
  },
  {
    id: 3,
    title: "Flyer 3",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-12.jpg",
  },
  {
    id: 4,
    title: "Flyer 4",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-11qsa.jpg",
  },
  {
    id: 5,
    title: "Flyer 5",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-11qs.jpg",
  },
  {
    id: 6,
    title: "Flyer 6",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-11cc.jpg",
  },
  {
    id: 7,
    title: "Flyer 7",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-11ascc.jpg",
  },
  {
    id: 8,
    title: "Flyer 8",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-11as.jpg",
  },
  {
    id: 9,
    title: "Flyer 9",
    date: "",
    time: "",
    image: "/flyers/flyer-quaridnha-08-11adff.jpg",
  },
  {
    id: 10,
    title: "Flyer 10",
    date: "",
    time: "",
    image: "/flyers/flyer-shivas-12-09.jpg",
  },
];

export function EventsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventFlyers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + eventFlyers.length) % eventFlyers.length,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % eventFlyers.length);
  };

  // Touch handlers (mobile)
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const threshold = 50; // px
    if (deltaX > threshold) {
      goToPrevious();
    } else if (deltaX < -threshold) {
      goToNext();
    }
    setTouchStartX(null);
  };

  // Mouse handlers (desktop)
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setMouseStartX(e.clientX);
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || mouseStartX === null) return;
    const deltaX = e.clientX - mouseStartX;
    const threshold = 50; // px
    if (deltaX > threshold) {
      goToPrevious();
    } else if (deltaX < -threshold) {
      goToNext();
    }
    setIsMouseDown(false);
    setMouseStartX(null);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setMouseStartX(null);
  };

  return (
    <section className="relative w-full bg-background py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6"></div>

        <div className="relative">
          {/* Carousel Container - altura fixa como antes */}
          <div
            className="relative h-[300px] overflow-hidden rounded-lg select-none cursor-grab"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {eventFlyers.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Apenas a imagem do flyer, sem overlay ou descrições */}
                <img
                  src={event.image}
                  alt={`Flyer do evento ${event.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navegação por gesto: swipe/touch/mouse drag (setas removidas) */}

          {/* Indicadores quadrados com gradiente reggae em 90 graus */}
          <div className="flex justify-center mt-6 space-x-2">
            {eventFlyers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-sm transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-gradient-to-b from-green-500 via-yellow-400 to-red-500 scale-110"
                    : "bg-gray-400 hover:bg-gradient-to-b hover:from-green-500 hover:via-yellow-400 hover:to-red-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
