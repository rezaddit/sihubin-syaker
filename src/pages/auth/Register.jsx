import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Building, ArrowLeft, Phone, User, Briefcase, FileText, MapPin, Globe } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState('perusahaan');

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 md:p-12 font-sans">
      <div className="bg-white w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-stone-200">
        
        {/* Header Section */}
        <div className="bg-stone-900 p-8 md:p-10 text-center relative">
          <Link to="/login" className="absolute left-6 top-8 text-stone-400 hover:text-amber-500 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
            Registrasi Akun <span className="text-amber-500">Sihubin Syaker</span>
          </h1>
          <p className="text-stone-400 text-xs mt-3 font-medium tracking-wide">
            Lengkapi formulir di bawah ini dengan data yang valid
          </p>
        </div>

        {/* Form Body */}
        <div className="p-8 md:p-12">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            
            {/* 1. Pemilihan Tipe Akun */}
            <div className="space-y-4">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1">Pilih Tipe Pendaftar</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('perusahaan')}
                  className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all ${role === 'perusahaan' ? 'border-amber-500 bg-amber-50/50' : 'border-stone-100 bg-stone-50'}`}
                >
                  <Briefcase size={24} className={role === 'perusahaan' ? 'text-amber-600' : 'text-stone-400'} />
                  <span className={`text-sm font-bold ${role === 'perusahaan' ? 'text-amber-900' : 'text-stone-600'}`}>Perusahaan</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setRole('pekerja')}
                  className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all ${role === 'pekerja' ? 'border-amber-500 bg-amber-50/50' : 'border-stone-100 bg-stone-50'}`}
                >
                  <User size={24} className={role === 'pekerja' ? 'text-amber-600' : 'text-stone-400'} />
                  <span className={`text-sm font-bold ${role === 'pekerja' ? 'text-amber-900' : 'text-stone-600'}`}>Pekerja</span>
                </button>
              </div>
            </div>

            {/* 2. Informasi Identitas */}
            <div className="space-y-6">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1 border-b border-stone-100 block pb-2 text-stone-600">Informasi Identitas</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="group md:col-span-2">
                  <div className="relative">
                    <Building size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-amber-600 transition-colors" />
                    <input 
                      type="text" 
                      placeholder={role === 'perusahaan' ? "Nama Lengkap Perusahaan" : "Nama Lengkap Sesuai KTP"}
                      className="w-full bg-transparent border-b-2 border-stone-100 py-3 pl-8 focus:outline-none focus:border-amber-500 transition-all font-bold text-stone-600 placeholder:text-stone-400 placeholder:font-normal text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <FileText size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-amber-600 transition-colors" />
                    <input 
                      type="text" 
                      placeholder={role === 'perusahaan' ? "Nomor Induk Berusaha (NIB)" : "NIK (KTP)"}
                      className="w-full bg-transparent border-b-2 border-stone-100 py-3 pl-8 focus:outline-none focus:border-amber-500 transition-all font-bold text-stone-600 placeholder:text-stone-400 placeholder:font-normal text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <Phone size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-amber-600 transition-colors" />
                    <input 
                      type="tel" 
                      placeholder="Nomor Telepon / WhatsApp"
                      className="w-full bg-transparent border-b-2 border-stone-100 py-3 pl-8 focus:outline-none focus:border-amber-500 transition-all font-bold text-stone-600 placeholder:text-stone-400 placeholder:font-normal text-sm"
                    />
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <div className="relative">
                    <MapPin size={18} className="absolute left-0 top-3 text-stone-300 group-focus-within:text-amber-600 transition-colors" />
                    <textarea 
                      placeholder="Alamat Lengkap (Domisili Tangerang)"
                      rows="2"
                      className="w-full bg-transparent border-b-2 border-stone-100 py-2 pl-8 focus:outline-none focus:border-amber-500 transition-all font-bold text-stone-600 placeholder:text-stone-400 placeholder:font-normal text-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Akun Login */}
            <div className="space-y-6">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1 border-b border-stone-100 block pb-2 text-stone-600">Kredensial Akun</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group md:col-span-2">
                  <div className="relative">
                    <Mail size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-amber-600 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="Alamat Email Aktif"
                      className="w-full bg-transparent border-b-2 border-stone-100 py-3 pl-8 focus:outline-none focus:border-amber-500 transition-all font-bold text-stone-600 placeholder:text-stone-400 placeholder:font-normal text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <Lock size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-amber-600 transition-colors" />
                    <input 
                      type="password" 
                      placeholder="Buat Password"
                      className="w-full bg-transparent border-b-2 border-stone-100 py-3 pl-8 focus:outline-none focus:border-amber-500 transition-all font-bold text-stone-600 placeholder:text-stone-400 placeholder:font-normal text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <Lock size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-amber-600 transition-colors" />
                    <input 
                      type="password" 
                      placeholder="Konfirmasi Password"
                      className="w-full bg-transparent border-b-2 border-stone-100 py-3 pl-8 focus:outline-none focus:border-amber-500 transition-all font-bold text-stone-600 placeholder:text-stone-400 placeholder:font-normal text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Submit */}
            <div className="flex flex-col items-center gap-6 pt-4">
              <button className="bg-stone-900 text-white px-16 py-4 rounded-lg font-bold text-sm hover:bg-amber-600 transition-all shadow-xl active:scale-95 w-full md:w-fit">
                Selesaikan Registrasi
              </button>
              <p className="text-xs font-medium text-stone-500">
                Sudah punya akun? <Link to="/login" className="text-amber-600 font-bold hover:underline">Masuk portal</Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;