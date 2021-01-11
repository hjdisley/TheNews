import React, { useState, useEffect } from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
} from 'react-native';
import ArticleCard from '../components/ArticleCard';

const TechNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=cdb1b0f5c10b498ab9bff1ed7e1b63bb`
      );
      const jsonData = await response.json();
      setArticles(jsonData.articles);
      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      throw err;
    }
  };

  const handleRefresh = () => {
    getNews();
    setRefreshing(true);
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading)
    return (
      <ActivityIndicator size="large" color="red" style={{ marginTop: 250 }} />
    );

  return (
    <View>
      <View style={{ flexDirection: 'row' }}></View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        data={articles}
        renderItem={ArticleCard}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default TechNews;
