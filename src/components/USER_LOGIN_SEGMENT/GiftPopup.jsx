



// import React, { useState, useRef } from 'react';
// import { X, Gift } from 'lucide-react';

// const GiftPopup = ({ isOpen, onClose }) => {
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [isError, setIsError] = useState(false);
//     const modalRef = useRef();

//     if (!isOpen) return null;

//     // Regex for Indian Mobile Numbers (Starts with 6-9, followed by 9 digits)
//     const mobileRegex = /^[6-9]\d{9}$/;

//     const handleClaimGift = (e) => {
//         e.preventDefault();
//         if (mobileRegex.test(mobileNumber)) {
//             console.log("Valid Number - Claim Gift:", mobileNumber);
//             // Proceed to API call here
//             setIsError(false);
//             // Optional: close popup or show success message
//             // onClose(); 
//         } else {
//             // Trigger Shake Effect
//             setIsError(true);
//             setTimeout(() => setIsError(false), 500);
//         }
//     };

//     const handleBackdropClick = (e) => {
//         if (modalRef.current && !modalRef.current.contains(e.target)) {
//             onClose();
//         }
//     };

//     return (
//         <>
//             <style>
//                 {`
//                 @keyframes shake {
//                     0%, 100% { transform: translateX(0); }
//                     25% { transform: translateX(-5px); }
//                     75% { transform: translateX(5px); }
//                 }
//                 .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
                
//                 /* Simple infinite animation for gift box - just a gentle pulse */
//                 @keyframes gentlePulse {
//                     0%, 100% { transform: scale(1); }
//                     50% { transform: scale(1.05); }
//                 }
//                 .animate-gentle-pulse {
//                     animation: gentlePulse 2s ease-in-out infinite;
//                 }
//                 `}
//             </style>

//             <div 
//                 className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//                 onClick={handleBackdropClick}
//             >
//                 <div 
//                     ref={modalRef}
//                     className={`relative w-full max-w-sm bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl p-6 ${isError ? 'animate-shake' : ''}`}
//                 >
//                     {/* Close Button */}
//                     <button
//                         onClick={onClose}
//                         className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10"
//                         aria-label="Close popup"
//                     >
//                         <X size={16} />
//                     </button>

//                     {/* Gift Icon - Now with infinite gentle pulse animation */}
//                     <div className="flex justify-center mb-4">
//                         <div className="w-14 h-14 rounded-full bg-[#f7a221]/20 flex items-center justify-center border border-[#f7a221]/30 animate-gentle-pulse">
//                             <Gift size={28} className="text-[#f7a221]" />
//                         </div>
//                     </div>

//                     {/* Main Heading */}
//                     <h2 className="text-center text-xl font-bold text-white mb-2">
//                         Get Your Free Gift
//                     </h2>

//                     {/* Subheading/Paragraph */}
//                     <p className="text-center text-gray-400 text-sm mb-5">
//                         on your <span style={{fontSize:"18px" , fontWeight:"bold" ,color:"#f7a221"}} className='font-main'>Every</span> purchase!
//                     </p>

//                     {/* Mobile Number Input */}
//                     <form onSubmit={handleClaimGift} className="space-y-4">
                      

//                         {/* Claim Gift Now Button */}
//                         <button
//                             style={{width:"150px", margin:"auto"}}
//                             type="submit"
//                             className="w-full bg-[#f7a221] text-black font-bold py-3.5 rounded-lg hover:bg-[#f7a221]/90 transition-all flex items-center justify-center gap-2 text-sm shadow-[0_10px_20px_rgba(247,162,33,0.2)]"
//                         >
//                             <Gift size={24} />
//                             CLAIM  NOW
//                         </button>
//                     </form>

//                     {/* Small Paragraph Below */}
                  
//                 </div>
//             </div>
//         </>
//     );
// };

// export default GiftPopup;







// import React, { useState, useRef } from 'react';
// import { X, Gift } from 'lucide-react';

// const GiftPopup = ({ isOpen, onClose }) => {
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [isError, setIsError] = useState(false);
//     const modalRef = useRef();

//     if (!isOpen) return null;

//     const mobileRegex = /^[6-9]\d{9}$/;

//     const handleClaimGift = (e) => {
//         e.preventDefault();
//         if (mobileRegex.test(mobileNumber)) {
//             console.log("Valid Number - Claim Gift:", mobileNumber);
//             setIsError(false);
//         } else {
//             setIsError(true);
//             setTimeout(() => setIsError(false), 500);
//         }
//     };

//     const handleBackdropClick = (e) => {
//         if (modalRef.current && !modalRef.current.contains(e.target)) {
//             onClose();
//         }
//     };

//     return (
//         <>
//             <style>
//                 {`
//                 @keyframes shake {
//                     0%, 100% { transform: translateX(0); }
//                     25% { transform: translateX(-5px); }
//                     75% { transform: translateX(5px); }
//                 }
//                 .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }

//                 /* Gentle pulse */
//                 @keyframes gentlePulse {
//                     0%, 100% { transform: scale(1); }
//                     50% { transform: scale(1.05); }
//                 }
//                 .animate-gentle-pulse {
//                     animation: gentlePulse 2s ease-in-out infinite;
//                 }

//                 /* Gift Opening Animation */
//                 @keyframes giftOpen {
//                     0% { transform: scale(1); }
//                     20% { transform: scale(1.1) rotate(-3deg); }
//                     40% { transform: scale(1.05) rotate(3deg); }
//                     60% { transform: scale(1.15); }
//                     100% { transform: scale(1); }
//                 }
//                 .animate-gift-open {
//                     animation: giftOpen 2.5s ease-in-out infinite;
//                 }

//                 /* Sparkle Animation */
//                 @keyframes sparkle {
//                     0% { opacity: 0; transform: translateY(0) scale(0.5); }
//                     50% { opacity: 1; transform: translateY(-15px) scale(1); }
//                     100% { opacity: 0; transform: translateY(-25px) scale(0.5); }
//                 }
//                 .sparkle {
//                     position: absolute;
//                     width: 6px;
//                     height: 6px;
//                     background: #f7a221;
//                     border-radius: 50%;
//                     animation: sparkle 1.5s infinite ease-in-out;
//                 }

//                 /* Bounce for Every */
//                 @keyframes bounceText {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-6px); }
//                 }
//                 .animate-bounce-text {
//                     display: inline-block;
//                     animation: bounceText 1s infinite ease-in-out;
//                 }
//                 `}
//             </style>

//             <div 
//                 className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//                 onClick={handleBackdropClick}
//             >
//                 <div 
//                     ref={modalRef}
//                     className={`relative w-full max-w-sm bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl p-6 ${isError ? 'animate-shake' : ''}`}
//                 >
//                     {/* Close Button */}
//                     <button
//                         onClick={onClose}
//                         className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10"
//                         aria-label="Close popup"
//                     >
//                         <X size={16} />
//                     </button>

//                     {/* Gift Icon with Opening + Sparkles */}
//                     <div className="flex justify-center mb-4 relative">
//                         <div className="relative w-14 h-14 rounded-full bg-[#f7a221]/20 flex items-center justify-center border border-[#f7a221]/30 animate-gift-open">
//                             <Gift size={28} className="text-[#f7a221]" />

//                             {/* Sparkles */}
//                             <span className="sparkle" style={{ top: "-5px", left: "10px", animationDelay: "0s" }}></span>
//                             <span className="sparkle" style={{ top: "-8px", right: "10px", animationDelay: "0.3s" }}></span>
//                             <span className="sparkle" style={{ top: "0px", right: "-6px", animationDelay: "0.6s" }}></span>
//                         </div>
//                     </div>

//                     {/* Heading */}
//                     <h2 className="text-center text-xl font-bold text-white mb-2">
//                         Get Your Free Gift
//                     </h2>

//                     {/* Subheading */}
//                     <p className="text-center text-blue-400 text-sm mb-5">
//                         on your{"  "}
//                         <span 
//                             style={{fontSize:"18px", fontWeight:"bold", color:"#f7a221"}}
//                             className="font-main animate-bounce-text"
//                         >
//                             Every
//                         </span>{"    "}
//                         purchase!
//                     </p>

//                     {/* Form */}
//                     <form onSubmit={handleClaimGift} className="space-y-4">
//                         <button
//                             style={{width:"150px", margin:"auto"}}
//                             type="submit"
//                             className="w-full bg-gradient-to-r from-[#f7a221] via-[#ffb347] to-[#f7a221] text-black font-bold py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_10px_20px_rgba(247,162,33,0.2)] hover:scale-105 hover:shadow-[0_15px_30px_rgba(247,162,33,0.4)]"
//                         >
//                             <Gift size={24} />
//                             CLAIM NOW
//                         </button>
//                     </form>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default GiftPopup;

















import React, { useState, useRef, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

const GiftPopup = ({ isOpen, onClose }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [isError, setIsError] = useState(false);
    const modalRef = useRef();

    // Prevent body scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const mobileRegex = /^[6-9]\d{9}$/;

    const handleClaimGift = (e) => {
        e.preventDefault();
        if (mobileRegex.test(mobileNumber)) {
            console.log("Valid Number - Claim Gift:", mobileNumber);
            setIsError(false);
            // Show success message or process gift claim
            alert("Gift claimed successfully! Check your SMS for details.");
            onClose(); // Close popup after successful claim
        } else {
            setIsError(true);
            setTimeout(() => setIsError(false), 500);
        }
    };

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <>
            <style>
                {`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }

                /* Gentle pulse */
                @keyframes gentlePulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                .animate-gentle-pulse {
                    animation: gentlePulse 2s ease-in-out infinite;
                }

                /* Gift Opening Animation */
                @keyframes giftOpen {
                    0% { transform: scale(1); }
                    20% { transform: scale(1.1) rotate(-3deg); }
                    40% { transform: scale(1.05) rotate(3deg); }
                    60% { transform: scale(1.15); }
                    100% { transform: scale(1); }
                }
                .animate-gift-open {
                    animation: giftOpen 2.5s ease-in-out infinite;
                }

                /* Sparkle Animation */
                @keyframes sparkle {
                    0% { opacity: 0; transform: translateY(0) scale(0.5); }
                    50% { opacity: 1; transform: translateY(-15px) scale(1); }
                    100% { opacity: 0; transform: translateY(-25px) scale(0.5); }
                }
                .sparkle {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: #f7a221;
                    border-radius: 50%;
                    animation: sparkle 1.5s infinite ease-in-out;
                }

                /* Bounce for Every */
                @keyframes bounceText {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                .animate-bounce-text {
                    display: inline-block;
                    animation: bounceText 1s infinite ease-in-out;
                }
                `}
            </style>

            <div 
           
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={handleBackdropClick}
            >
                <div 
                 style={{padding:"50px" }}
                    ref={modalRef}
                    className={`relative w-full max-w-sm bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl p-6 ${isError ? 'animate-shake' : ''}`}
                >
                    {/* Close Button - Now fully functional */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10 z-10"
                        aria-label="Close popup"
                    >
                        <X size={16} />
                    </button>

                    {/* Gift Icon with Opening + Sparkles */}
                    <div className="flex justify-center mb-4 relative">
                        <div className="relative w-14 h-14 rounded-full bg-[#f7a221]/20 flex items-center justify-center border border-[#f7a221]/30 animate-gift-open">
                            <Gift size={28} className="text-[#f7a221]" />

                            {/* Sparkles */}
                            <span className="sparkle" style={{ top: "-5px", left: "10px", animationDelay: "0s" }}></span>
                            <span className="sparkle" style={{ top: "-8px", right: "10px", animationDelay: "0.3s" }}></span>
                            <span className="sparkle" style={{ top: "0px", right: "-6px", animationDelay: "0.6s" }}></span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-center text-xl font-bold text-white mb-2">
                        Get Your Free Gift
                    </h2>

                    {/* Subheading */}
                    <p className="text-center text-blue-400 text-sm mb-5">
                        on your{"  "}
                        <span 
                            style={{fontSize:"18px", fontWeight:"bold", color:"#f7a221"}}
                            className="font-main animate-bounce-text"
                        >
                            Every
                        </span>{"    "}
                        purchase!
                    </p>

                
                   

                    {/* Form */}
                    <form onSubmit={handleClaimGift} className="space-y-4">
                        <button
                            style={{width:"150px", margin:"auto"}}
                            type="submit"
                            className="w-[150px] bg-gradient-to-r from-[#f7a221] via-[#ffb347] to-[#f7a221] text-black font-bold py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_10px_20px_rgba(247,162,33,0.2)] hover:scale-105 hover:shadow-[0_15px_30px_rgba(247,162,33,0.4)]"
                        >
                            <Gift size={24} />
                            CLAIM NOW
                        </button>
                    </form>

                   
                </div>
            </div>
        </>
    );
};

export default GiftPopup;