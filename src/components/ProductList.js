import React, { useState } from "react";
import "../assets/css/ProductList.css";

const products = [
  {
    id: 1,
    brand: "Xiaomi",
    name: "Redmi K40",
    img: "https://www.bakuelectronics.az/assets/cache_image/products/135579/smartfon-vivo-v25e-8gb128gb-sunrise-gold-4_260x204_adf.jpg",
    features: [
      "8GB RAM",
      "128GB yaddaş",
      "6.67 inch AMOLED ekran",
      "48MP kamera",
    ],
  },
  {
    id: 2,
    brand: "Oppo",
    name: "Oppo A56",
    img: "https://www.bakuelectronics.az/assets/cache_image/products/160351/vivo-y19s-4gb128gb-silver-4_260x204_adf.jpg",
    features: [
      "4GB RAM",
      "128GB yaddaş",
      "6.52 inch IPS LCD ekran",
      "13MP kamera",
    ],
  },
  {
    id: 3,
    brand: "Samsung",
    name: "QLED Smart TV",
    img: "https://www.bakuelectronics.az/assets/cache_image/products/155833/samsung-qled-qe55q70dauxru-4_260x204_adf.jpg",
    features: [
      "55 inch QLED ekran",
      "4K UHD",
      "Smart TV funksiyaları",
      "HDR dəstəyi",
    ],
  },
  {
    id: 4,
    brand: "Vivo",
    name: "Vivo A50",
    img: "https://www.bakuelectronics.az/assets/cache_image/products/135597/smartfon-vivo-v25-8gb-256gb-aquamarine-blue-1_260x204_adf.jpg",
    features: [
      "8GB RAM",
      "256GB yaddaş",
      "6.38 inch AMOLED ekran",
      "48MP + 8MP kamera",
    ],
  },
];

const ProductList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="product1" className="section-p1">
      <h2 className="section-title">Seçilmiş Məhsullar</h2>
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className="product" onClick={() => openModal(product)}>
            <img src={product.img} alt={product.name} className="product-img" />
            
            <div className="des">
              <span className="brand">{product.brand}</span>
              <h5 className="product-name">{product.name}</h5>
            </div>
            <i className="fa-solid fa-eye cart"></i>
          </div>
        ))}
      </div>

      {modalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="modal-img"
            />
            <h4>{selectedProduct.name}</h4>
            <h4>Xüsusiyyətlər</h4>
            <ul>
              {selectedProduct.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductList;
