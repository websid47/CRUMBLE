import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { flavorCards } from '../config';

gsap.registerPlugin(ScrollTrigger);

const MenuPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!header || !grid) return;

    const cards = grid.querySelectorAll('.menu-card');

    // Header entrance
    gsap.fromTo(
      header.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'expo.out',
      }
    );

    // Cards entrance
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: grid,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    cardsTl.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'expo.out',
      }
    );

    if (cardsTl.scrollTrigger) {
      triggersRef.current.push(cardsTl.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative pt-32 pb-16 px-6 lg:px-12">
        <div ref={headerRef} className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-pink transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm uppercase tracking-wider">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-pink" />
            <span className="font-body text-pink text-sm uppercase tracking-[0.3em]">
              Full Menu
            </span>
          </div>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight mb-6">
            ALL <span className="text-pink">FLAVORS</span>
          </h1>
          
          <p className="font-body text-white/60 text-lg max-w-xl">
            Our complete collection of gourmet cookies. Fresh-baked daily with premium ingredients.
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Weekly', 'Classic', 'Chilled', 'Warm'].map((cat, i) => (
              <button
                key={cat}
                className={`px-6 py-2 font-body text-sm uppercase tracking-wider border transition-all duration-300 ${
                  i === 0 
                    ? 'bg-pink text-black border-pink' 
                    : 'bg-transparent text-white/60 border-white/20 hover:border-pink hover:text-pink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flavorCards.map((flavor) => (
              <div
                key={flavor.name}
                className="menu-card group relative bg-[#141416] border border-white/[0.08] overflow-hidden cursor-pointer hover:border-pink/30 transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 right-4 bg-pink text-black px-3 py-1 font-display font-bold text-sm">
                    {flavor.price}
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-pink transition-colors duration-300">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-pink transition-colors duration-300">
                    {flavor.name}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {flavor.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Classic Cookies Section */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-pink" />
              <span className="font-body text-pink text-sm uppercase tracking-[0.3em]">
                Always Available
              </span>
            </div>
            
            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-8">
              CLASSIC <span className="text-pink">COOKIES</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Milk Chocolate Chip', price: '$4', desc: 'Semi-sweet chips in buttery dough' },
                { name: 'Sugar Cookie', price: '$3.50', desc: 'Classic vanilla sugar cookie' },
                { name: 'Double Chocolate', price: '$4.50', desc: 'Rich chocolate cookie with chunks' },
                { name: 'Oatmeal Raisin', price: '$4', desc: 'Chewy oats with plump raisins' },
              ].map((item) => (
                <div 
                  key={item.name}
                  className="flex items-center justify-between p-6 bg-[#141416] border border-white/[0.08] hover:border-pink/30 transition-all duration-300 group cursor-pointer"
                >
                  <div>
                    <h4 className="font-display font-bold text-white group-hover:text-pink transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-body text-white/50 text-sm">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-display font-bold text-pink">{item.price}</span>
                    <button className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-pink hover:text-black transition-all duration-300">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
