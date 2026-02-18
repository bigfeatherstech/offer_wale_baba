import React, { useState } from 'react';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import { validateEmail } from './USER_LOGIN_UTILS/validation';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const isFormValid = validateEmail(email) && pass.length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get registered users from sessionStorage
        const users = JSON.parse(sessionStorage.getItem('registeredUsers') || '[]');
        
        // Check if user exists with matching email and password
        const user = users.find(u => u.email === email && u.password === pass);
        
        if (user) {
            // Store current user info
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            onLoginSuccess();
            setError('');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="w-full animate-in slide-in-from-right duration-500">
            <div className="mb-8">
                <h4 className="text-3xl font-black text-white mb-2 uppercase">Welcome Back</h4>
                <p className="text-gray-500 text-sm">Enter your credentials to access the loot.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                        <p className="text-red-500 text-xs text-center">{error}</p>
                    </div>
                )}
                
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
                            placeholder="test@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                        <input 
                            type="password" 
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button 
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-4 rounded-xl font-black uppercase flex items-center justify-center gap-2 transition-all ${
                        isFormValid 
                            ? 'bg-[#f7a221] text-black scale-100 shadow-lg shadow-[#f7a221]/20 hover:bg-[#ffb238]' 
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Login to Account <ArrowRight size={18} />
                </button>
            </form>
        </div>
    );
};

export default Login;


// import React, { useState } from 'react';
// import { ArrowRight, Mail, Lock } from 'lucide-react';
// import { validateEmail } from './USER_LOGIN_UTILS/validation';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const isFormValid = validateEmail(email) && pass.length >= 6;

//     return (
//         <div className="w-full animate-in slide-in-from-right duration-500">
//             <div className="mb-8">
//                 <h4 className="text-3xl font-black text-white mb-2 uppercase italic">Welcome Back</h4>
//                 <p className="text-gray-500 text-sm">Enter your credentials to access the loot.</p>
//             </div>

//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//                 <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
//                     <div className="relative">
//                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
//                         <input 
//                             type="email" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
//                             placeholder="baba@deals.com"
//                         />
//                     </div>
//                 </div>

//                 <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
//                     <div className="relative">
//                         <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
//                         <input 
//                             type="password" 
//                             value={pass}
//                             onChange={(e) => setPass(e.target.value)}
//                             className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-[#f7a221]/50 outline-none transition-all"
//                             placeholder="••••••••"
//                         />
//                     </div>
//                 </div>

//                 <button 
//                     disabled={!isFormValid}
//                     className={`w-full py-4 rounded-xl font-black uppercase flex items-center justify-center gap-2 transition-all ${isFormValid ? 'bg-[#f7a221] text-black scale-100 shadow-lg shadow-[#f7a221]/20' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
//                 >
//                     Login to Account <ArrowRight size={18} />
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;