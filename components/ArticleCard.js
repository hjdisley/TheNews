import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Tile } from 'react-native-elements';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ArticleCard = ({ item }) => {
  return (
    <View
      style={{
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: 'lightgray',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.url);
        }}
      >
        <Tile
          imageContainerStyle={{ height: 75 }}
          imageSrc={{ uri: item.urlToImage }}
          title={item.title}
          titleStyle={{ fontSize: 12, fontWeight: 'bold', paddingTop: 1 }}
          contentContainerStyle={{ height: 70, marginTop: 10 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 12 }}>
              {moment(item.publishedAt).fromNow()}
            </Text>
            <Text style={{ fontSize: 10 }}>Source: {item.source.name}</Text>
          </View>
        </Tile>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleCard;
