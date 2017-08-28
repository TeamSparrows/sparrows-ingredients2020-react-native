import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';


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
    console.log('This is the data variable line 24:',this.state.data);
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
