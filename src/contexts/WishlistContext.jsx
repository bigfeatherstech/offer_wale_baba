import React, { createContext, useState, useEffect } from 'react';

const LS_KEY = 'wishlist_items';

function loadWishlist() {
  try {
    const str = localStorage.getItem(LS_KEY);
    return str ? JSON.parse(str) : [];
  } catch {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(list));
  } catch {}
}

export const WishlistContext = createContext({
  items: [],
  add: () => {},
  remove: () => {},
  toggle: () => {},
  contains: () => false,
});

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState(loadWishlist);

  const add = (prod) => {
    setItems((prev) => {
      if (prev.find((p) => p.slug === prod.slug)) return prev;
      const next = [...prev, prod];
      saveWishlist(next);
      return next;
    });
  };

  const remove = (slug) => {
    setItems((prev) => {
      const next = prev.filter((p) => p.slug !== slug);
      saveWishlist(next);
      return next;
    });
  };

  const toggle = (prod) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.slug === prod.slug);
      const next = exists ? prev.filter((p) => p.slug !== prod.slug) : [...prev, prod];
      saveWishlist(next);
      return next;
    });
  };

  const contains = (slug) => items.some((p) => p.slug === slug);

  // Sync across tabs
  useEffect(() => {
    const handler = () => setItems(loadWishlist());
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <WishlistContext.Provider value={{ items, add, remove, toggle, contains }}>
      {children}
    </WishlistContext.Provider>
  );
};
