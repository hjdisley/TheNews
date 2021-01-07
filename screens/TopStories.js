import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import ArticleCard from '../components/ArticleCard';

const TopStories = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=cdb1b0f5c10b498ab9bff1ed7e1b63bb`
      );
      const jsonData = await response.json();
      setArticles(jsonData.articles);
      setLoading(false);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading)
    return (
      <ActivityIndicator size="large" color="red" style={{ marginTop: 250 }} />
    );

  return (
    <View style={styles.container}>
      <View style={styles.row}></View>
      <FlatList
        data={articles}
        renderItem={ArticleCard}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'grey',
  },
});
export default TopStories;
