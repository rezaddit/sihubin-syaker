import { useState } from 'react';
import { 
  LayoutDashboard, Home, FilePlus, Activity, LogOut, 
  Bell, Menu, X, User, ChevronDown, CheckCircle, RefreshCw, 
  FileText, HelpCircle, Building2, Mail, Phone, MapPin, Search
} from 'lucide-react';
import logoDisnaker from '../../assets/logo-disnaker.png';

// --- 1. KOMPONEN BERANDA (OVERVIEW) ---
const OverviewView = ({ navigateTo }) => (
  <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 text-left">
    <div>
      <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-zinc-900">Dashboard Utama</h2>
      <p className="text-xs lg:text-sm text-zinc-500 mt-1 font-medium italic">Ringkasan aktivitas pelaporan perusahaan Anda.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      {[
        { l: 'Total Laporan', v: '12', icon: <FileText size={20} />, c: 'text-zinc-900' },
        { l: 'Sedang Proses', v: '03', icon: <RefreshCw size={20} />, c: 'text-amber-600' },
        { l: 'Laporan Selesai', v: '09', icon: <CheckCircle size={20} />, c: 'text-zinc-900' }
      ].map((s, i) => (
        <div key={i} className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">{s.l}</p>
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl border border-zinc-100 flex items-center justify-center bg-zinc-50 text-zinc-400">
              {s.icon}
            </div>
            <h3 className={`text-4xl font-bold tracking-tighter ${s.c}`}>{s.v}</h3>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold tracking-tighter mb-1">Butuh Pelaporan Baru?</h3>
        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Segera lengkapi berkas dan ajukan secara digital.</p>
      </div>
      <button 
        onClick={() => navigateTo('create')}
        className="bg-amber-500 text-zinc-900 px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-amber-400 transition active:scale-95"
      >
        Mulai Sekarang
      </button>
    </div>
  </div>
);

// --- 2. KOMPONEN PROFIL PERUSAHAAN (MODERN & UPDATABLE) ---
const ProfileView = () => (
  <div className="max-w-4xl mx-auto space-y-6 text-left animate-in fade-in duration-500 pb-20">
    
    {/* Header Profile dengan Tombol Update */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 lg:p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-amber-500 shadow-lg shadow-zinc-200">
          <Building2 size={32} />
        </div>
        <div>
          <h2 className="text-xl font-black tracking-tight text-zinc-900">PT Maju Jaya Bersama</h2>
        </div>
      </div>
      
      <button className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition active:scale-95 shadow-xl shadow-zinc-200">
        <RefreshCw size={14} className="text-amber-500" /> Update Profil
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Kolom Kiri: Legalitas */}
      <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-sm group hover:border-amber-200 transition-colors">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-50 pb-4 mb-6 flex items-center gap-2">
          <FileText size={14} className="text-amber-500" /> Informasi Legalitas
        </h3>
        <div className="space-y-6">
          {[
            { l: 'Nama Legalitas', v: 'PT Maju Jaya Bersama' },
            { l: 'Nomor Induk Berusaha (NIB)', v: '01234567891011' },
            { l: 'Email Korespondensi', v: 'admin@majujaya.co.id' },
            { l: 'Nomor Telepon', v: '+62 21 555 1234' }
          ].map((item, i) => (
            <div key={i} className="group/item">
              <label className="text-[9px] font-black text-zinc-400 uppercase tracking-wider block mb-1.5">{item.l}</label>
              <p className="text-sm font-bold text-zinc-800 tracking-tight leading-none">{item.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kolom Kanan: Alamat & Map */}
      <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-sm group hover:border-amber-200 transition-colors">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-50 pb-4 mb-6 flex items-center gap-2">
          <MapPin size={14} className="text-amber-500" /> Domisili Perusahaan
        </h3>
        <div className="space-y-6">
          <div>
            <label className="text-[9px] font-black text-zinc-400 uppercase tracking-wider block mb-1.5">Alamat Lengkap</label>
            <p className="text-sm font-bold text-zinc-800 leading-relaxed">
              Jl. Jenderal Sudirman Kav. 52-53, Senayan, Jakarta Selatan, DKI Jakarta 12190
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
);

// --- 3. KOMPONEN BUAT LAPORAN (FULL CATEGORIES) ---
const CreateReportView = () => {
  const [jenis, setJenis] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState({});

  const categories = [
    { id: 'pkwt', label: 'Pendaftaran Kontrak Kerja (PKWT)' },
    { id: 'phi', label: 'Perselisihan Hubungan Industrial (PHI)' },
    { id: 'phk', label: 'Pelaporan PHK (Kolektif/Perorangan)' },
    { id: 'sp_sb', label: 'Pencatatan Serikat Pekerja / Buruh' },
    { id: 'lks', label: 'Pencatatan LKS Bipartit' },
  ];

  const docs = {
    phk: ["Surat Pemberitahuan PHK", "Risalah Perundingan Bipartit", "Perjanjian Bersama (PB)", "Bukti Transfer Pesangon"],
    pkwt: ["Draft Kontrak Kerja (PKWT)", "Fotokopi KTP Karyawan", "Wajib Lapor (WLKP)"],
    phi: ["Kronologis Kejadian", "Bukti Undangan Bipartit", "Risalah Gagal Sepakat", "Dokumen Pendukung"],
    sp_sb: ["AD/ART Serikat", "Daftar Pengurus", "Berita Acara Pembentukan", "Daftar Anggota"],
    lks: ["Surat Permohonan LKS", "Susunan Pengurus LKS", "Berita Acara LKS", "Fotokopi BPJS"]
  };

  const handleSelect = (id) => {
    setJenis(id);
    setIsOpen(false);
    setFiles({});
  };

  const needsExcel = jenis === 'phk' || jenis === 'pkwt';

  return (
    <div className="max-w-3xl mx-auto space-y-6 text-left animate-in fade-in duration-500 pb-20">
      <div className="px-1">
        <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-zinc-900">Buat Laporan Baru</h2>
        <p className="text-[11px] text-zinc-500 mt-1 font-medium italic">Pilih jenis pelaporan untuk memuat formulir.</p>
      </div>
      
      <div className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-sm overflow-hidden">
        {/* DROPDOWN KATEGORI */}
        <div className="p-6 lg:p-8 border-b border-zinc-100 bg-zinc-50/50">
          <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 block px-1">
            01. Kategori Pelaporan
          </label>
          
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full flex items-center justify-between bg-white border ${isOpen ? 'border-amber-500 ring-4 ring-amber-500/10' : 'border-zinc-200'} rounded-2xl p-4 text-sm font-bold text-zinc-700 transition-all active:scale-[0.98] shadow-sm`}
            >
              <span className={!jenis ? 'text-zinc-400 font-medium' : 'text-zinc-900'}>
                {categories.find(c => c.id === jenis)?.label || 'Pilih Pelaporan'}
              </span>
              <ChevronDown size={20} className={`text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                <ul className="absolute z-20 w-full mt-2 bg-white border border-zinc-100 rounded-2xl shadow-2xl py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleSelect(cat.id)}
                        className={`w-full text-left px-5 py-4 text-xs font-bold transition-colors
                          ${jenis === cat.id ? 'bg-amber-50 text-amber-600' : 'text-zinc-600 hover:bg-zinc-50'}`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* KONDISI: SUDAH PILIH VS BELUM PILIH */}
        {jenis ? (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Box Excel buat PHK & PKWT */}
            {needsExcel && (
              <div className="p-6 lg:p-8 border-b border-zinc-100">
                <div className="flex justify-between items-center mb-4 px-1">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">02. Data Karyawan (.xlsx)</label>
                  <button className="text-[9px] font-bold text-amber-600 hover:underline">TEMPLATE</button>
                </div>
                <div className="p-8 border-2 border-dashed border-zinc-200 rounded-[2rem] bg-zinc-50 flex flex-col items-center justify-center group hover:border-amber-400 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                    <FilePlus size={20} className="text-amber-500" />
                  </div>
                  <p className="text-xs font-bold text-zinc-700">Lampirkan List Excel</p>
                </div>
              </div>
            )}

            {/* List Dokumen PDF */}
            <div className="p-6 lg:p-8 space-y-6">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block px-1">
                {needsExcel ? '03.' : '02.'} Dokumen Persyaratan (PDF)
              </label>
              <div className="grid gap-3">
                {docs[jenis].map((d, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-zinc-100 bg-white hover:shadow-sm transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-[10px] font-bold text-zinc-300 italic">
                        {i + 1}
                      </div>
                      <span className="text-xs font-bold text-zinc-600 leading-tight">{d}</span>
                    </div>
                    <button className="bg-zinc-900 text-white px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest active:scale-90 transition-all">
                      Upload
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-6 lg:p-8 bg-zinc-50/80 border-t border-zinc-100">
              <button className="w-full bg-amber-500 text-zinc-900 py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-500/20 active:scale-[0.97] transition-all">
                Kirim Laporan
              </button>
            </div>
          </div>
        ) : (
          /* STATE: MENUNGGU KATEGORI */
          <div className="p-24 flex flex-col items-center justify-center text-center animate-pulse">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-4 border border-zinc-100">
              <Activity size={32} strokeWidth={1.5} className="text-zinc-200" />
            </div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">Menunggu Kategori</h4>
            <p className="text-[9px] font-bold text-zinc-300 mt-2 italic px-10">
              Formulir persyaratan akan muncul otomatis setelah kategori dipilih
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 4. KOMPONEN STATUS LAPORAN (TABLE) ---
const StatusReportView = () => (
  <div className="space-y-6 text-left animate-in fade-in duration-500">
    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-zinc-900">Status Monitoring</h2>
        <p className="text-xs text-zinc-500 mt-1 font-medium italic">Pantau progres pengajuan Anda.</p>
      </div>
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
        <input type="text" placeholder="Cari tiket..." className="bg-white border border-zinc-200 pl-9 pr-4 py-2 rounded-lg text-xs font-bold outline-none focus:border-amber-500 w-full sm:w-48" />
      </div>
    </div>

    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 border-b border-zinc-100">
              <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-zinc-400 w-16">No.</th>
              <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-zinc-400">Jenis Laporan</th>
              <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-zinc-400">ID Tiket</th>
              <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-zinc-400">Tgl Lapor</th>
              <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-zinc-400 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {[
              { id: 'HI-9921', t: 'Pelaporan PHK', d: '01/02/2026', s: 'Verifikasi', st: 'process' },
              { id: 'HI-9910', t: 'Pendaftaran PP', d: '28/01/2026', s: 'Selesai', st: 'done' },
              { id: 'HI-9855', t: 'Pendaftaran PKB', d: '15/01/2026', s: 'Selesai', st: 'done' },
            ].map((item, idx) => (
              <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 text-xs font-bold text-zinc-400">{idx + 1}.</td>
                <td className="px-6 py-4 text-xs font-bold text-zinc-800">{item.t}</td>
                <td className="px-6 py-4 text-[10px] font-bold text-zinc-400 uppercase">#{item.id}</td>
                <td className="px-6 py-4 text-xs font-bold text-zinc-500">{item.d}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1.5 rounded-lg text-[8px] font-bold uppercase tracking-widest ${item.st === 'done' ? 'bg-zinc-900 text-white' : 'bg-amber-500 text-zinc-900'}`}>
                    {item.s}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// --- 5. KOMPONEN BANTUAN ---
const HelpView = () => (
  <div className="max-w-3xl mx-auto space-y-6 text-left animate-in fade-in duration-500">
    <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-zinc-900">Pusat Bantuan</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { q: 'Cara lapor PHK?', a: 'Pilih menu Buat Laporan, pilih kategori PHK, lalu unggah file PDF yang diminta.' },
        { q: 'Status Verifikasi lama?', a: 'Proses verifikasi manual memakan waktu maksimal 3x24 jam hari kerja.' },
        { q: 'Salah unggah dokumen?', a: 'Jika status masih Proses, silakan hubungi admin via chat bantuan.' },
        { q: 'Format file yang didukung?', a: 'Saat ini sistem hanya menerima dokumen dalam format PDF saja.' }
      ].map((item, i) => (
        <div key={i} className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
          <h4 className="text-[10px] font-bold uppercase text-amber-600 mb-2 tracking-widest">{item.q}</h4>
          <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- MAIN DASHBOARD WRAPPER ---
const UserDashboard = () => {
  const [view, setView] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (v) => {
    setView(v);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Pindah ke path / secara native
    window.location.href = '/'; 
  };

  return (
    <div className="flex h-screen overflow-hidden text-zinc-900 bg-[#f4f4f5] font-['Inter'] antialiased">
      
      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-zinc-200 flex flex-col transition-transform duration-300 transform
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 shrink-0
      `}>
        <div className="p-6 flex items-center justify-between">
          {/* LOGO SECTION */}
          <div className="flex items-center gap-3 px-1">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <img 
                src={logoDisnaker}
                alt="Logo Disnaker" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter uppercase leading-none text-zinc-900">
                SIHUBIN
              </span>
              <span className="text-sm font-black tracking-tighter uppercase leading-none text-amber-500">
                SYAKER
              </span>
            </div>
          </div>

          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden text-zinc-400">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="px-3 text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-3">Main Menu</p>
          <button 
            onClick={() => navigateTo('overview')} 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition ${view === 'overview' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-100'}`}
          >
            <Home size={16} /> Beranda
          </button>
          
          <button 
            onClick={() => navigateTo('profile')} 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition ${view === 'profile' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-100'}`}
          >
            <User size={16} /> Profil Perusahaan
          </button>
          
          <div className="my-4 border-t border-zinc-400 mx-3"></div>
          
          <p className="px-3 text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-3">Pelayanan</p>
          <button 
            onClick={() => navigateTo('create')} 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition ${view === 'create' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'text-zinc-500 hover:bg-zinc-100'}`}
          >
            <FilePlus size={16} /> Buat Laporan
          </button>
          <button 
            onClick={() => navigateTo('status')} 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition ${view === 'status' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-100'}`}
          >
            <Activity size={16} /> Status Laporan
          </button>

          <div className="my-4 border-t border-zinc-400 mx-3"></div>
          
          <button 
            onClick={() => navigateTo('help')} 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition ${view === 'help' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-100'}`}
          >
            <HelpCircle size={16} /> Bantuan
          </button>
        </nav>

        <div className="p-4 border-t border-zinc-100">
          <button 
            onClick={handleLogout}
            className="w-full bg-zinc-50 p-4 rounded-2xl flex items-center justify-between text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-all duration-300 group shadow-sm hover:shadow-red-100"
          >
            <span className="font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
              Logout
            </span>
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all">
              <LogOut size={16} />
            </div>
          </button>
        </div>

      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <header className="h-14 bg-white border-b border-zinc-200 px-4 lg:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-1 text-zinc-600">
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex text-[10px] font-bold text-zinc-400 gap-2 uppercase tracking-tighter">
              <span>Dashboard</span> / <span className="text-zinc-900">{view}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 px-2 py-1 rounded">V.1.0.2</span>
            <Bell size={16} className="text-zinc-400 cursor-pointer hover:text-zinc-900" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {view === 'overview' && <OverviewView navigateTo={navigateTo} />}
            {view === 'profile' && <ProfileView />}
            {view === 'create' && <CreateReportView />}
            {view === 'status' && <StatusReportView />}
            {view === 'help' && <HelpView />}
          </div>
          
          {/* FOOTER (NON-STICKY) */}
          <footer className="mt-20 pb-10 border-t border-zinc-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-tight opacity-60">
                 SIHUBIN SYAKER © 2026 <br />Dinas Ketenagakerjaan Kota Tangerang
                </p>
              </div>
            </div>
          </footer>

        </div>


      </main>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </div>
  );
};

export default UserDashboard;