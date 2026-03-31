import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Send, Mail, Phone, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    if (!header || !form || !info) return;

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

    const formTl = gsap.timeline({
      scrollTrigger: {
        trigger: form,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    formTl.fromTo(
      form.querySelectorAll('.form-field'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'expo.out',
      }
    );

    if (formTl.scrollTrigger) {
      triggersRef.current.push(formTl.scrollTrigger);
    }

    const infoTl = gsap.timeline({
      scrollTrigger: {
        trigger: info,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    infoTl.fromTo(
      info.querySelectorAll('.info-item'),
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'expo.out',
      }
    );

    if (infoTl.scrollTrigger) {
      triggersRef.current.push(infoTl.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              Get in Touch
            </span>
          </div>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight mb-6">
            CONTACT <span className="text-pink">US</span>
          </h1>
          
          <p className="font-body text-white/60 text-lg max-w-xl">
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <label className="block font-body text-white/60 text-sm uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-[#141416] border border-white/10 text-white font-body placeholder:text-white/40 focus:border-pink focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="form-field">
                <label className="block font-body text-white/60 text-sm uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-[#141416] border border-white/10 text-white font-body placeholder:text-white/40 focus:border-pink focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="form-field">
                <label className="block font-body text-white/60 text-sm uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="w-full px-6 py-4 bg-[#141416] border border-white/10 text-white font-body placeholder:text-white/40 focus:border-pink focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div className="form-field">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-pink text-black font-display font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-3"
                >
                  {submitted ? (
                    <>Message Sent!</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div ref={infoRef} className="space-y-8">
              <div className="info-item">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-pink" />
                    </div>
                    <div>
                      <p className="font-body text-white/40 text-sm uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:hello@crumbl.example" className="font-body text-white hover:text-pink transition-colors">
                        hello@crumbl.example
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-pink" />
                    </div>
                    <div>
                      <p className="font-body text-white/40 text-sm uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:1-800-CRUMBL-1" className="font-body text-white hover:text-pink transition-colors">
                        1-800-CRUMBL-1
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-pink" />
                    </div>
                    <div>
                      <p className="font-body text-white/40 text-sm uppercase tracking-wider mb-1">Headquarters</p>
                      <p className="font-body text-white">
                        123 Cookie Lane<br />
                        Bakery District, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-white/60">Monday - Saturday</span>
                    <span className="text-white">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-white/60">Sunday</span>
                    <span className="text-white">12:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#141416] border border-white/10 flex items-center justify-center text-white hover:border-pink hover:text-pink transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#141416] border border-white/10 flex items-center justify-center text-white hover:border-pink hover:text-pink transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#141416] border border-white/10 flex items-center justify-center text-white hover:border-pink hover:text-pink transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="info-item p-6 bg-[#141416] border border-white/[0.08]">
                <h4 className="font-display font-bold text-white mb-2">
                  Frequently Asked Questions
                </h4>
                <p className="font-body text-white/50 text-sm mb-4">
                  Find answers to common questions about ordering, shipping, and more.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-pink font-body text-sm hover:underline"
                >
                  View FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
