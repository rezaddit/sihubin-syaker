import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, GitPullRequest, ExternalLink } from 'lucide-react';
import { SERVICES } from '../../data/services';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// Assets
import gedungDisnaker from '../../assets/gedung_disnaker.jpeg';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  const steps = [
    {
      title: "Persiapan Dokumen",
      desc: "Siapkan file PDF berupa surat pemberitahuan, tanda terima, dan bukti kesepakatan atau risalah perundingan sesuai ketentuan yang berlaku."
    },
    {
      title: "Pengisian Form Digital",
      desc: "Klik tombol lapor dan isi data perusahaan, data pekerja terkait, serta alasan sesuai dengan kategori yang tersedia di sistem SIHUBIN."
    },
    {
      title: "Verifikasi & Validasi",
      desc: "Petugas mediator Hubungan Industrial akan memeriksa dokumen Anda. Anda akan menerima notifikasi jika laporan telah diverifikasi atau butuh perbaikan."
    },
    {
      title: "Penerbitan Bukti Lapor",
      desc: "Unduh tanda terima pelaporan resmi dari Disnaker Kota Tangerang sebagai syarat pengajuan prosedur selanjutnya ke instansi terkait."
    }
  ];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-stone-500">
        Layanan tidak ditemukan...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans">
      <Navbar />
      
      {/* Header / Hero Section */}
      <header className="relative py-16 md:py-24 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={gedungDisnaker} alt="Gedung Disnaker" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Kembali ke Beranda
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight max-w-4xl">
            {service.title}
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed text-base md:text-lg font-medium">
            {service.desc}
          </p>
        </div>
      </header>

      {/* Konten Utama */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          
          {/* Sisi Kiri: Sticky cuma di Desktop */}
          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200 shadow-sm">
              <GitPullRequest className="w-7 h-7 text-amber-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 leading-tight uppercase tracking-tighter">
              Alur Pelayanan<br className="hidden md:block" /> {service.title}
            </h2>
            <p className="text-stone-500 mt-4 md:mt-6 leading-relaxed font-medium text-sm md:text-base">
              Ikuti tahapan berikut untuk menyelesaikan proses pelaporan secara resmi melalui sistem kami.
            </p>
            
            <Link 
              to="/login"
              className="mt-8 md:mt-10 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-3 uppercase tracking-wider text-xs w-full md:w-fit"
            >
              Mulai Lapor Sekarang <ExternalLink size={16} />
            </Link>
          </div>

          {/* Sisi Kanan: Step by Step */}
          <div className="w-full md:w-2/3 space-y-10 md:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 md:gap-10 group">
                <div className="flex-none">
                  {/* Circle number dengan radius tipis sesuai request */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-[3px] border-stone-100 group-hover:border-amber-500 flex items-center justify-center text-xl md:text-2xl font-black text-stone-300 group-hover:text-amber-600 transition-all duration-300">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`w-full ${index === steps.length - 1 ? 'border-t border-stone-100 pt-8 md:pt-10' : ''}`}>
                  <h3 className="text-xl md:text-2xl font-extrabold text-stone-800 mb-2 md:mb-4 tracking-tight uppercase">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm md:text-base leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;