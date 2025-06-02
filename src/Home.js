import React from 'react';
import './assets/css/style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import ProductList from './components/ProductList';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const Home = () => (
  <div className="App">
    <Header />
    <Hero />
    <InfoCards />
    <ProductList />
    <Subscribe />
    <Footer />
  </div>
);

export default Home;
