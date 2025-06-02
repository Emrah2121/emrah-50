import React from "react";
import { useNavigate } from "react-router-dom";

const generateStarRating = (rating) => {
  let stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }
  return stars;
};

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onAddToCart(product.id);
  };

  return (
    <div
      className="product"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
      data-category={product.category.toLowerCase()}
      data-rating={product.rating}
      data-price={product.price}
    >
      <img src={product.thumbnail} alt={product.title} />
      <div className="des">
        <span>{product.brand}</span>
        <h5>{product.title}</h5>
        <div className="star">{generateStarRating(product.rating)}</div>
        <h4>${product.price}</h4>
      </div>
      <a href="#" className="add-to-cart" onClick={handleAddToCart}>
        <i className="fal fa-shopping-cart cart"></i>
      </a>
    </div>
  );
};

export default ProductCard;
