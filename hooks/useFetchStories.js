import { useState, useEffect } from "react";

const useFetchStories = (topic, numOfResults = 10) => {
  const [articles, setArticles] = useState({
    "Top Stories": [],
    business: [],
    technology: [],
    sports: [],
    science: [],
  });
  const [loading, setLoading] = useState(true);

  const getNews = async (topic, numOfResults) => {
    try {
      const response = await fetch(
        topic === "Top Stories"
          ? `https://newsapi.org/v2/top-headlines?country=gb&pageSize=${numOfResults}apiKey=cdb1b0f5c10b498ab9bff1ed7e1b63bb`
          : `https://newsapi.org/v2/top-headlines?country=gb&pageSize=${numOfResults}category=${topic}&apiKey=cdb1b0f5c10b498ab9bff1ed7e1b63bb`
      );
      const jsonData = await response.json();
      setArticles({ ...articles, [topic]: jsonData.articles });
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getNews(topic);
  }, [topic]);

  return { data: articles, loading };
};

export default useFetchStories;
