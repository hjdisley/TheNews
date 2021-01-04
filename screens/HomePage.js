import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';

const HomePage = () => {
  return (
    <View>
      <Header />
      <ArticleCard />
    </View>
  );
};

export default HomePage;
