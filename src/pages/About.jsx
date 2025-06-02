import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/css/about.css';

const About = () => {
  return (
    <>
      <Header />
<br></br><br></br>
      <section id="page-header" className="about-header">
        <h2 style={{ color: "rgb(116, 2, 110)" }}>Haqqımızda</h2>
      </section>

      <section id="about-head" className="section-p1">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Bizim Komandamız"
        />
        <div>
          <h2>Bizim Hekayəmiz</h2>
          <p>
            2020-ci ildə kiçik bir mağaza olaraq fəaliyyətə başlayan Emrah Store,
            qısa zamanda Azərbaycanın ən etibarlı onlayn alış-veriş platformalarından
            birinə çevrildi. Müştəri məmnuniyyətini ən üst səviyyədə saxlamaq və yüksək
            keyfiyyətli məhsulları əlverişli qiymətlərlə təqdim etmək bizim əsas missiyamızdır.
          </p>
          <p>
            Komandamız hər gün sizin üçün daha yaxşı xidmət göstərmək üçün çalışır.
            Biz inanırıq ki, hər müştəri bizim üçün xüsusidir və hər bir sifarişə xüsusi
            diqqət yetiririk.
          </p>
          <br />
          <br />
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h4>
          Bizim Mağazamızı <span>Ziyarət Edin</span>
        </h4>
        <div className="video">
          <video controls width="250">
            <source src="#" type="video/webm" />
          </video>
        </div>
      </section>

      <section id="features" className="section-p1">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2rem",
          }}
        >
          Niyə Biz?
        </h2>
        <div className="feature-box">
          <div className="fe-box">
            <img
              src="https://img.icons8.com/ios-filled/100/ff6600/free-shipping.png"
              alt="Pulsuz Çatdırılma"
            />
            <h6>Pulsuz Çatdırılma</h6>
            <p>100 AZN-dən yuxarı sifarişlərdə Bakı daxilində pulsuz çatdırılma xidməti.</p>
          </div>
          <div className="fe-box">
            <img
              src="https://img.icons8.com/ios-filled/100/ff6600/guarantee.png"
              alt="Zəmanət"
            />
            <h6>2 İllik Zəmanət</h6>
            <p>Bütün məhsullarımız üçün ən azı 2 illik rəsmi zəmanət təqdim edirik.</p>
          </div>
          <div className="fe-box">
            <img
              src="https://img.icons8.com/ios-filled/100/ff6600/refund.png"
              alt="Geri Qaytarma"
            />
            <h6>Asan Geri Qaytarma</h6>
            <p>14 gün ərzində heç bir səbəb göstərmədən məhsulu geri qaytara bilərsiniz.</p>
          </div>
          <div className="fe-box">
            <img
              src="https://img.icons8.com/ios-filled/100/ff6600/online-support.png"
              alt="Dəstək"
            />
            <h6>24/7 Müştəri Dəstəyi</h6>
            <p>Hər zaman bizimlə əlaqə saxlaya biləcəyiniz peşəkarlardan ibarət dəstək komandamız.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
