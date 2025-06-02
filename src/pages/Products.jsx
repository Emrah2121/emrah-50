// src/pages/Products.jsx
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filters, setFilters] = useState({
    categoryFilter: "",
    ratingFilter: "",
    priceFilter: "",
    searchTerm: "",
  });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const apiURL = "https://dummyjson.com/products/search?q=phone";

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
      })
      .catch(() => {
        toast.error("Məhsulları yükləmək mümkün olmadı.");
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    const product = allProducts.find((p) => p.id === productId);
    if (!product) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        toast.info(`${product.title} artıq səbətdədir.`);
        return prevCart;
      } else {
        toast.success(`${product.title} səbətə əlavə edildi!`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const applyFilters = () => {
    let filtered = [...allProducts];
    const { searchTerm, categoryFilter, ratingFilter, priceFilter } = filters;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(categoryFilter)
      );
    }

    if (ratingFilter) {
      const minRating = parseFloat(ratingFilter);
      filtered = filtered.filter((product) => product.rating >= minRating);
    }

    if (priceFilter) {
      const [min, max] = priceFilter.split("-").map(Number);
      filtered = filtered.filter((product) => {
        if (priceFilter.endsWith("+")) {
          return product.price >= min;
        }
        return product.price >= min && (isNaN(max) || product.price <= max);
      });
    }

    return filtered;
  };

  const filteredProducts = applyFilters();

  const handleFilterChange = (id, value) => {
    setFilters((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <FilterSection filters={filters} onFilterChange={handleFilterChange} />

      <section id="product1" className="section-p1">
        <h4>Telefonlar və qadcetlər</h4>
        <div
          className="container"
          id="product-list"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isInCart = cart.some((item) => item.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  disabled={isInCart}
                />
              );
            })
          ) : (
            <p>Heç bir məhsul tapılmadı.</p>
          )}
        </div>
      </section>

      <Footer />

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
    </>
  );
};

export default Products;
