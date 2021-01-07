import React from 'react';
import { View, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import moment from 'moment';

const ArticleCard = ({ item }) => {
  return (
    <View>
      <Tile
        imageContainerStyle={{ height: 75 }}
        imageSrc={{ uri: item.urlToImage }}
        title={item.title}
        titleStyle={{ fontSize: 14, paddingTop: 1 }}
        contentContainerStyle={{ height: 70, marginTop: 10 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>{moment(item.publishedAt).fromNow()}</Text>
          <Text style={{ paddingBottom: 1 }}>{item.source.name}</Text>
        </View>
      </Tile>
    </View>
  );
};

export default ArticleCard;
