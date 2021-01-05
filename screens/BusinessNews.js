import React from 'react';
import { Text, View } from 'react-native';
import ArticleCard from '../components/ArticleCard';

const BusinessNews = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Business News</Text>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </View>
  );
};

export default BusinessNews;
