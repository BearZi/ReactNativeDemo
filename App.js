import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from "redux-logger";
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import Content from './containers/Content';
import Home from './components/Home';
import reducer from './reducers';
import { listenApi } from './actions';

const store = createStore(reducer, applyMiddleware(logger), applyMiddleware(thunkMiddleware));
store.dispatch(listenApi());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="Home" component={Home} title="Home" initial/>
            <Scene key="Content" component={Content} path="content/:index" title="Content" duration={1}/>
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;

AppRegistry.registerComponent('AwesomeProject', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
