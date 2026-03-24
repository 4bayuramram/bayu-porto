import React, { useEffect, useState } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ganti dengan API key kamu (untuk NewsAPI atau GNews)
  const API_KEY = "YOUR_API_KEY"; // Ganti dengan API key yang valid

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // API request untuk mendapatkan artikel berita terbaru (ganti URL jika pakai alternatif API)
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&pageSize=5&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading articles...</h2>;
  }

  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>📝 Latest Articles</h2>
      <div style={articlesContainerStyle}>
        {articles.map((article, index) => (
          <div key={index} style={articleCardStyle}>
            {article.urlToImage && (
              <img src={article.urlToImage} alt="article" style={imageStyle} />
            )}
            <h3 style={titleStyle}>{article.title}</h3>
            <p style={descriptionStyle}>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={readMoreStyle}
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styling for the Article component
const sectionStyle = {
  padding: "30px 20px",
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  margin: "20px auto",
  maxWidth: "800px",
};

const headerStyle = {
  textAlign: "center",
  fontSize: "2rem",
  marginBottom: "20px",
};

const articlesContainerStyle = {
  display: "grid",
  gap: "20px",
};

const articleCardStyle = {
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "15px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
  marginBottom: "15px",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

const descriptionStyle = {
  color: "#555",
  margin: "10px 0",
};

const readMoreStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Article;
