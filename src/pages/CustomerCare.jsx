// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MessageCircle, Clock, HelpCircle } from 'lucide-react';

// export default function CustomerCare() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-primary/5 via-white to-primary/5 pt-6">
//       <div className="container mx-auto px-4 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
//            Your Support, Our Priority
//           </h1>
//           <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
//             We're here to help you! Choose your preferred way to get support.
//           </p>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {[
//               {
//                 icon: <Phone className="text-secondary" size={32} />,
//                 title: "Order Management",
//                 desc: "View, track, and manage all customer orders in one place",
//                 // detail: "+91 91730 00000",
//                 action: "Call Now",
//                 color: "bg-blue-50 border-blue-100"
//               },
//               {
//                 icon: <Mail className="text-accent" size={32} />,
//                 title: "Easy RetuRn and Refunds",
//                 desc: "Simple returns and fast refunds, made stress-free.",
//                 // detail: "support@offerwale.com",
//                 action: "Send Email",
//                 color: "bg-green-50 border-green-100"
//               },
//               {
//                 icon: <MessageCircle className="text-purple-500" size={32} />,
//                 title: "Address Management",
//                 desc: "Add, edit, or remove delivery addresses easily.",
//                 // detail: "Chat with our team",
//                 action: "Start Chat",
//                 color: "bg-purple-50 border-purple-100"
//               },
//               {
//                 icon: <Clock className="text-orange-500" size={32} />,
//                 title: "Billing & Payments",
//                 desc: "Manage cards, UPI, and other payment options securely",
//                 // detail: "9:00 AM - 11:00 PM IST",
//                 action: "View Time",
//                 color: "bg-orange-50 border-orange-100"
//               },
//                {
//                 icon: <Clock className="text-orange-500" size={32} />,
//                 title: "Profile & Security",
//                 desc: "Update your personal information, password, and preferences.",
//                 // detail: "9:00 AM - 11:00 PM IST",
//                 action: "View Time",
//                 color: "bg-orange-50 border-orange-100"
//               }
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.03 }}
//                 className={`${item.color} p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-white rounded-xl shadow-md">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
//                     <p className="text-gray-600 mb-2">{item.desc}</p>
//                     <p className="text-lg font-semibold text-primary mb-3">{item.detail}</p>
//                     <button className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary/90 transition-colors">
//                       {item.action}
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
          
//           {/* FAQ Section */}
//           {/* <div className="bg-white rounded-2xl p-8 shadow-xl border">
//             <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
//               <HelpCircle className="text-secondary" /> Frequently Asked Questions
//             </h2>
//             <div className="space-y-4">
//               {[
//                 { q: "What is your return policy?", a: "We offer 7-day easy returns for all products." },
//                 { q: "How long does shipping take?", a: "Delivery within 5-7 business days across India." },
//                 { q: "Do you offer bulk discounts?", a: "Yes, contact our bulk inquiry team for special rates." }
//               ].map((faq, idx) => (
//                 <div key={idx} className="border-b pb-4">
//                   <h3 className="font-bold text-lg text-gray-800 mb-2">{faq.q}</h3>
//                   <p className="text-gray-600">{faq.a}</p>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//         </motion.div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MessageCircle, Clock, 
  Package, CreditCard, Shield, MapPin,
  HeadphonesIcon, ChevronRight, Sparkles,
  X, HelpCircle, User, Settings
} from 'lucide-react';

export default function CustomerCare() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Package size={20} />,
      title: "Order Tracking",
      desc: "Track your orders in real-time",
      tag: "Popular",
      color: "secondary"
    },
    {
      id: 2,
      icon: <CreditCard size={20} />,
      title: "Returns & Refunds",
      desc: "Easy 7-day return policy",
      tag: "Fast",
      color: "accent"
    },
    {
      id: 3,
      icon: <MapPin size={20} />,
      title: "Address Help",
      desc: "Manage delivery addresses",
      tag: null,
      color: "primary"
    },
    {
      id: 4,
      icon: <Shield size={20} />,
      title: "Payment Issues",
      desc: "Resolve payment problems",
      tag: "Secure",
      color: "secondary"
    },
    {
      id: 5,
      icon: <User size={20} />,
      title: "Account Security",
      desc: "Password & privacy settings",
      tag: null,
      color: "accent"
    }
   
  ];

  const quickActions = [
    {
      icon: <Phone size={18} />,
      title: "Call Now",
      value: "+91 91730 00000",
      action: "Dial",
      pulse: true
    },
    {
      icon: <Mail size={18} />,
      title: "Email Support",
      value: "support@offerwale.com",
      action: "Email",
      pulse: false
    },
    {
      icon: <MessageCircle size={18} />,
      title: "Live Chat",
      value: "24/7 Available",
      action: "Chat",
      pulse: true
    },
    {
      icon: <Clock size={18} />,
      title: "Business Hours",
      value: "9 AM - 11 PM",
      action: "View",
      pulse: false
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Services', count: 6 },
    { id: 'popular', label: 'Popular', count: 2 },
    { id: 'urgent', label: 'Urgent', count: 3 }
  ];

  // Filter services based on active tab
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.tag?.toLowerCase() === activeTab);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300 }
    },
    hover: { 
      y: -5,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const detailVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      marginTop: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      marginTop: 12,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.sin(i) * 100],
              y: [0, Math.cos(i) * 100],
              rotate: 360
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-secondary/20' : 
              i % 3 === 1 ? 'bg-primary/20' : 'bg-accent/20'
            }`}
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 10) % 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <div className="bg-[#f7a221] p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <HeadphonesIcon className="text-white" size={28} />
            </div>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl  text-primary mb-3">
               Your Support, Our Priority <span className="text-secondary"></span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Quick help for all your needs
          </p>
        </motion.div>

        {/* Quick Actions Bar */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {quickActions.map((action, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`bg-white rounded-xl p-4 shadow-sm border ${
                action.pulse ? 'border-secondary/20' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${
                  action.pulse ? 'bg-[#f7a221]' : 'bg-[#f7a221]'
                }`}>
                  <div className={action.pulse ? 'text-black' : 'text-black'}>
                    {action.icon}
                  </div>
                </div>
                {action.pulse && (
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-[#f7a221] rounded-full"
                  />
                )}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{action.title}</h3>
              <p className="text-lg font-bold text-primary mb-3">{action.value}</p>
              <button className={`w-full text-sm font-medium py-2 rounded-lg ${
                action.pulse 
                  ? 'bg-[#f7a221] text-white hover:bg-secondary/90' 
                  : 'bg-[#f7a221] text-white hover:bg-primary/90'
              }`}>
                {action.action}
              </button>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#f7a221] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id
                  ? 'bg-white/20'
                  : 'bg-gray-100'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={idx}
              onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer relative overflow-hidden ${
                expandedCard === service.id ? 'ring-2 ring-secondary/20' : ''
              }`}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 ${
                  service.color === 'secondary' ? 'bg-secondary/5' :
                  service.color === 'accent' ? 'bg-accent/5' :
                  'bg-primary/5'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: expandedCard === service.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      service.color === '[#f7a221]' ? 'bg-[#f7a221] text-[#f7a221]' :
                      service.color === '[#f7a221]' ? 'bg-[#f7a221] text-[#f7a221]' :
                      'bg-[#f7a221] text-primary'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCard === service.id ? 180 : 0 }}
                    className="text-gray-400"
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedCard === service.id && (
                    <motion.div
                      variants={detailVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex gap-2 mb-3">
                          <button className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/90">
                            Get Help
                          </button>
                          <button className="flex-1 border border-primary text-primary py-2 rounded-lg text-sm font-medium hover:bg-primary/5">
                            Learn More
                          </button>
                        </div>
                        <p className="text-xs text-gray-500">
                          Click "Get Help" to connect with our support team immediately.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {service.tag && (
                  <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium ${
                    service.color === '[#f7a221]' ? 'bg-[#f7a221] text-black' :
                    service.color === '[#f7a221]' ? 'bg-[#f7a221] text-black' :
                    'bg-[#f7a221] text-black'
                  }`}>
                    {service.tag}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-lg">
              <HelpCircle className="text-primary" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Quick Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How to track my order?", a: "Go to My Orders section or use tracking link in email." },
              { q: "Return window?", a: "7 days from delivery date for most products." },
              { q: "Payment methods?", a: "Cards, UPI, NetBanking, COD available." }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{faq.q}</h3>
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-4 rounded-xl shadow-lg">
            <Sparkles size={20} />
            <span className="font-bold">Need more help? We're here 24/7</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-4 py-2 rounded-lg font-bold ml-4"
            >
              Contact Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}









