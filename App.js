import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import ArticleScreen from './screens/ArticleScreen';

const App = () => {
  return <HomePage />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
