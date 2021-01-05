import React from 'react';
import { View, Text } from 'react-native';
import ArticleCard from '../components/ArticleCard';

const TechNews = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Tech News</Text>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </View>
  );
};

export default TechNews;
