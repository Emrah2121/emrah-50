import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/css/blog.css';

const Blog = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const toggleBlog = (index) => {
    setExpandedBlog(expandedBlog === index ? null : index);
  };

  const blogData = [
    {
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "2025 Yay Kolleksiyası: Ən Son Trendlər",
      preview: "Bu yaz üçün ən son moda trendləri, Emrah Store-un yeni kol...",
      full: "Bu yaz üçün ən son moda trendləri, Emrah Store-un yeni kolleksiyasında parlaq rənglər, rahat kəsimlər və gündəlik istifadəyə uyğun geyimlər yer alır.",
      date: "15 May 2025",
      comments: "5 Şərh"
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "2025-in Ən Yaxşı Texnoloji Məhsulları",
      preview: "2025-ci ildə ağıllı saatlar, süni intellekt dəstəklənən cihazl...",
      full: "2025-ci ildə ağıllı saatlar, süni intellekt dəstəklənən cihazlar və enerjiyə qənaət edən texnologiyalar diqqət çəkdi.",
      date: "8 May 2025",
      comments: "12 Şərh"
    },
    {
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Emrah Store Komandası İlə Tanış Olun",
      preview: "Arxada duran komandamızı tanıdın və bizim iş prin...",
      full: "Arxada duran komandamızı tanıdın və bizim iş prinsiplərimizi öyrənin. Komandamızın peşəkar və səmimi yanaşması xidmət keyfiyyətini artırır.",
      date: "1 May 2025",
      comments: "8 Şərh"
    },
    {
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Yaz Endirimləri Başladı",
      preview: "Bu yaz üçün xüsusi hazırladığımız endirim kampaniy...",
      full: "Bu yaz üçün xüsusi hazırladığımız endirim kampaniyaları ilə sizə böyük fürsətlər təqdim edirik. Geyimdən aksesuara qədər geniş seçim!",
      date: "24 Aprel 2025",
      comments: "15 Şərh"
    },
    {
      img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Çatdırılma Xidmətlərimiz",
      preview: "Çatdırılma xidmətlərimizdə etdiyimiz yeniliklər və yeni xidmətlər haqqında...",
      full: "Artıq sifarişlərinizi daha tez və rahat formada çatdırırıq! Yeni əməkdaşlıqlarımız və xidmət sahələrimiz haqqında ətraflı məlumat əldə edin.",
      date: "17 Aprel 2025",
      comments: "7 Şərh"
    },
    {
      img: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Yeni Ofisimiz",
      preview: "Yeni ofisimiz və xidmətlərimizdə etdiyimiz yeniliklər haqqında ətraflı...",
      full: "Emrah Store artıq daha geniş və modern ofisdə xidmətinizdədir. Sizləri də yeni məkanımıza dəvət edirik!",
      date: "10 Aprel 2025",
      comments: "9 Şərh"
    }
  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <br /><br /><br />

      <section id="blog">
        <h4 className="blogTitle">Son Bloglar</h4>
        <br />
        <div className="blog-container">
          {currentBlogs.map((item, index) => (
            <div className="blog-box" key={indexOfFirstBlog + index}>
              <div className="blog-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="blog-details">
                <h4>{item.title}</h4>
                <p>{expandedBlog === indexOfFirstBlog + index ? item.full : item.preview}</p>
                <button className="read-more" onClick={() => toggleBlog(indexOfFirstBlog + index)}>
                  {expandedBlog === indexOfFirstBlog + index ? "Bağla" : "Davamını oxu"}
                </button>
                <div className="blog-meta">
                  <span><i className="far fa-calendar"></i> {item.date}</span>
                  <a href="#">{item.comments}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <a onClick={() => currentPage > 1 && paginate(currentPage - 1)}>&laquo;</a>
          {[...Array(Math.ceil(blogData.length / blogsPerPage))].map((_, i) => (
            <a
              key={i}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </a>
          ))}
          <a onClick={() => currentPage < Math.ceil(blogData.length / blogsPerPage) && paginate(currentPage + 1)}>&raquo;</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
