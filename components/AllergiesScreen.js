import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


export default class AllergiesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text : '',
      data : []
    };
  }

  _loadData(text) {
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
    return (<Text>This is Allergies Screen!</Text>);

  }
}
