import React from 'react';
import { Text, View, FlatList } from 'react-native';

const List = ({list, index}) => {
  let cardList = list.cardList || [],
      data = cardList[index] || {};

  return (
    <View>
      <Text>{index}</Text>
      <Text>id: {data.id}</Text>
      <Text>expire_date: {data.expire_date}</Text>
      <Text>created_at: {data.created_at}</Text>
      <Text>updated_at: {data.updated_at}</Text>
      <Text>description: {data.description}</Text>
    </View>
  );
}

export default List;
