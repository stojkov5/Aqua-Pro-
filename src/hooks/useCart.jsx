import { useState } from "react";

let cart = [];

const useCart = () => {
  const [items, setItems] = useState(cart);

  const addToCart = (product) => {
    const updated = [...cart, product];
    cart = updated;
    setItems([...updated]);
  };

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setItems([...cart]);
  };

  return { cart: items, addToCart, removeFromCart };
};

export default useCart;
