import React from "react";

const Footer = () => (
  <footer className="section-p1">
    <div className="col">
      <h4>Əlaqə</h4>
      <p><strong>Ünvan:</strong> 28 May,ADNSU</p>
      <p><strong>Telefon:</strong> 070-678-02-40</p>
      <p><strong>İş saatları:</strong> 10:00 - 20:00, B.e - Ş.</p>
      <div className="follow">
        <h4>Bizi İzləyin</h4>
        <div className="icon">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-pinterest-p"></i>
        </div>
      </div>
    </div>

    <div className="about">
      <div className="col">
        <h4>Haqqımızda</h4>
        <a href="#">Biz Kimik</a>
        <a href="#">Çatdırılma Məlumatı</a>
        <a href="#">Məxfilik Siyasəti</a>
        <a href="#">Şərtlər və Qaydalar</a>
        <a href="#">Bizimlə Əlaqə</a>
      </div>

      <div className="col">
        <h4>Hesabım</h4>
        <a href="#">Daxil Ol</a>
        <a href="#">Səbətə Bax</a>
        <a href="#">Hesabım</a>
        <a href="#">İstək Siyahısı</a>
        <a href="#">Sifarişi İzlə</a>
      </div>
    </div>

    <div className="copyright">
      <p>© 2025 Bütün hüquqlar qorunur! Site by Emrah</p>
    </div>
  </footer>
);

export default Footer;
