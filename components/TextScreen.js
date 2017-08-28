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
  ScrollView
} from 'react-native';


export default class TextScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.enterText = this.enterText.bind(this);
    this.getData= this.getData.bind(this);
    this.postUser= this.postUser.bind(this);
  }

  componentDidMount() {

  }
  getData() {
    axios.get(`${address}:9000/api/test`)
      .then((response) => {
        // var res = response.json()
        // console.log('res', res);
        console.log('Res Data',response.data);
        Alert.alert(response.data)
      })
      .catch((err) => {
        console.log('err', err);
      })
  }
  postData() {
    axios.get(`${address}:9000/api/test`)
      .then((response) => {
        // var res = response.json()
        // console.log('res', res);
        console.log('Res Data',response.data);
        Alert.alert(response.data)
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  postUser() {
    var string = this.state.text
    let data = {email: string}
    let fetchData = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    fetch(`${address}:8000/api/test`, fetchData)
      .then(function(res) {
        alert(res._bodyInit)
      })
    }
  enterText() {

    return (
      <Text>{this.state.text}</Text>
    )
  }
  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.hi} >Hii</Text>
        <TextInput
          ref={(input) => this.input = input}
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='enter text here'
          onSubmitEditing={this.postUser}
          autoCapitalize="characters"
          autoCorrect={true}
          keyboardType="email-address"
          blurOnSubmit={true}
          keyboardAppearance="dark"
        />
        { this.enterText() }
        <Button title="Movie Data" onPress={this.getData} />
        <Button title="Post User Email" onPress={this.postUser} />
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
  textInput: {height: 40, borderColor: 'gray', borderWidth: 1},
  hi: {color: 'lightblue', fontSize: 30 },
});
