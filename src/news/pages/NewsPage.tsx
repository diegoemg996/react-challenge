import { useState } from "react";
import { NewsItem } from "../components/NewsItem";
import useNews from "../hooks/useNews";

export const NewsPage = () => {

  const { news, loading, error } = useNews("technology");
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="container">
      <h1 className="m-t-3">News</h1>

      <input 
        type="text" 
        className="text-field p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
        className="btn btn-primary p-2"
      >Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="news__grid">
        {news.map((article) => (
          (
            !!article.author && <NewsItem key={article.title} article={article} />
          )
          
        ))}
      </div>
      

    </div>
  )
}
