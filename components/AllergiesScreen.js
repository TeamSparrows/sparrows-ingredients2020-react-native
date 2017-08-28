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
  render() {
    return (<Text>This is Allergies Screen!</Text>);

  }
}
