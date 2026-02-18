import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { validateEmail, validatePassword } from './USER_LOGIN_UTILS/validation';

const Register = ({ onRegisterSuccess }) => {
    const [formData, setFormData] = useState({ name: '', email: '', pass: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const isFormValid = formData.name.length > 2 && validateEmail(formData.email) && validatePassword(formData.pass);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get existing users from sessionStorage
        const existingUsers = JSON.parse(sessionStorage.getItem('registeredUsers') || '[]');
        
        // Check if email already exists
        const userExists = existingUsers.some(u => u.email === formData.email);
        
        if (userExists) {
            setError('Email already registered. Please login instead.');
            setSuccess('');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.pass,
            registeredAt: new Date().toISOString()
        };
        
        // Add to users list
        const updatedUsers = [...existingUsers, newUser];
        sessionStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
        
        // Auto login after registration
        sessionStorage.setItem('currentUser', JSON.stringify(newUser));
        
        setSuccess('Registration successful! Redirecting...');
        setError('');
        
        // Call success callback after a tiny delay
        setTimeout(() => {
            onRegisterSuccess();
        }, 500);
    };

    return (
        <div className="w-full animate-in slide-in-from-left duration-500">
            <div className="mb-6">
                <h4 className="text-3xl font-black text-white mb-1 uppercase">Create Account</h4>
                <p className="text-gray-500 text-sm">Join 10k+ looters today.</p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                        <p className="text-red-500 text-xs text-center">{error}</p>
                    </div>
                )}
                
                {success && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3">
                        <p className="text-green-500 text-xs text-center">{success}</p>
                    </div>
                )}
                
                <div className="grid grid-cols-1 gap-3">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                            <input 
                                type="text" 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                            <input 
                                type="email" 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
                                placeholder="baba@deals.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                            <input 
                                type="password" 
                                value={formData.pass}
                                onChange={(e) => setFormData({...formData, pass: e.target.value})}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
                                placeholder="Min. 6 chars (A1)"
                            />
                        </div>
                        <p className="text-[10px] text-gray-600 mt-1 ml-1">
                            Password must be at least 6 characters with letters and numbers
                        </p>
                    </div>
                </div>

                <button 
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-4 mt-4 rounded-xl font-black uppercase transition-all ${
                        isFormValid 
                            ? 'bg-[#f7a221] text-black shadow-lg shadow-[#f7a221]/20 hover:bg-[#ffb238]' 
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Register Now
                </button>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"></div>
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase font-bold">
                        <span className="bg-[#0d0d0d] px-2 text-gray-600">Or continue with</span>
                    </div>
                </div>

                <button type="button" className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                    <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" /> Google
                </button>
            </form>
        </div>
    );
};

export default Register;

// import React, { useState } from 'react';
// import { User, Mail, Lock, Smartphone } from 'lucide-react';
// import { validateEmail, validatePassword } from './USER_LOGIN_UTILS/validation';

// const Register = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', pass: '' });

//     const isFormValid = formData.name.length > 2 && validateEmail(formData.email) && validatePassword(formData.pass);

//     return (
//         <div className="w-full animate-in slide-in-from-left duration-500">
//             <div className="mb-6">
//                 <h4 className="text-3xl font-black text-white mb-1 uppercase italic">Create Account</h4>
//                 <p className="text-gray-500 text-sm">Join 10k+ looters today.</p>
//             </div>

//             <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 gap-3">
//                     <div className="space-y-1">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
//                         <div className="relative">
//                             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
//                             <input 
//                                 type="text" 
//                                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//                                 className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
//                                 placeholder="John Doe"
//                             />
//                         </div>
//                     </div>

//                     <div className="space-y-1">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
//                         <div className="relative">
//                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
//                             <input 
//                                 type="email" 
//                                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                                 className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
//                                 placeholder="baba@deals.com"
//                             />
//                         </div>
//                     </div>

//                     <div className="space-y-1">
//                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
//                         <div className="relative">
//                             <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
//                             <input 
//                                 type="password" 
//                                 onChange={(e) => setFormData({...formData, pass: e.target.value})}
//                                 className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
//                                 placeholder="Min. 6 chars (A1)"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <button 
//                     disabled={!isFormValid}
//                     className={`w-full py-4 mt-4 rounded-xl font-black uppercase transition-all ${isFormValid ? 'bg-[#f7a221] text-black shadow-lg shadow-[#f7a221]/20' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
//                 >
//                     Register Now
//                 </button>

//                 <div className="relative py-2">
//                     <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
//                     <div className="relative flex justify-center text-[10px] uppercase font-bold"><span className="bg-[#0d0d0d] px-2 text-gray-600">Or continue with</span></div>
//                 </div>

//                 <button type="button" className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
//                     <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" /> Google
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Register;