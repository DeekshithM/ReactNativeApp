/*jshint esversion: 6 */



import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Splash extends Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
			this.gotoLogin();
	}


	gotoLogin() {
		var that = this;
		setTimeout(function(){
			that.props.navigator.push({id: 'Login'});
		}, 3000);

		setTimeout(function(){
			that.props.navigator.pop();
		}, 6000);
	}


	render(){
		return(
			<View style={styles.myview}>
				<Text>Hello, {this.props.route.title}! How are you??</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
  myview:  {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Splash;