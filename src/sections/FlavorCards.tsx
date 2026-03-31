import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';
import { flavorCards } from '../config';

gsap.registerPlugin(ScrollTrigger);

const FlavorCards = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section || !header || !grid) return;

    const cards = grid.querySelectorAll('.flavor-card');

    // Header entrance
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    headerTl.fromTo(
      header.children,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'expo.out',
      }
    );

    if (headerTl.scrollTrigger) {
      triggersRef.current.push(headerTl.scrollTrigger);
    }

    // Cards entrance with stagger
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: grid,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    cardsTl.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
        scale: 0.96,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'expo.out',
      }
    );

    if (cardsTl.scrollTrigger) {
      triggersRef.current.push(cardsTl.scrollTrigger);
    }

    // Parallax effect on card images
    cards.forEach((card) => {
      const img = card.querySelector('.card-image');
      if (img) {
        gsap.to(img, {
          y: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  if (flavorCards.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="flavors"
      className="relative min-h-screen w-full bg-black py-24 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink/30 to-transparent" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section header */}
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-pink" />
            <span className="font-body text-pink text-sm uppercase tracking-[0.3em]">
              Weekly Flavors
            </span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight mb-4">
            FRESH<span className="text-pink">DROPS</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl">
            Rotate every Monday. Limited batches. Get them while they last.
          </p>
        </div>

        {/* Flavor cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {flavorCards.map((flavor) => (
            <div
              key={flavor.name}
              className="flavor-card group relative bg-[#141416] border border-white/[0.08] overflow-hidden cursor-pointer hover:border-pink/30 transition-all duration-500 hover:-translate-y-1.5"
              data-cursor-hover
            >
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="card-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-60" />
                
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-pink text-black px-3 py-1 font-display font-bold text-sm">
                  {flavor.price}
                </div>

                {/* Add button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-pink transition-colors duration-300">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-pink transition-colors duration-300">
                  {flavor.name}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {flavor.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-display font-bold text-sm uppercase tracking-wider hover:border-pink hover:text-pink transition-all duration-300"
            data-cursor-hover
          >
            View Full Menu
          </Link>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute bottom-0 right-0 font-display font-black text-[8rem] md:text-[15rem] text-white/[0.02] leading-none pointer-events-none select-none">
        MENU
      </div>
    </section>
  );
};

export default FlavorCards;
