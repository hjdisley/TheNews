import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import logo from '../assets/Global_News.svg.png';

const Header = () => {
  return (
    <View>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: { width: 160, height: 90, alignSelf: 'center' },
});

export default Header;
