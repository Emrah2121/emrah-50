import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (value.trim().length < 3) return "Adınız ən azı 3 simvol olmalıdır";
        break;
      case "email":
        if (!validateEmail(value)) return "Düzgün e-poçt ünvanı daxil edin";
        break;
      case "subject":
        if (value.trim().length < 20) return "Mövzu ən azı 20 simvol olmalıdır";
        break;
      case "message":
        if (value.trim().length < 30) return "Mesaj ən azı 30 simvol olmalıdır";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Mesaj uğurla göndərildi!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Header />

      <section id="contact-hero"></section>

      <div id="contact-container">
        <div className="contact-info">
          <h2>Əlaqə Məlumatları</h2>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-text">
              <h3>Ünvan</h3>
              <p>28 May küçəsi, ADNSU, Bakı, Azərbaycan</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-text">
              <h3>Telefon</h3>
              <p>+994 70 678 02 40</p>
              <p>+994 12 345 67 89</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-text">
              <h3>E-poçt</h3>
              <p>info@emrahstore.az</p>
              <p>support@emrahstore.az</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="contact-text">
              <h3>İş Saatları</h3>
              <p>Bazar ertəsindən Şənbəyə qədər</p>
              <p>10:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Mesaj Göndərin</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Adınız</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${
                  errors.name ? "invalid" : formData.name ? "valid" : ""
                }`}
                placeholder="Adınızı daxil edin"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error-message">{errors.name}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="email2">E-poçt Ünvanınız</label>
              <input
                type="email"
                id="email2"
                name="email"
                className={`form-control ${
                  errors.email ? "invalid" : formData.email ? "valid" : ""
                }`}
                placeholder="E-poçt ünvanınızı daxil edin"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error-message">{errors.email}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Mövzu</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`form-control ${
                  errors.subject ? "invalid" : formData.subject ? "valid" : ""
                }`}
                placeholder="Mövzunu daxil edin"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <small className="error-message">{errors.subject}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                className={`form-control ${
                  errors.message ? "invalid" : formData.message ? "valid" : ""
                }`}
                placeholder="Mesajınızı daxil edin"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className="error-message">{errors.message}</small>}
            </div>

            <button type="submit" className="submit-btn">
              Mesajı Göndər
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8272946274497!2d49.83189431541829!3d40.37719437936971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d061b02eb65%3A0x3d6f5980aef1a602!2sADNSU%20(Baku%20Engineering%20University)!5e0!3m2!1str!2saz!4v1627741850947!5m2!1str!2saz"
          allowFullScreen=""
          loading="lazy"
          title="ADNSU Map"
          style={{ border: 0, width: "100%", height: "400px" }}
        ></iframe>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Contact;
