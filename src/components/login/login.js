/* jshint esversion:6 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class Login extends Component{
	render(){
		return(
			<View style={styles.myview}>
				<Text style={styles.login}>Parikshit!</Text>
				<Text style={styles.login}> Welcome to Login Screen </Text>
			</View>
		);
	}
}



var styles = StyleSheet.create({
  myview:  {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  login:{
  	color: '#fff',
  	fontSize: 26
  }
});

export default Login;


