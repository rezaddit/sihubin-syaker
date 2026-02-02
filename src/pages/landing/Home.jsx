import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { SERVICES } from '../../data/services';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ArticleSection from '../../components/landing/ArticleSection'; // Import di sini
// Assets
import gedungDisnaker from '../../assets/gedung_disnaker.jpeg';
import logoKota from '../../assets/kota-tangerang.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={gedungDisnaker} alt="Gedung Disnaker" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center items-center gap-8 mb-10">
            <img src={logoKota} alt="Logo Kota" className="h-24 md:h-28 w-auto drop-shadow-2xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 uppercase">
            SIHUBIN SYAKER
          </h1>
          <h1 className="text-xl md:text-4xl text-amber-500 font-bold tracking-tight mb-4">
            Sistem Informasi Hubungan Industrial dan Syarat Kerja
          </h1>
          <p className="text-lg text-stone-200 max-w-2xl mx-auto font-light mb-10">
            <span className='font-bold'>Dinas Ketenagakerjaan Kota Tangerang</span>
          </p>
          <a href="#layanan" className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all shadow-lg inline-block">
            Lihat Pelayanan
          </a>
        </div>
      </header>

      {/* Grid Menu Pelayanan */}
      <section id="layanan" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight uppercase">Menu Pelayanan</h2>
          <div className="h-1.5 w-16 bg-amber-500 mt-3 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-stone-500 font-medium">Pilih jenis layanan untuk melihat prosedur dan persyaratan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((item) => {
            // Dinamis panggil icon dari Lucide
            const IconComponent = Icons[item.icon] || Icons.HelpCircle;
            
            return (
              <Link 
                key={item.id} 
                to={`/layanan/${item.id}`}
                className="group p-8 bg-white border border-stone-300 rounded-xl hover:border-amber-500 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-stone-800 group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                  Selengkapnya <Icons.ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ArticleSection />
      <Footer />
    </div>
  );
};

export default Home;