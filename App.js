import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './components/welcome'
const address = require('./address');

export default class App extends React.Component {
  componentDidMount() {

  }
  getMovieData() {
    fetch(`${address}:8000/api/test`)
      .then((response) => {
        var res = response.json()
        console.log('res', res);
        alert(response._bodyText)
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
        <Button title="Movie Data" onPress={this.getMovieData.bind(this)} />
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
