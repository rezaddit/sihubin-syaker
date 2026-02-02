import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import gedungDisnaker from '../../assets/gedung_disnaker.jpeg';
import logoDisnaker from '../../assets/logo-disnaker.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 md:p-6 font-sans">
      <div className="bg-white w-full max-w-5xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl border border-stone-200 min-h-[550px]">
        
        {/* Sisi Kiri (50%) */}
        <div className="hidden md:flex md:w-1/2 relative bg-stone-900 overflow-hidden items-center justify-center">
          
          {/* BACKGROUND DECORATION (Subtle) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
          
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-16">
            
            {/* BACK BUTTON */}
            <Link to="/" className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] hover:text-amber-500 transition-all group w-fit">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Beranda
            </Link>
            
            {/* TEXT CONTENT */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">              
              <h2 className="text-white text-6xl font-black leading-none tracking-tighter">
                Sihubin<br />
                <span className="text-amber-500">Syaker.</span>
              </h2>
              
              <div className="h-1 w-16 bg-amber-500 mt-8 rounded-full"></div>
              
              <div className="mt-10">
                <p className="text-stone-400 text-sm font-bold leading-relaxed max-w-xs uppercase tracking-tight">
                  Dinas Ketenagakerjaan<br />Kota Tangerang
                </p>
              </div>
            </div>

            {/* FOOTER KECIL */}
            <p className="text-[9px] text-stone-700 font-black uppercase tracking-[0.3em]">
              v.1.0.2 • 2026
            </p>
          </div>
        </div>

        {/* Sisi Kanan (50%) */}
        <div className="md:w-1/2 p-8 md:p-16 bg-white flex flex-col justify-center relative">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-stone-900">Login</h1>
            <p className="text-stone-500 text-sm mt-2 font-medium">Masuk ke portal layanan Anda</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              {/* Input Email */}
              <div className="group">
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors" size={20} />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-b-2 border-stone-200 py-4 pl-9 pr-4 focus:outline-none focus:border-amber-500 transition-all font-semibold text-stone-900 placeholder:text-stone-400 placeholder:font-medium"
                  />
                </div>
              </div>

              {/* Input Password */}
              <div className="group">
                <div className="relative">
                  <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors" size={20} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password"
                    className="w-full bg-transparent border-b-2 border-stone-200 py-4 pl-9 pr-12 focus:outline-none focus:border-amber-500 transition-all font-semibold text-stone-900 placeholder:text-stone-400 placeholder:font-medium"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-amber-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Link Lupa Password - Di ATAS tombol */}
            <div className="flex">
              <a href="#" className="text-xs font-bold text-stone-600 hover:text-amber-600 transition-colors">
                Lupa password?
              </a>
            </div>

            {/* Button & Link Daftar - Di BAWAH tombol */}
            <div className="flex flex-col items-end gap-6">
              <button 
                onClick={() => {
                  // Arahkan ke dashboard (sesuaikan dengan path dashboard lu, misal /dashboard)
                  window.location.href = '/dashboard'; 
                }}
                className="bg-amber-600 text-white px-12 py-4 rounded-[1.2rem] font-black text-[11px] uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-stone-900 transition-all shadow-xl shadow-stone-200 active:scale-95 w-full md:w-fit"
              >
                Login
              </button>
              
              <div className="flex flex-col items-end gap-1">
                <p className="text-xs font-medium text-stone-600">
                  Belum memiliki akun?
                </p>
                <Link 
                  to="/register" 
                  className="text-sm font-bold text-amber-600 hover:text-stone-900 transition-all border-b border-amber-600 pb-0.5"
                >
                  Daftar Akun
                </Link>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;