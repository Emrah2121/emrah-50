import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/detail.css";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        document.head.appendChild(link);

        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setMainImage(data.thumbnail || data.images?.[0]);
            })
            .catch(() => toast.error("Məhsul detalları yüklənmədi."));

        return () => {
            document.head.removeChild(link);
        };
    }, [id]);

    const handleThumbnailClick = (img, index) => {
        setMainImage(img);
        setCurrentImageIndex(index);
    };

    const navigateImages = (direction) => {
        if (!product) return;

        const newIndex = direction === 'next'
            ? (currentImageIndex + 1) % product.images.length
            : (currentImageIndex - 1 + product.images.length) % product.images.length;

        setCurrentImageIndex(newIndex);
        setMainImage(product.images[newIndex]);
    };

    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<i key={i} className="fas fa-star full-star"></i>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<i key={i} className="fas fa-star-half-alt half-star"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star empty-star"></i>);
            }
        }
        return stars;
    };

    if (!product) return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Yüklənir...</p>
        </div>
    );

    return (
        <>
            <Header />
            <br></br><br></br><br></br><br></br>

            <div className="product-detail-container">
                <div className="product-detail-card">
                    <div className="image-gallery">
                        <div className="main-image-container">
                            <img
                                className="main-image"
                                src={mainImage}
                                alt={product.title}
                            />
                           
                        </div>

                        <div className="thumbnail-gallery">
                            {product.images.slice(0, 6).map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`thumb-${idx}`}
                                    className={mainImage === img ? "active-thumb" : ""}
                                    onClick={() => handleThumbnailClick(img, idx)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="product-info">
                        <div className="product-header">
                            <h2>{product.title}</h2>
                            <div className="product-meta">
                                <span className="brand">
                                    <i className="fas fa-tag"></i> {product.brand}
                                </span>
                                <span className="category">
                                    <i className="fas fa-layer-group"></i> {product.category}
                                </span>
                            </div>
                        </div>

                        <div className="rating-container">
                            <div className="stars">
                                {renderRatingStars(product.rating)}
                                <span>({product.rating.toFixed(1)})</span>
                            </div>
                            <span className="review-count">
                                <i className="fas fa-comment"></i> 24 reviews
                            </span>
                        </div>

                        <div className="price-container">
                            <span className="current-price">${product.price}</span>
                            <span className="original-price">${(product.price + 10).toFixed(2)}</span>
                            <span className="discount-badge">-10% </span>
                        </div>


                        <p className="description">{product.description}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetail;