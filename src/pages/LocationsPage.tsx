import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    name: 'Beverly Hills',
    address: '123 Cookie Lane, Beverly Hills, CA 90210',
    hours: 'Mon-Sat: 10am-10pm, Sun: 12pm-8pm',
    phone: '(310) 555-0123',
    status: 'Open Now',
  },
  {
    name: 'Santa Monica',
    address: '456 Ocean Ave, Santa Monica, CA 90401',
    hours: 'Mon-Sat: 10am-10pm, Sun: 12pm-8pm',
    phone: '(310) 555-0456',
    status: 'Open Now',
  },
  {
    name: 'Downtown LA',
    address: '789 Main St, Los Angeles, CA 90012',
    hours: 'Mon-Sat: 10am-10pm, Sun: 12pm-8pm',
    phone: '(213) 555-0789',
    status: 'Open Now',
  },
  {
    name: 'Pasadena',
    address: '321 Colorado Blvd, Pasadena, CA 91101',
    hours: 'Mon-Sat: 10am-10pm, Sun: 12pm-8pm',
    phone: '(626) 555-0321',
    status: 'Open Now',
  },
  {
    name: 'West Hollywood',
    address: '654 Sunset Blvd, West Hollywood, CA 90069',
    hours: 'Mon-Sat: 10am-10pm, Sun: 12pm-8pm',
    phone: '(323) 555-0654',
    status: 'Open Now',
  },
  {
    name: 'Glendale',
    address: '987 Brand Blvd, Glendale, CA 91203',
    hours: 'Mon-Sat: 10am-10pm, Sun: 12pm-8pm',
    phone: '(818) 555-0987',
    status: 'Open Now',
  },
];

const LocationsPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const header = headerRef.current;
    const list = listRef.current;
    if (!header || !list) return;

    const items = list.querySelectorAll('.location-item');

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

    const itemsTl = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    itemsTl.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'expo.out',
      }
    );

    if (itemsTl.scrollTrigger) {
      triggersRef.current.push(itemsTl.scrollTrigger);
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
              Find Us
            </span>
          </div>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight mb-6">
            OUR <span className="text-pink">LOCATIONS</span>
          </h1>
          
          <p className="font-body text-white/60 text-lg max-w-xl">
            Find a Crumbl near you. Fresh cookies baked daily at all locations.
          </p>
        </div>
      </div>

      {/* Locations List */}
      <div className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Search/Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <input
              type="text"
              placeholder="Enter your city or zip code"
              className="flex-1 max-w-md px-6 py-4 bg-[#141416] border border-white/10 text-white font-body placeholder:text-white/40 focus:border-pink focus:outline-none transition-colors"
            />
            <button className="px-8 py-4 bg-pink text-black font-display font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors">
              Find Nearest
            </button>
          </div>

          {/* Grid */}
          <div ref={listRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div
                key={location.name}
                className="location-item group relative bg-[#141416] border border-white/[0.08] p-8 hover:border-pink/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-pink transition-colors">
                      {location.name}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-green-400 text-sm font-body">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      {location.status}
                    </span>
                  </div>
                  <MapPin className="w-6 h-6 text-pink" />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-white/60">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="font-body text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-white/60">
                    <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="font-body text-sm">{location.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 text-white/60">
                    <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="font-body text-sm">{location.phone}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 bg-pink text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2">
                    Order Pickup
                  </button>
                  <button className="px-4 py-3 border border-white/20 text-white font-display font-bold text-xs uppercase tracking-wider hover:border-pink hover:text-pink transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Directions
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center p-12 border border-dashed border-white/20">
            <h3 className="font-display font-bold text-xl text-white mb-2">
              More Locations Coming Soon
            </h3>
            <p className="font-body text-white/50 mb-6">
              We're expanding! Check back for new locations near you.
            </p>
            <button className="px-6 py-3 border border-pink text-pink font-display font-bold text-xs uppercase tracking-wider hover:bg-pink hover:text-black transition-colors">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
