import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


export default class AllergiesScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text : '',
      data : []
    };
  }

  _loadData(text){
    this.setState({
      text : text
    });
  }

  _onPressButton(text) {
    this.setState({
      data : this.state.data.concat(text)
    });
    // console.log('This is the data variable line 25:',this.state.data);
  }

  render() {
  return (
    <View>
        <TextInput
          onChangeText={(text) => this._hello(text)}
        />
        <Button
          onPress={() => this._onPressButton(this.state.text)}
          title="Press Me"
        />
        <Text>Local  : {this.state.text}</Text>
    </View>
    );

  }
}
