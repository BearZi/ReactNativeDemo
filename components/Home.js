import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, FlatList } from 'react-native';
import { Actions } from "react-native-router-flux";

const eachItem = ({item, index}) => {
  console.log("eachItem = ", index);

  return (
    <Button onPress={() => Actions.Content({index: index})}
            title={"" + item.id}>{item.id}
            key={item.id}
    </Button> 
  );
};

const Home = (state) => {
  return (
    <View>
      <Text>Home Page</Text>
      <FlatList
        data={state.cardList}
        renderItem={eachItem}
      />
    </View>
  );
}
// export default Home;
export default connect(state => state)(Home);
