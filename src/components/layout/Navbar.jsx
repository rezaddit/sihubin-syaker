import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Menu, X } from 'lucide-react';
import logoDisnaker from '../../assets/logo-disnaker.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi buat pindah path (nanti arahin ke /login atau dashboard)
  const handleAuth = () => {
    window.location.href = '/login'; 
  };

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between h-20 items-center">
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3">
          <img src={logoDisnaker} alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
          <div className="leading-none">
            <p className="block font-black text-stone-900 text-base md:text-lg tracking-tight uppercase">
              Sihubin Syaker
            </p>
            <p className="text-[8px] md:text-[10px] font-black text-amber-600 tracking-widest uppercase mt-0.5">
              Disnaker Kota Tangerang
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-xs uppercase tracking-widest text-stone-600">
          <Link to="/" className="hover:text-amber-600 transition">Beranda</Link>
          <a href="#layanan" className="hover:text-amber-600 transition">Pelayanan</a>
          <button 
            onClick={handleAuth}
            className="bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-300 hover:text-black transition shadow-lg flex items-center gap-2 active:scale-95"
          >
            <LogIn size={16} /> Login / Register
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-stone-900 transition-all active:scale-90"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-stone-100 shadow-2xl md:hidden animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-black text-stone-600 uppercase tracking-widest p-2"
            >
              Beranda
            </Link>
            <a 
              href="#layanan" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-black text-stone-600 uppercase tracking-widest p-2"
            >
              Pelayanan
            </a>
            <hr className="border-stone-50" />
            <button 
              onClick={handleAuth}
              className="w-full bg-amber-600 text-white p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
            >
              <LogIn size={18} /> Login / Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;