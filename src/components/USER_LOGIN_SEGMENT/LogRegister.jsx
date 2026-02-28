import React, { useState } from "react";
import { X } from "lucide-react";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import { useDispatch } from "react-redux";
import { clearError, clearSuccess } from "../REDUX_FEATURES/REDUX_SLICES/authSlice";

const LogRegister = ({ isOpen, onClose, onLoginSuccess }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("login");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (!isOpen) return null;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowForgotPassword(false);
    dispatch(clearError());
    dispatch(clearSuccess());
  };

  const handleClose = () => {
    dispatch(clearError());
    dispatch(clearSuccess());
    onClose();
  };

  const handleForgotPasswordClick = () => {
    dispatch(clearError());
    dispatch(clearSuccess());
    setShowForgotPassword(true);
  };

  const handleBackFromForgot = () => {
    dispatch(clearError());
    dispatch(clearSuccess());
    setShowForgotPassword(false);
  };

  return (
    /* 1. Added onClick to this overlay div to close the modal */
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleClose} 
    >
      {/* 2. Added e.stopPropagation() so clicking the actual modal doesn't close it */}
      <div 
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Floating Cross Icon */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-[110] bg-[#f7a221] text-black p-2 rounded-full shadow-2xl active:scale-95 transition-all border-2 border-[#0d0d0d] cursor-pointer"
        >
          <X size={18} strokeWidth={3} />
        </button>

        <div className="bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {!showForgotPassword ? (
            <>
              {/* Tabs with Slider Underline */}
              <div className="flex border-b border-white/5 relative">
                <button
                  onClick={() => handleTabChange("login")}
                  className={`flex-1 py-5 text-center cursor-pointer font-black text-xs tracking-[0.2em] transition-colors z-10 ${
                    activeTab === "login" ? "text-[#f7a221]" : "text-white"
                  }`}
                >
                  LOGIN
                </button>
                <button
                  onClick={() => handleTabChange("register")}
                  className={`flex-1 py-5 text-center font-black cursor-pointer text-xs tracking-[0.2em] transition-colors z-10 ${
                    activeTab === "register" ?  "text-[#f7a221]" : "text-white"
                  }`}
                >
                  REGISTER
                </button>
                {/* Animated Underline */}
                <div 
                  className="absolute bottom-0 h-[3px] bg-[#f7a221] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
                  style={{ width: '50%', left: activeTab === 'login' ? '0%' : '50%' }}
                />
              </div>

              {/* Smooth Slide Transition Container */}
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: activeTab === 'login' ? 'translateX(0%)' : 'translateX(-100%)' }}
                >
                  {/* Login Slide */}
                  <div className="w-full shrink-0 p-8">
                    <Login
                      onLoginSuccess={onLoginSuccess}
                      onRegisterClick={() => handleTabChange("register")}
                      onForgotPasswordClick={handleForgotPasswordClick}
                    />
                  </div>
                  {/* Register Slide */}
                  <div className="w-full shrink-0 p-8">
                    <Register
                      onRegisterSuccess={onLoginSuccess}
                      onLoginClick={() => handleTabChange("login")}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-8 animate-in slide-in-from-bottom-4 duration-500">
              <ForgotPassword
                onBack={handleBackFromForgot}
                onLoginClick={() => {
                  handleBackFromForgot();
                  handleTabChange("login");
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogRegister;

// // components/USER_LOGIN_SEGMENT/LogRegister.jsx
// import React, { useState } from "react";
// import { X } from "lucide-react";
// import Login from "./Login";
// import Register from "./Register";
// import ForgotPassword from "./ForgotPassword";
// import { useDispatch } from "react-redux";
// import { clearError, clearSuccess } from "../REDUX_FEATURES/REDUX_SLICES/authSlice";

// const LogRegister = ({ isOpen, onClose, onLoginSuccess }) => {
//   const dispatch = useDispatch();
//   const [activeTab, setActiveTab] = useState("login");
//   const [showForgotPassword, setShowForgotPassword] = useState(false);

//   if (!isOpen) return null;

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setShowForgotPassword(false);
//     dispatch(clearError());
//     dispatch(clearSuccess());
//   };

//   const handleClose = () => {
//     dispatch(clearError());
//     dispatch(clearSuccess());
//     onClose();
//   };

//   const handleForgotPasswordClick = () => {
//     dispatch(clearError());
//     dispatch(clearSuccess());
//     setShowForgotPassword(true);
//   };

//   const handleBackFromForgot = () => {
//     dispatch(clearError());
//     dispatch(clearSuccess());
//     setShowForgotPassword(false);
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//       <div className="relative w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">

//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute right-4 top-4 z-10 p-2 text-gray-500 hover:text-white transition-colors"
//         >
//           <X size={20} />
//         </button>

//         {!showForgotPassword ? (
//           <>
//             {/* Tabs */}
//             <div className="flex border-b border-white/10">
//               <button
//                 onClick={() => handleTabChange("login")}
//                 className={`flex-1 py-4 text-center font-medium transition-colors ${
//                   activeTab === "login"
//                     ? "text-[#f7a221] border-b-2 border-[#f7a221]"
//                     : "text-gray-500 hover:text-white"
//                 }`}
//               >
//                 LOGIN
//               </button>
//               <button
//                 onClick={() => handleTabChange("register")}
//                 className={`flex-1 py-4 text-center font-medium transition-colors ${
//                   activeTab === "register"
//                     ? "text-[#f7a221] border-b-2 border-[#f7a221]"
//                     : "text-gray-500 hover:text-white"
//                 }`}
//               >
//                 REGISTER
//               </button>
//             </div>

//             {/* Content */}
//             <div className="p-8">
//               {activeTab === "login" ? (
//                 <Login
//                   onLoginSuccess={onLoginSuccess}
//                   onRegisterClick={() => handleTabChange("register")}
//                   onForgotPasswordClick={handleForgotPasswordClick}
//                 />
//               ) : (
//                 <Register
//                   onRegisterSuccess={onLoginSuccess}
//                   onLoginClick={() => handleTabChange("login")}
//                 />
//               )}
//             </div>
//           </>
//         ) : (
//           <div className="p-8">
//             <ForgotPassword
//               onBack={handleBackFromForgot}
//               onLoginClick={() => {
//                 handleBackFromForgot();
//                 handleTabChange("login");
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LogRegister;


// // components/USER_LOGIN_SEGMENT/LogRegister.jsx
// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import Login from './Login';
// import Register from './Register';
// import ForgotPassword from './ForgotPassword';

// const LogRegister = ({ isOpen, onClose }) => {
//     const [activeTab, setActiveTab] = useState('login');
//     const [showForgotPassword, setShowForgotPassword] = useState(false);

//     if (!isOpen) return null;

//     const handleLoginSuccess = () => {
//         alert('Login successful! (Demo)');
//         onClose();
//     };

//     const handleForgotPasswordClick = () => {
//         setShowForgotPassword(true);
//     };

//     const handleBackFromForgot = () => {
//         setShowForgotPassword(false);
//     };

//     return (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//             <div className="relative w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">
                
//                 {/* Close Button */}
//                 <button 
//                     onClick={onClose}
//                     className="absolute right-4 top-4 z-10 p-2 text-gray-500 hover:text-white transition-colors"
//                 >
//                     <X size={20} />
//                 </button>

//                 {!showForgotPassword ? (
//                     <>
//                         {/* Tabs */}
//                         <div className="flex border-b border-white/10">
//                             <button
//                                 onClick={() => setActiveTab('login')}
//                                 className={`flex-1 py-4 text-center font-medium transition-colors ${
//                                     activeTab === 'login' 
//                                         ? 'text-[#f7a221] border-b-2 border-[#f7a221]' 
//                                         : 'text-gray-500 hover:text-white'
//                                 }`}
//                             >
//                                 LOGIN
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('register')}
//                                 className={`flex-1 py-4 text-center font-medium transition-colors ${
//                                     activeTab === 'register' 
//                                         ? 'text-[#f7a221] border-b-2 border-[#f7a221]' 
//                                         : 'text-gray-500 hover:text-white'
//                                 }`}
//                             >
//                                 REGISTER
//                             </button>
//                         </div>

//                         {/* Content */}
//                         <div className="p-8">
//                             {activeTab === 'login' ? (
//                                 <Login 
//                                     onLoginSuccess={handleLoginSuccess}
//                                     onRegisterClick={() => setActiveTab('register')}
//                                     onForgotPasswordClick={handleForgotPasswordClick}
//                                 />
//                             ) : (
//                                 <Register 
//                                     onRegisterSuccess={handleLoginSuccess}
//                                     onLoginClick={() => setActiveTab('login')}
//                                 />
//                             )}
//                         </div>
//                     </>
//                 ) : (
//                     <div className="p-8">
//                         <ForgotPassword 
//                             onBack={handleBackFromForgot}
//                             onLoginClick={() => {
//                                 setShowForgotPassword(false);
//                                 setActiveTab('login');
//                             }}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default LogRegister;