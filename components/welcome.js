import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the application!!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
