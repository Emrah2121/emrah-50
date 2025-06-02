import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/checkout.css";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          console.log("Vaxt bitdi!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (t) => {
    const m = String(Math.floor(t / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return [...m, ...s];
  };

  const [formData, setFormData] = useState({
    card: ["", "", "", ""],
    mm: "",
    yy: "",
    cvc: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value, index = null) => {
    if (field === "card") {
      const updatedCard = [...formData.card];
      updatedCard[index] = value;
      setFormData({ ...formData, card: updatedCard });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    formData.card.forEach((v, i) => {
      if (!/^\d{4}$/.test(v)) newErrors[`card${i}`] = true;
    });

    if (!(formData.mm >= 1 && formData.mm <= 12)) newErrors.mm = true;
    if (!(formData.yy >= 23 && formData.yy <= 99)) newErrors.yy = true;
    if (!/^\d{3}$/.test(formData.cvc)) newErrors.cvc = true;

    if (!formData.name || formData.name.trim().split(" ").length < 2)
      newErrors.name = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Ödəniş uğurla göndərildi!");
      navigate("/");
    } else {
      toast.error("Zəhmət olmasa bütün sahələri düzgün doldurun.");
    }
  };

  const [m1, m2, s1, s2] = formatTime(timeLeft);

  return (
    <div className="screen flex-center">
      <form className="popup flex p-lg" onSubmit={handleSubmit}>
        <div className="close-btn pointer flex-center p-sm">
          <i className="ai-cross"></i>
        </div>
        <div className="flex-fill flex-vertical">
          <div className="header flex-between flex-vertical-center">
            <div className="flex-vertical-center">
              <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
              <span className="title">
                <strong>Əmrah Bank</strong>
                <span> Ödəniş</span>
              </span>
            </div>
            <div className="timer" data-id="timer">
              <span>{m1}</span>
              <span>{m2}</span>
              <em>:</em>
              <span>{s1}</span>
              <span>{s2}</span>
            </div>
          </div>

          <div className="card-data flex-fill flex-vertical">
            <div className="flex-between flex-vertical-center">
              <div className="card-property-title">
                <strong>Kart Nömrəsi</strong>
                <span>Kartda olan 16 rəqəmli nömrəni daxil edin</span>
              </div>
              <div className="f-main-color pointer">
                <i className="ai-pencil"></i> Redaktə et
              </div>
            </div>
            <div className="flex-between">
              <div className="card-number flex-vertical-center flex-fill">
                <div className="card-number-field flex-vertical-center flex-fill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
                    <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
                    <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" />
                  </svg>

                  {formData.card.map((val, i) => (
                    <input
                      key={i}
                      className="numbers"
                      type="text"
                      maxLength="4"
                      placeholder="0000"
                      value={val}
                      onChange={(e) => handleChange("card", e.target.value, i)}
                    />
                  ))}
                </div>

                {formData.card.some((_, i) => errors[`card${i}`]) ? (
                  <i className="fas fa-times-circle text-red ml-sm"></i>
                ) : (
                  <i className="ai-circle-check-fill size-lg f-main-color"></i>
                )}
              </div>
            </div>

            <div className="flex-between">
              <div className="card-property-title">
                <strong>Son İstifadə Tarixi</strong>
                <span>Kartın etibarlılıq müddətini daxil edin</span>
              </div>
              <div className="card-property-value flex-vertical-center">
                <div className="input-container half-width">
                  <input
                    className="numbers"
                    type="number"
                    placeholder="AY"
                    value={formData.mm}
                    onChange={(e) => handleChange("mm", e.target.value)}
                  />
                  {errors.mm && <i className="fas fa-times-circle text-red"></i>}
                </div>
                <span className="m-md">/</span>
                <div className="input-container half-width">
                  <input
                    className="numbers"
                    type="number"
                    placeholder="İL"
                    value={formData.yy}
                    onChange={(e) => handleChange("yy", e.target.value)}
                  />
                  {errors.yy && <i className="fas fa-times-circle text-red"></i>}
                </div>
              </div>
            </div>

            <div className="flex-between">
              <div className="card-property-title">
                <strong>CVC Nömrəsi</strong>
                <span>Kartın arxasındakı təsdiq kodunu daxil edin</span>
              </div>
              <div className="card-property-value">
                <div className="input-container">
                  <input
                    id="cvc"
                    type="password"
                    maxLength="3"
                    placeholder="CVC"
                    value={formData.cvc}
                    onChange={(e) => handleChange("cvc", e.target.value)}
                  />
                  <i id="cvc_toggler" data-target="cvc" className="ai-eye-open pointer"></i>
                  {errors.cvc && <i className="fas fa-times-circle text-red"></i>}
                </div>
              </div>
            </div>

            <div className="flex-between">
              <div className="card-property-title">
                <strong>Kart Sahibinin Adı</strong>
                <span>Kart sahibinin tam adını  daxil edin</span>
              </div>
              <div className="card-property-value">
                <div className="input-container">
                  <input
                    id="name"
                    type="text"
                    className="uppercase"
                    placeholder="Ad, Soyad"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                  {errors.name && <i className="fas fa-times-circle text-red"></i>}
                  <i className="ai-person"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="action flex-center">
            <button type="submit" className="b-main-color pointer">
              Ödənişi İndi Et
            </button>
          </div>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Checkout;
