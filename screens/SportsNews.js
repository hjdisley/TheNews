import React from 'react';
import { View, Text } from 'react-native';
import ArticleCard from '../components/ArticleCard';

const SportsNews = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Sports News</Text>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </View>
  );
};

export default SportsNews;
