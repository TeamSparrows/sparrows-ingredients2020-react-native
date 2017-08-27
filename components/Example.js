import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'react-native-axios'
import Welcome from './welcome'
const address = require('../address')

export default class Example extends React.Component {
  constructor() {
    super();


    this.testAPI = this.testAPI.bind(this)
  }
  componentDidMount() {

  }
  testAPI() {
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
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
        <Text>Hello World!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="Test Api" onPress={this.testAPI} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
