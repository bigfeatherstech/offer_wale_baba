import React, { useState } from 'react';
import { X, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import Login from './Login';
import Register from './Register';
import LOGO from '../../assets/logo.jpg';

const LogRegister = ({ isOpen, onClose, onLoginSuccess }) => {
    const [mode, setMode] = useState('login');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-500">
            <div className="relative w-full max-w-5xl bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:row-reverse md:flex-row overflow-hidden max-h-[95vh]">
                
                <button onClick={onClose} className="absolute top-6 right-6 z-[110] p-2 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full">
                    <X size={24} />
                </button>

                {/* LEFT SIDE: BRANDING */}
                <div className="hidden md:flex flex-1 p-12 bg-gradient-to-br from-[#121212] to-black flex-col justify-center relative overflow-hidden border-r border-white/5">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#f7a221]/10 blur-[120px] rounded-full"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-10">
                            <img src={LOGO} alt="Logo" className="h-12 w-auto rounded-xl border border-white/10" />
                            <h2 className="text-3xl font-black text-white  tracking-tighter">
                                OFFERWALE<span className="text-[#f7a221]">BABA</span>
                            </h2>
                        </div>

                        <h3 className="text-2xl text-gray-300 mb-10 font-medium leading-tight">
                            The secret portal for <span className="text-[#f7a221] font-black underline underline-offset-4">Viral Gadgets</span> at factory prices.
                        </h3>

                        <div className="space-y-8">
                            {[
                                { icon: <Zap size={20} />, title: "Hyper Deals", desc: "Prices that make retailers cry." },
                                { icon: <ShieldCheck size={20} />, title: "Baba Verified", desc: "Quality checks on every loot." },
                                { icon: <Sparkles size={20} />, title: "VIP Access", desc: "Members get deals 15m earlier." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5">
                                    <div className="p-3 rounded-2xl bg-[#f7a221]/10 text-[#f7a221] border border-[#f7a221]/20">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-white font-black uppercase tracking-widest text-xs">{item.title}</p>
                                        <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: FORM WRAPPER */}
                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-[#0d0d0d] relative">
                    <div className="max-w-md mx-auto w-full flex flex-col h-full">
                        
                        {/* SWAP BETWEEN LOGIN AND REGISTER */}
                        <div className="flex-grow flex items-center">
                            {mode === 'login' ? 
                                <Login onLoginSuccess={onLoginSuccess} /> : 
                                <Register onRegisterSuccess={onLoginSuccess} />
                            }
                        </div>

                        {/* BOTTOM TOGGLE SWITCH */}
                        <div className="mt-8 pt-6 border-t border-white/5 text-center">
                            {mode === 'login' ? (
                                <p className="text-gray-500 text-sm">
                                    Don't have an account?{' '}
                                    <button 
                                        onClick={() => setMode('register')}
                                        className="text-[#f7a221] font-black uppercase tracking-tighter hover:underline"
                                    >
                                        Create it now
                                    </button>
                                </p>
                            ) : (
                                <p className="text-gray-500 text-sm">
                                    Already have an account?{' '}
                                    <button 
                                        onClick={() => setMode('login')}
                                        className="text-[#f7a221] font-black uppercase tracking-tighter hover:underline"
                                    >
                                        Login here
                                    </button>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogRegister;


// import React, { useState } from 'react';
// import { X, Zap, ShieldCheck, Sparkles } from 'lucide-react';
// import Login from './Login';
// import Register from './Register';
// import LOGO from '../../assets/logo.jpg';

// const LogRegister = ({ isOpen, onClose }) => {
//     const [mode, setMode] = useState('login'); // 'login' or 'register'

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-500">
//             <div className="relative w-full max-w-5xl bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:row-reverse md:flex-row overflow-hidden max-h-[95vh]">
                
//                 {/* CLOSE BUTTON */}
//                 <button onClick={onClose} className="absolute top-6 right-6 z-[110] p-2 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full">
//                     <X size={24} />
//                 </button>

//                 {/* LEFT SIDE: BRANDING (Shared) */}
//                 <div className="hidden md:flex flex-1 p-12 bg-gradient-to-br from-[#121212] to-black flex-col justify-center relative overflow-hidden border-r border-white/5">
//                     <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#f7a221]/10 blur-[120px] rounded-full"></div>
                    
//                     <div className="relative z-10">
//                         <div className="flex items-center gap-3 mb-10">
//                             <img src={LOGO} alt="Logo" className="h-12 w-auto rounded-xl border border-white/10" />
//                             <h2 className="text-3xl font-black text-white italic tracking-tighter">
//                                 OFFERWALE<span className="text-[#f7a221]">BABA</span>
//                             </h2>
//                         </div>

//                         <h3 className="text-2xl text-gray-300 mb-10 font-medium leading-tight">
//                             The secret portal for <span className="text-[#f7a221] font-black underline underline-offset-4">Viral Gadgets</span> at factory prices.
//                         </h3>

//                         <div className="space-y-8">
//                             {[
//                                 { icon: <Zap size={20} />, title: "Hyper Deals", desc: "Prices that make retailers cry." },
//                                 { icon: <ShieldCheck size={20} />, title: "Baba Verified", desc: "Quality checks on every loot." },
//                                 { icon: <Sparkles size={20} />, title: "VIP Access", desc: "Members get deals 15m earlier." }
//                             ].map((item, i) => (
//                                 <div key={i} className="flex items-center gap-5">
//                                     <div className="p-3 rounded-2xl bg-[#f7a221]/10 text-[#f7a221] border border-[#f7a221]/20">
//                                         {item.icon}
//                                     </div>
//                                     <div>
//                                         <p className="text-white font-black uppercase tracking-widest text-xs">{item.title}</p>
//                                         <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDE: FORM WRAPPER */}
//                 <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-[#0d0d0d] relative">
//                     <div className="max-w-md mx-auto w-full flex flex-col h-full">
                        
//                         {/* THE SWAP ENGINE */}
//                         <div className="flex-grow flex items-center">
//                             {mode === 'login' ? <Login /> : <Register />}
//                         </div>

//                         {/* BOTTOM TOGGLE SWITCH */}
//                         <div className="mt-8 pt-6 border-t border-white/5 text-center">
//                             {mode === 'login' ? (
//                                 <p className="text-gray-500 text-sm">
//                                     Don't have an account?{' '}
//                                     <button 
//                                         onClick={() => setMode('register')}
//                                         className="text-[#f7a221] font-black uppercase tracking-tighter hover:underline"
//                                     >
//                                         Create it now
//                                     </button>
//                                 </p>
//                             ) : (
//                                 <p className="text-gray-500 text-sm">
//                                     Already have an account?{' '}
//                                     <button 
//                                         onClick={() => setMode('login')}
//                                         className="text-[#f7a221] font-black uppercase tracking-tighter hover:underline"
//                                     >
//                                         Login here
//                                     </button>
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default LogRegister;