import { useState, useEffect } from 'react';
import axios from 'axios';
import { Article, NewsResponse } from '../interfaces/news.interface';


const useNews = (term: string = "") => {

  const NEWS_API_KEY = '07258d14c7714b2fae02c3ae27c3e3c6';
  const NEWS_API_URL = `https://newsapi.org/v2/everything?`;

  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<NewsResponse>(`${NEWS_API_URL}q=${term}&pageSize=12&apiKey=${NEWS_API_KEY}`);
        setNews(response.data.articles);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { news, loading, error };
};

export default useNews;
