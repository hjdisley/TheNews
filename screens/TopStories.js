import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import axios from 'axios';

const TopStories = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <View
        style={{
          borderTopWidth: 10,
          borderBottomWidth: 10,
          borderColor: 'lightgray',
        }}
      >
        <Tile
          imageContainerStyle={{ height: 75 }}
          imageSrc={require('../assets/Global_News.svg.png')}
          title="This is the Headline"
          contentContainerStyle={{ height: 70, marginTop: 10 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text>2h Ago</Text>
            <Text>BBC News</Text>
          </View>
        </Tile>
      </View>
    </ScrollView>
  );
};

export default TopStories;
