import React from 'react';
import axios from 'react-native-axios';
const address = require('../address');
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default class AllergiesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text : '',
      allergy : []
    };
  }

  _loadData(text) {
    this.setState({
      text : text
    });
  }

  _onPressButton(text) {
    this.setState({
      allergy : this.state.allergy.concat(text)
    });
    console.log('This is the data variable line 24:',this.state.allergy);
  }

  _addToDatabase() {
    var data = {};
    data.username = 'd@d.com';
    data.allergy = this.state.allergy;
    console.log('This is the database data',data);
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={{fontSize: 20, height: 40}}
            onChangeText={(text) => this._loadData(text)}
          />
          <Button
            onPress={() => this._onPressButton(this.state.text)}
            color="#841584"
            title="Press Me"
          />
          <Text>Local  : {this.state.text}</Text>
          <Button
            onPress={() => this._addToDatabase()}
            color="#841584"
            title="Add to MyList"
          />
      </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
  },
});
