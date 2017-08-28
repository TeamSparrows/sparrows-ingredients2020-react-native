import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Example from './Example'

export default class BarcodeScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Example />
      </View>

    )
  }
}
