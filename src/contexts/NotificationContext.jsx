import React, { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext({
  notify: (msg) => {}
});

export const NotificationProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const notify = useCallback((msg) => {
    const id = Date.now();
    setList((prev) => [...prev, { id, msg }]);
    // remove after 2.5 seconds
    setTimeout(() => {
      setList((prev) => prev.filter((n) => n.id !== id));
    }, 2500);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {/* inline animation styles for notifications */}
      <style>{`@keyframes slideUp { from { opacity:0; transform: translateY(20px);} to {opacity:1; transform: translateY(0);} } .animate-slideUp { animation: slideUp 0.3s ease-out; }`}</style>
      {/* notification container fixed at bottom-right */}
      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
        {list.map((n) => (
          <div
            key={n.id}
            className="bg-[#f7a221] text-black px-4 py-2 rounded-lg shadow-lg animate-slideUp"
          >
            {n.msg}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
