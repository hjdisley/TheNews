import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';

const TopStories = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Top Stories</Text>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </View>
  );
};

export default TopStories;
