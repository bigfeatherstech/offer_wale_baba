import React, { createContext, useState, useEffect } from 'react';

const LS_KEY = 'cart_items';

function loadCart() {
  try {
    const str = localStorage.getItem(LS_KEY);
    const raw = str ? JSON.parse(str) : [];
    return raw.map(i => ({ ...i, quantity: i.quantity || 1 }));
  } catch {
    return [];
  }
}

function saveCart(list) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(list));
  } catch {}
}

export const CartContext = createContext({
  items: [],
  add: () => {},
  remove: () => {},
  updateQty: () => {},
  toggle: () => {},
  contains: () => false,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(loadCart);

  const add = (prod) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.slug === prod.slug);
      let next;
      if (existing) {
        next = prev.map((p) =>
          p.slug === prod.slug ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      } else {
        next = [...prev, { ...prod, quantity: 1 }];
      }
      saveCart(next);
      return next;
    });
  };

  const remove = (slug) => {
    setItems((prev) => {
      const next = prev.filter((p) => p.slug !== slug);
      saveCart(next);
      return next;
    });
  };

  const updateQty = (slug, qty) => {
    setItems((prev) => {
      const next = prev
        .map((p) => (p.slug === slug ? { ...p, quantity: qty } : p))
        .filter((p) => p.quantity > 0);
      saveCart(next);
      return next;
    });
  };

  const toggle = (prod) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.slug === prod.slug);
      const next = exists ? prev.filter((p) => p.slug !== prod.slug) : [...prev, prod];
      saveCart(next);
      return next;
    });
  };

  const contains = (slug) => items.some((p) => p.slug === slug);

  useEffect(() => {
    const handler = () => setItems(loadCart());
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, toggle, contains }}>
      {children}
    </CartContext.Provider>
  );
};
