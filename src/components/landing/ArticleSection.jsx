import { ArrowRight, Calendar, User } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "Panduan Lengkap Program Jaminan Kehilangan Pekerjaan (JKP)",
    category: "Edukasi",
    date: "12 Jan 2026",
    author: "Admin Disnaker",
    // Foto orang lagi jabat tangan/kontrak kerja
    image: "https://plus.unsplash.com/premium_photo-1661405797065-28acf83baa9a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Tips Membangun Hubungan Industrial yang Harmonis di Perusahaan",
    category: "Tips",
    date: "25 Jan 2026",
    author: "Mediator HI",
    // Foto meeting kantor yang santai/harmonis
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Sosialisasi Peraturan Perusahaan Sesuai UU Cipta Kerja Terbaru",
    category: "Berita",
    date: "01 Feb 2026",
    author: "Bidang HI",
    // Foto dokumen/palu sidang/hukum
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  }
];

const ArticleSection = () => {
  return (
    <section id="artikel" className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight uppercase">Artikel & Informasi</h2>
            <div className="h-1.5 w-16 bg-amber-500 mt-3 rounded-full"></div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-amber-600 uppercase tracking-widest hover:gap-3 transition-all">
            Lihat Semua <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ARTICLES.map((post) => (
            <article key={post.id} className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {post.category}
                </span>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-stone-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-stone-800 mb-4 group-hover:text-amber-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2 italic font-medium">
                  Pelajari lebih lanjut mengenai prosedur dan aturan terbaru yang berlaku di wilayah Kota Tangerang...
                </p>
                
                <button className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-900 group-hover:text-amber-600 transition-colors flex items-center gap-2">
                  Baca Detail <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;