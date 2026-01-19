import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock, HelpCircle } from 'lucide-react';

export default function CustomerCare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-white to-primary/5 pt-6">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
           Your Support, Our Priority
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            We're here to help you! Choose your preferred way to get support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Phone className="text-secondary" size={32} />,
                title: "Your Orders",
                desc: "Available 24/7",
                detail: "+91 91730 00000",
                action: "Call Now",
                color: "bg-blue-50 border-blue-100"
              },
              {
                icon: <Mail className="text-accent" size={32} />,
                title: "Retun and Refunds",
                desc: "Response within 24 hours",
                detail: "support@offerwale.com",
                action: "Send Email",
                color: "bg-green-50 border-green-100"
              },
              {
                icon: <MessageCircle className="text-purple-500" size={32} />,
                title: "Manage Address",
                desc: "Instant help",
                detail: "Chat with our team",
                action: "Start Chat",
                color: "bg-purple-50 border-purple-100"
              },
              {
                icon: <Clock className="text-orange-500" size={32} />,
                title: "Payment Settings",
                desc: "Monday - Sunday",
                detail: "9:00 AM - 11:00 PM IST",
                action: "View Time",
                color: "bg-orange-50 border-orange-100"
              },
               {
                icon: <Clock className="text-orange-500" size={32} />,
                title: "Account Settings",
                desc: "Monday - Sunday",
                detail: "9:00 AM - 11:00 PM IST",
                action: "View Time",
                color: "bg-orange-50 border-orange-100"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className={`${item.color} p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.desc}</p>
                    <p className="text-lg font-semibold text-primary mb-3">{item.detail}</p>
                    <button className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary/90 transition-colors">
                      {item.action}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <HelpCircle className="text-secondary" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: "What is your return policy?", a: "We offer 7-day easy returns for all products." },
                { q: "How long does shipping take?", a: "Delivery within 5-7 business days across India." },
                { q: "Do you offer bulk discounts?", a: "Yes, contact our bulk inquiry team for special rates." }
              ].map((faq, idx) => (
                <div key={idx} className="border-b pb-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}