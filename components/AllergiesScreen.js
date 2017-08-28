import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


export default class AllergiesScreen extends React.Component {
  render() {
  constructor (props) {
    super(props);
    this.state = {
      text : '',
      data : []
    };
  }
  return (
    <View>
        <TextInput/>
        <Button
          title="Press Me"
        />
    </View>
    );

  }
}
