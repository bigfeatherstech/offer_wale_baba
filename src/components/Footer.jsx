// import React from "react";
// import { motion } from "framer-motion";
// import {
//   MessageCircle,
//   Send,
//   Instagram,
//   Facebook,
//   Youtube,
//   MessageSquare,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";
// import logo from "../assets/logo.jpg";

// const socialIcons = [
//   { Icon: MessageCircle, color: "hover:text-green-500" },
//   { Icon: Send, color: "hover:text-sky-400" },
//   { Icon: Instagram, color: "hover:text-pink-500" },
//   { Icon: Facebook, color: "hover:text-blue-600" },
//   { Icon: Youtube, color: "hover:text-red-600" },
//   { Icon: MessageSquare, color: "hover:text-gray-400" },
//   { Icon: Mail, color: "hover:text-blue-500" },
// ];

// const footerLinks = {
//   explore: [
//     "What Is Drop shipping",
//     "Track Order",
//     "Become a Seller",
//     "Dropshipping",
//     "Bulk Order Enquiry",
//     "Become Vendor",
//     "Franchise",
//     "Create a Ticket",
//     "Wholesale Login",
//     "Wholesale Signup",
//     "VIP Customers",
//   ],
//   policy: [
//     "About Us",
//     "Contact Us",
//     "Privacy Policy",
//     "Shipping Policy",
//     "Terms & Conditions",
//     "Payment & Security",
//     "Order Cancellation Policy",
//     "Grievance Redressal",
//   ],
//   other: [
//     "Blogs",
//     "Influencer Form",
//     "Affiliate",
//     "FAQs",
//     "Customer Testimonials",
//     "Career",
//     "Store Locator",
//   ],
// };

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="bg-primary text-gray-300 pt-24 pb-12 border-t-[10px] border-secondary"
//     >
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-14 lg:gap-24">
//         {/* Brand Section */}
//         <div className="space-y-8">
//           <motion.div
//             whileHover={{ scale: 1.04 }}
//             className="inline-flex items-center gap-3 cursor-pointer"
//           >
//             <img
//               src={logo}
//               alt="Offerwale Baba"
//               className="w-28 rounded-xl shadow-lg"
//             />
//           </motion.div>

//           <p className="text-sm md:text-base leading-relaxed opacity-70 max-w-sm">
//             India’s leading e-commerce platform for unique and innovative
//             household products — delivering quality at unbeatable wholesale
//             prices.
//           </p>

//           {/* Follow Us + Contact */}
//           <div className="space-y-6">
//             <h4 className="text-white font-semibold text-sm tracking-wide">
//               Follow Us
//             </h4>

//             {/* Social Icons */}
//             <div className="flex gap-3">
//               {socialIcons.map(({ Icon, color }, i) => (
//                 <motion.a
//                   key={i}
//                   whileHover={{ y: -4 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`p-3 rounded-xl bg-white/5 backdrop-blur-md transition-all ${color}`}
//                   href="#"
//                 >
//                   <Icon size={18} />
//                 </motion.a>
//               ))}
//             </div>

//             {/* Contact Us */}
//             <motion.a
//               href="tel:9320001717"
//               whileHover={{ x: 6 }}
//               className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition"
//             >
//               <Phone size={16} className="text-secondary" />
//               <span>+91 9320001717</span>
//             </motion.a>

//             {/* Visit Us */}
//             <motion.div
//               whileHover={{ x: 6 }}
//               className="flex items-start gap-3 text-sm opacity-70 hover:opacity-100 transition"
//             >
//               <MapPin size={16} className="text-secondary mt-0.5" />
//               <span className="leading-relaxed">
//                 MEHTA MART MHM, Ulhasnagar, Maharashtra – 421004
//               </span>
//             </motion.div>
//           </div>
//         </div>

//         {/* Links Sections */}
//         {Object.entries(footerLinks).map(([section, links]) => (
//           <div key={section} className="space-y-6">
//             <h6 className="text-white font-extrabold uppercase tracking-[0.15em] text-xs">
//               {section} Links
//             </h6>
//             <ul className="space-y-3 text-sm md:text-base font-semibold">
//               {links.map((link, idx) => (
//                 <motion.li
//                   key={idx}
//                   whileHover={{ x: 8 }}
//                   className="group flex items-center gap-3 cursor-pointer transition-all"
//                 >
//                   <span className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:w-4 transition-all" />
//                   <span className="opacity-70 group-hover:opacity-100 group-hover:text-secondary transition-all">
//                     {link}
//                   </span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Bar */}
//       <div className="container mx-auto px-4 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-gray-400">
//         <p className="text-center md:text-left">
//           © 2026 Offerwale Baba. All Rights Reserved.
//         </p>

//         <div className="flex gap-8 text-center">
//           <span className="hover:text-white transition">Verified by Google</span>
//           <span className="hover:text-white transition">Secure Checkout</span>
//           <span className="hover:text-white transition">
//             India’s #1 Wholesaler
//           </span>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;






import React from 'react';
import { 
  Facebook, Instagram, Youtube, ShieldCheck, Star, Award, 
  Send, MessageCircle, Globe, Phone, MapPin, ExternalLink 
} from 'lucide-react';
import logo from "../assets/logo.jpg";
import offferlogo from "../assets/offerlogo.png"

// Custom SVG Icons
const ThreadsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-2 18.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7zm6 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7zm-6-10a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1zm6 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      items: ["What is Drop Shipping", "DropShipping", "Franchise", "Become Vendor", "Create a Ticket", "Wholesale Login", "Wholesale Signup", "VIP Customers"]
    },
    {
      title: "Policies",
      items: ["About Us", "Contact Us", "Terms & Conditions", "Shipping Policy", "Return & Refund Policy", "Payment & Security", "Privacy Policy", "Order Cancellation Policy", "Grievance Redressal Policy"]
    },
    {
      title: "Other Links",
      items: ["Influencer Form", "Blogs", "DMCA", "Affiliate", "FAQs", "Customer Testimonials", "Career", "Shipment Tracking", "Store Locator"]
    },
    {
      title: "Drop Shipping With Baba",
      items: ["Brand Drop Shipping", "All Website Plans", "Shopify Website", "Self Serve Plan", "B2B Drop Shipping", "Reseller Plan"]
    }
  ];

  const socialIcons = [
    { icon: MessageCircle, link: "#", color: "text-green-600", label: "WhatsApp" },
    { icon: Send, link: "#", color: "text-sky-600", label: "Telegram" },
    { icon: Instagram, link: "#", color: "text-pink-600", label: "Instagram" },
    { icon: Facebook, link: "#", color: "text-blue-700", label: "Facebook" },
    { icon: Youtube, link: "#", color: "text-red-600", label: "YouTube" },
    { icon: ThreadsIcon, link: "#", color: "text-black", label: "Threads", isCustom: true },
    { icon: GoogleIcon, link: "#", color: "text-gray-700", label: "Google", isCustom: true }
  ];

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200 overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        
        {/* Main Grid */}
        <div className="bg-[#7f7f7f] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 py-15 px-35 ">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex flex-col items-start">
              <img 
                src={offferlogo} 
                alt="Offer Wale Baba Logo" 
                className="w-32 h-32  object-cover mb-4"
              />
              {/* <p className="text-[10px] font-black text-blue-600 tracking-[0.15em] uppercase">Sell • Resell • Earn • Repeat</p> */}
            </div>

            <div className="space-y-4">
              <h4 className="text-white  text-xs uppercase tracking-widest">Contact us</h4>
              <a href="tel:9320001717" className="inline-flex items-center gap-3 px-6 py-2.5 bg-gray-50 border border-red-200 rounded-full text-[#f7a221] font-bold hover:bg-red-600 hover:text-white transition-all group">
                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                9320001717
              </a>
            </div>

            <div className="space-y-2">
              <h4 className="text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <MapPin size={16} className="text-red-600" /> Visit Us
              </h4>
              <p className="text-sm leading-relaxed text-gray-600 font-medium uppercase">
                MEHTA MART MHM, ULHASNAGAR,<br />
                Maharashtra, 421004
              </p>
            </div>
          </div>

          {/* Columns 2-5: Dynamic Links */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-black font-bold uppercase text-[11px] tracking-widest border-l-2 border-[#f7a221] pl-3">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="text-[12px] text-[#f7a221] hover:text-[#f7a221] hover:translate-x-1 transition-all cursor-pointer flex items-center group font-normal">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-[#f7a221] mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* MAP & SOCIAL BAR SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Map Container */}
            <div className="lg:col-span-2 group">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-[2px] bg-red-600"></div>
                    <h4 className="text-black font-bold uppercase text-xs tracking-widest">Locate Our Hub</h4>
                </div>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                    <iframe 
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123!2d73.15!3d19.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzEyLjAiTiA3M8KwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
                        className="w-full h-full border-0"
                        allowFullScreen="" 
                        loading="lazy" 
                    ></iframe>
                </div>
            </div>

            {/* Social Icons Container */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center items-center lg:items-start shadow-sm">
                <div className="text-black font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                    <Globe size={18} className="text-blue-600" /> Follow us here
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {socialIcons.map((social, idx) => (
                        <a 
                            key={idx} 
                            href={social.link} 
                            className={`p-3 bg-white rounded-xl hover:bg-gray-100 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 ${social.color} shadow-sm`}
                            title={social.label}
                        >
                            {social.isCustom ? <social.icon /> : <social.icon size={22} />}
                        </a>
                    ))}
                </div>
                <p className="mt-6 text-[11px] text-gray-500 font-bold italic text-center lg:text-left">
                    Join 10,000+ happy customers on social!
                </p>
            </div>
        </div>

        {/* Corporate Info & Trust Badges */}
        <div className="border-t border-gray-100 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-black text-gray-900">Offer Wale Baba International Private Limited</p>
            <div className="text-[10px] text-gray-500 flex flex-wrap justify-center md:justify-start gap-4 mt-2 font-mono font-bold uppercase">
              <span className="bg-gray-100 px-2 py-0.5 rounded">GST: 24AAHCD5265C1ZX</span>
              <span className="bg-gray-100 px-2 py-0.5 rounded">CIN: U51909GJ2019PTC110919</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {[{ icon: ShieldCheck, text: "IndiaMart Trusted", color: "text-green-600" },
              { icon: Star, text: "4.9/5 Rating", color: "text-yellow-600" },
              { icon: Award, text: "ISO Certified", color: "text-blue-600" }].map((badge, i) => (
                <div key={i} className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 flex items-center gap-3">
                    <badge.icon size={20} className={badge.color} />
                    <span className="text-[10px] text-black font-black uppercase tracking-tighter">{badge.text}</span>
                </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[11px] text-gray-400 border-t border-gray-50 pt-8">
          <p className="font-bold">© {currentYear} OFFER WALE BABA. THE B2B REVOLUTION. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;












// import React from 'react';
// import { motion } from 'framer-motion';
// import { Flame, MessageCircle, Send, Instagram, Facebook, Youtube, MessageSquare, Mail, ArrowRight } from 'lucide-react';
// import logo from "../assets/logo.jpg"

// const Footer = () => {
//     return (
//         <motion.footer
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="bg-primary text-gray-300 pt-20 pb-12 border-t border-secondary/50"
//         >
//             <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
//                 {/* Brand Column */}
//                 <div className="space-y-8">
//                     <motion.div
//                         whileHover={{ scale: 1.02 }}
//                         className="flex flex-col items-start gap-4"
//                     >
//                         <img 
//                             style={{ borderRadius: "50%" }} 
//                             width="90px" 
//                             src={logo} 
//                             alt="Offerwale Baba" 
//                             className="border-2 border-white/20 shadow-lg"
//                         />
//                         <div>
//                             <h2 className="text-xl font-bold text-white">Offerwale Baba</h2>
//                             <p className="text-sm text-accent font-medium">Wholesale Excellence</p>
//                         </div>
//                     </motion.div>

//                     <p className="text-sm leading-relaxed font-normal opacity-80">
//                         India's leading e-commerce platform for unique and innovative household items. 
//                         Redefining quality at wholesale prices.
//                     </p>
                    
//                     {/* Social Media */}
//                     <div className="space-y-4 pt-4">
//                         <h4 className="text-white font-semibold text-sm">Connect with us</h4>
//                         <div className="flex flex-wrap gap-2">
//                             {[
//                                 { icon: <MessageCircle size={18} />, color: "hover:border-green-500/30 hover:text-green-400", label: "WhatsApp" },
//                                 { icon: <Send size={18} />, color: "hover:border-blue-400/30 hover:text-blue-400", label: "Telegram" },
//                                 { icon: <Instagram size={18} />, color: "hover:border-pink-500/30 hover:text-pink-400", label: "Instagram" },
//                                 { icon: <Facebook size={18} />, color: "hover:border-blue-600/30 hover:text-blue-500", label: "Facebook" },
//                                 { icon: <Youtube size={18} />, color: "hover:border-red-600/30 hover:text-red-400", label: "YouTube" },
//                                 { icon: <MessageSquare size={18} />, color: "hover:border-gray-400/30 hover:text-gray-300", label: "Threads" },
//                                 { icon: <Mail size={18} />, color: "hover:border-blue-500/30 hover:text-blue-300", label: "Google" }
//                             ].map((social, idx) => (
//                                 <motion.a
//                                     key={idx}
//                                     whileHover={{ y: -2 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     href="#"
//                                     className={`
//                                         ${social.color}
//                                         bg-white/5 p-2.5 rounded-lg border border-white/10 
//                                         transition-all duration-200 cursor-pointer
//                                         group relative
//                                     `}
//                                     title={social.label}
//                                 >
//                                     {social.icon}
//                                 </motion.a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Explore Links */}
//                 <div className="space-y-6">
//                     <h6 className="text-white font-semibold text-sm uppercase tracking-wider pb-2 border-b border-white/10">
//                         Explore Links
//                     </h6>
//                     <ul className="space-y-3 text-sm font-medium">
//                         {[
//                             "Track Order", "Become a Seller", "Dropshipping", "Bulk Order Enquiry", 
//                             "What Is Drop shipping", "DropShipping", "Franchise", "Become Vendor",
//                             "Create a Ticket", "Wholesale login", "Wholesale Signup", "Vip Customers"
//                         ].map((link, idx) => (
//                             <motion.li
//                                 key={idx}
//                                 whileHover={{ x: 4 }}
//                                 className="cursor-pointer transition-colors hover:text-accent group"
//                             >
//                                 <div className="flex items-center gap-2">
//                                     <ArrowRight size={12} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
//                                     {link}
//                                 </div>
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Policy Info */}
//                 <div className="space-y-6">
//                     <h6 className="text-white font-semibold text-sm uppercase tracking-wider pb-2 border-b border-white/10">
//                         Policy Info
//                     </h6>
//                     <ul className="space-y-3 text-sm font-medium">
//                         {[
//                             "Privacy Policy", "Shipping Policy", "Terms of Service", "About Us",
//                             "Contact Us", "Terms & Conditions", "Payment & Security", "Return Policy",
//                             "Order Cancellation Policy", "Grievance Redressal Policy"
//                         ].map((link, idx) => (
//                             <motion.li
//                                 key={idx}
//                                 whileHover={{ x: 4 }}
//                                 className="cursor-pointer transition-colors hover:text-accent group"
//                             >
//                                 <div className="flex items-center gap-2">
//                                     <ArrowRight size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
//                                     {link}
//                                 </div>
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Other Links */}
//                 <div className="space-y-6">
//                     <h6 className="text-white font-semibold text-sm uppercase tracking-wider pb-2 border-b border-white/10">
//                         Other Links
//                     </h6>
//                     <ul className="space-y-3 text-sm font-medium">
//                         {[
//                             "Influencer Form", "Blogs", "DMCA", "About Us", "Affiliate",
//                             "FAQs", "Customer Testimonials", "Career", "Shipment Tracking", "Store Locator"
//                         ].map((link, idx) => (
//                             <motion.li
//                                 key={idx}
//                                 whileHover={{ x: 4 }}
//                                 className="cursor-pointer transition-colors hover:text-accent group"
//                             >
//                                 <div className="flex items-center gap-2">
//                                     <ArrowRight size={12} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
//                                     {link}
//                                 </div>
//                             </motion.li>
//                         ))}
//                     </ul>

//                     {/* Trust Badge */}
//                     <motion.div 
//                         whileHover={{ scale: 1.02 }}
//                         className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
//                     >
//                         <div className="flex items-center gap-3">
//                             <motion.div 
//                                 animate={{ rotate: 360 }} 
//                                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                             >
//                                 <Flame className="text-secondary" size={24} />
//                             </motion.div>
//                             <div>
//                                 <p className="text-sm font-semibold text-white">10k+ Happy Customers</p>
//                                 <p className="text-xs text-gray-400">Weekly Community Updates</p>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Bottom Copyright */}
//             <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10">
//                 <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//                     <p className="text-xs font-medium opacity-60">
//                         © 2026 Offerwale Baba. All Rights Reserved. The Ultimate Deal Hub.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-6">
//                         <span className="text-xs font-medium opacity-60 border-r border-white/20 pr-6 last:border-r-0">
//                             Verified by Google
//                         </span>
//                         <span className="text-xs font-medium opacity-60 border-r border-white/20 pr-6 last:border-r-0">
//                             Secure Checkout
//                         </span>
//                         <span className="text-xs font-medium opacity-60">
//                             India's #1 Wholesaler
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </motion.footer>
//     );
// };

// export default Footer;