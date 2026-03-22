import React, { useEffect, useState } from "react";

export default function TechNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ganti dengan API key kamu (https://newsapi.org/)
  const API_KEY = "YOUR_API_KEY_HERE";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&pageSize=3&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading berita...</h2>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>📰 Berita Teknologi</h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="news"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
            )}

            <h3>{article.title}</h3>
            <p>{article.description}</p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Baca selengkapnya →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
