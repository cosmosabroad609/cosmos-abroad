import React, { useState } from 'react';
import { 
  GraduationCap, 
  Globe, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen, 
  FileText, 
  Home, 
  Plane,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo Area */}
            <div className="flex items-center gap-2">
              <div className="bg-blue-900 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900 tracking-tight">
                COSMOS <span className="text-blue-600">ABROAD CONSULTANTS</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Destinations', 'Services', 'About', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-900 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors"
              >
                Get Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4 px-6">
              {['Destinations', 'Services', 'About', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-600 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-blue-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Background Pattern/Image placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" 
              alt="University Campus" 
              className="w-full h-full object-cover opacity-60"
            />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Your Journey to <br/>
            <span className="text-blue-300">World-Class Education</span> Starts Here
          </h1>
          
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Expert guidance for studying in UK, Germany, France, Europe, Dubai, and Singapore.
            We turn your global aspirations into reality.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            {[
              { label: "Experience", value: "15+ Years" },
              { label: "Students Placed", value: "10,000+" },
              { label: "Partner Unis", value: "500+" },
              { label: "Visa Success", value: "98%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </header>

      {/* --- DESTINATIONS SECTION --- */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Study Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have direct tie-ups with top universities across the globe to offer you the best choices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Cards */}
            {[
              { country: "United Kingdom", count: "150+", desc: "Rich academic heritage & short duration masters.", flag: "🇬🇧" },
              { country: "Germany", count: "80+", desc: "Tuition-free world-class technical education.", flag: "🇩🇪" },
              { country: "France", count: "70+", desc: "Excellence in arts, business, and engineering.", flag: "🇫🇷" },
              { country: "Europe", count: "200+", desc: "Diverse, affordable, and culturally rich.", flag: "🇪🇺" },
              { country: "Dubai", count: "30+", desc: "Emerging global education hub closer to home.", flag: "🇦🇪" },
              { country: "Singapore", count: "25+", desc: "Asia’s top globally recognized destination.", flag: "🇸🇬" },
            ].map((dest, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="text-5xl mb-4">{dest.flag}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{dest.country}</h3>
                <div className="flex items-center gap-2 mb-4 text-blue-600 font-medium bg-blue-50 w-fit px-3 py-1 rounded-full text-sm">
                  <GraduationCap className="w-4 h-4" />
                  {dest.count} Partner Universities
                </div>
                <p className="text-gray-600 mb-6">{dest.desc}</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-700 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1"
                >
                  Explore Programs &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive support from counseling to landing.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="w-8 h-8 text-blue-600"/>, title: "University Selection", desc: "Profiling based on budget, academics & career goals." },
              { icon: <FileText className="w-8 h-8 text-green-600"/>, title: "Application Support", desc: "Expert help with SOPs, LORs, and documentation." },
              { icon: <CheckCircle className="w-8 h-8 text-purple-600"/>, title: "Visa Assistance", desc: "Mock interviews and financial document guidance." },
              { icon: <Home className="w-8 h-8 text-orange-600"/>, title: "Accommodation", desc: "Pre-departure support and housing assistance." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               {/* Visual Placeholder for About Image */}
               <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                alt="Counseling Session" 
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-yellow-400">Why Choose COSMOS?</h2>
              <p className="text-lg text-blue-100">
                With over <span className="font-bold text-white">15+ years of experience</span>, we are more than just consultants; we are career architects.
              </p>
              <ul className="space-y-4">
                {[
                  "Certified counselors providing one-on-one guidance",
                  "Direct representation of international universities",
                  "Complete scholarship and financial planning support",
                  "Pre-departure briefing & post-landing assistance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Journey Today</h2>
              <p className="text-gray-600 mb-8">
                Ready to take the next step? Contact us for a free consultation or simply scan the QR code to chat with us on WhatsApp.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-bold text-gray-900">+91 7892498901</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-bold text-gray-900">info@cosmoseducation.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Visit Us</p>
                    <p className="font-bold text-gray-900">123 Education Street, City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Card */}
            <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-2xl border-2 border-green-100 text-center">
              <div className="w-48 h-48 bg-white p-2 rounded-xl shadow-sm mb-6 flex items-center justify-center">
                {/* PLACEHOLDER FOR QR CODE 
                   Replace src below with your actual WhatsApp QR Code image
                */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/917892498901" 
                  alt="WhatsApp QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scan to Chat</h3>
              <p className="text-green-700 mb-6 text-sm">
                Open your camera or WhatsApp to scan this code and chat with our counselors instantly.
              </p>
              <a 
                href="https://wa.me/917892498901" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition"
              >
                <MessageCircleIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} COSMOS Abroad Consultants. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

// Simple Icon Component for the button (since Lucide MessageCircle isn't always default exported nicely in all versions)
const MessageCircleIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default App;