import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Email daxil edin.");
    } else if (!validateEmail(email)) {
      toast.error("Email formatı yalnışdır.");
    } else {
      toast.success("Abunə olundu!");
      setEmail("");
    }
  };

  return (
    <section id="email" className="section-p1">
      <div className="email-text">
        <h4>Abunə Olun</h4>
        <p>
         Email ünvanınıza yeni məhsullar və <span>xüsusi təkliflər </span>haqqında məlumat alın.
        </p>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Email ünvanınız"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn normal" onClick={handleSubscribe}>
          Abunə Olun
        </button>
      </div>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        closeButton={false} 
      />
    </section>
  );
};

export default Subscribe;
