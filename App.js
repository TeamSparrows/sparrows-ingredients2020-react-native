import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, Image, TextInput, View } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import SearchIngredients from './components/SearchIngredients';
import PhotoScreen from './components/PhotoScreen';
import AllergiesScreen from './components/AllergiesScreen';
import ProfileScreen from './components/ProfileScreen';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const MainScreenNavigator = TabNavigator({
  Search: { screen: SearchIngredients },
  Photo: { screen: PhotoScreen },
  Allergies: { screen: AllergiesScreen },
  Profile: { screen: ProfileScreen },
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
        <Ionicons  name="md-checkmark-circle" size={32} color="lightblue" />
        <Ionicons  name="md-aperture" size={32} color="lightblue" />
        <Ionicons  name="md-flame" size={32} color="lightblue" />
        <Ionicons  name="md-contact" size={32} color="lightblue" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24,
  },
  work: {
    flex: 9,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 20,
  },
  nav: {
    flex: 1,
    backgroundColor: '#40c4ff',
  },
});
