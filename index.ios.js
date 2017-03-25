/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /*jshint esversion:6 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Splash from './src/components/splash/splash';
import Login from './src/components/login/login';

class rn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Deekshit'
    };

        this.chat();
     //   this.onSend = this.onSend.bind(this);

    console.log(this);
  }

  chat(){
    console.log('Chat called...');
  }



  render() {
    return(
        <Navigator initialRoute = {{title: 'Parikshit', id: 'Splash', index: 0}}
          renderScene = {(route, navigator) => 
                this.renderScene(route, navigator)
          }
          configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom
          }
        />
    )
  }

  renderScene(route, navigator){
    switch(route.id){
      case 'Splash':
        return <Splash route={route} navigator={navigator} />
      case 'Login':
        return <Login />
    }
  }
}

export default rn;


var styles = StyleSheet.create({
  myview:  {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
AppRegistry.registerComponent('rn', () => rn);
