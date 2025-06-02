import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/cart.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const updateQuantity = (productId, change, isDirectValue = false) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === productId);

    if (index !== -1) {
      if (isDirectValue) {
        let newQuantity = change;

        if (newQuantity > 10) {
          toast.error("10-dan çox ala bilməzsiniz!");
          newQuantity = 10;
        }

        if (newQuantity < 1) {
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index].quantity = newQuantity;
        }
      } else {
        let newQuantity = updatedCart[index].quantity + change;

        if (newQuantity > 10) {
          toast.error("10-dan çox ala bilməzsiniz!");
          newQuantity = 10;
        }

        if (newQuantity < 1) {
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index].quantity = newQuantity;
        }
      }
      updateCart(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Səbətiniz boşdur!");
      return;
    }
    updateCart([]);
    navigate("/checkout");
  };

  return (
    <>
      <Header />
      <div className="spacer"></div>
      {cart.length === 0 ? (
        <section id="cart2" className="section-">
          <div id="cart-container" className="empty-cart-container">
            <img
              src="https://img.freepik.com/premium-vector/empty-cart_701961-7086.jpg"
              alt="Empty Cart"
              className="empty-cart-image"
            />
            <h3 className="empty-cart-text">Səbətiniz boşdur</h3>
            <p className="empty-cart-desc">
              Alış-verişə davam etmək üçün{" "}
              <a href="/product" className="link">
                məhsullar
              </a>{" "}
              səhifəsinə keçid edin.
            </p>
          </div>
        </section>
      ) : (
        <section id="cart2" className="section-">
          <div id="cart-container" className="cart-items-container">
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;
              return (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-price">Qiymət: ${item.price.toFixed(2)}</p>
                  </div>

                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={item.quantity}
                      onChange={(e) => {
                        let val = parseInt(e.target.value);
                        if (isNaN(val)) val = 1;
                        updateQuantity(item.id, val, true);
                      }}
                      className="quantity-input"
                    />
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>

                  <div className="cart-item-total">${itemTotal.toFixed(2)}</div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                    aria-label="Remove item"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              );
            })}
          </div>

          <div id="cart-total" className="cart-total-section">
            <h3>
              Ümumi Məbləğ: <span id="total-price">${getTotalPrice().toFixed(2)}</span>
            </h3>
            <button className="checkout-btn" id="checkout-btn" onClick={handleCheckout}>
              Ödəniş Et
            </button>
          </div>
        </section>
      )}

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default CartPage;
