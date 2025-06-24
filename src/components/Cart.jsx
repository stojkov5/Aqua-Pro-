import React from "react";
import "../styles/Cart.css";
import { Row, Col } from "antd";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Cart = () => {
  const queryClient = useQueryClient();

  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      try {
        const saved = localStorage.getItem("aquaProCart");
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    },
  });

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    localStorage.setItem("aquaProCart", JSON.stringify(updated));
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  return (
    <Row justify="center" className="cart-section py-30">
      <Col span={20}>
        <div className="cart-container">
          <h2 className="cart-title">Cart</h2>
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-img" />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    {item.size && <p>Size: {item.size}</p>}
                    <button onClick={() => removeFromCart(index)} className="cart-remove">
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Cart;
