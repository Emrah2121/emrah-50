import React from "react";
import { Link } from "react-router-dom";


const Hero = () => (
  <section id="hero">
    <h3>Bütün Məhsullarda</h3>
   <p><span style={{ color: "red" }}>70%-ə</span> qədər endirim</p>
   <Link to="/product">
  <button>İndi Al</button>
</Link>

  </section>
);

export default Hero;
