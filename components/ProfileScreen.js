import React, { Component } from 'react';
import axios from 'react-native-axios';
const address = require('../address');
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Keyboard,
  TextInput,
  ScrollView,
  Linking,
} from 'react-native';

import { Constants, WebBrowser } from 'expo';


export default class ProfileScreen extends Component {
  // state = {
  //   result: null,
  // };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.enterText = this.enterText.bind(this);
    this.postUser = this.postUser.bind(this);
    this.handlePress = this.handlePress.bind(this);
    // this.renderResult = this.renderResult.bind(this);
  }

  postUser() {
    let email = this.state.email;
    let data = { email };
    // axios.get(`${address}:9000/api/test`)
    // axios.get(`${address}:9000/api/ingredients/${search}`)
    axios.post(`${address}:9000/api/findOrCreateUser`, {data})
    .then((res) => {
      console.log('user email res.data', res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  enterText() {
    return (
      <Text>{this.state.text}</Text>
    )
  }
  handlePress = () => {
    console.log('handlePress')
    console.log('this.state.searchResultLink', this.state.searchResultLink);
    // WebBrowser.openBrowserAsync(this.state.searchResultLink);
    Linking.openURL(this.state.searchResultLink);
  };

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.hi}>User Profile</Text>
        <TextInput
          // style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          placeholder='Enter email...'
          onSubmitEditing={this.postUser}
          autoCorrect={true}
          keyboardType="email-address"
          blurOnSubmit={true}
          keyboardAppearance="dark"
          placeholderTextColor="lightblue"
          returnKeyType="search"
        />
        <Button title="Enter Search" onPress={this.postUser} />
        <View><Text>{this.state.email}</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  hi: {
    color: '#34495e',
    fontSize: 20
  },

});
