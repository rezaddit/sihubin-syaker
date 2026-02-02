import { Mail, Phone, MapPin, Instagram, Globe, Facebook } from 'lucide-react';
import logoDisnaker from '../../assets/logo-disnaker.png';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoDisnaker} alt="Logo" className="h-12 w-auto brightness-0 invert" />
              <div className="leading-none text-white">
                <span className="block font-black text-xl tracking-tighter uppercase">SIHUBIN SYAKER</span>
                <span className="text-[10px] font-bold text-amber-500 tracking-[0.3em] uppercase">Kota Tangerang</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 font-medium">
              Sistem Informasi Hubungan Industrial Dinas Ketenagakerjaan Kota Tangerang. Mewujudkan hubungan industrial yang harmonis, dinamis, dan berkeadilan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-amber-600 hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-amber-600 hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-lg hover:bg-amber-600 hover:text-white transition">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Menu Navigasi</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="/" className="hover:text-amber-500 transition">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-amber-500 transition">Pelayanan</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Pusat Bantuan</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span>Jl. Perintis Kemerdekaan No.1, <br /> Kota Tangerang, Banten</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>(021) 5523312</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>disnaker@tangerangkota.go.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500">
            &copy; 2026 DISNAKER KOTA TANGERANG. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;