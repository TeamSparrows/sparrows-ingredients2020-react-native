import React, { Component } from 'react';
import axios from 'react-native-axios';
const address = require('../address');
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Keyboard,
  TextInput,
  ScrollView
} from 'react-native';


export default class SearchIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.enterText = this.enterText.bind(this);
    this.getIngredientsFromDatabase = this.getIngredientsFromDatabase.bind(this);
  }

  componentDidMount() {

  }
  getIngredientsFromDatabase(/*search*/) {
    var search = 'alum'
    data = {
      ingredient: 'alum',
      username: 'd@d.com'
    }
    console.log('search', search);
    console.log('getIngredientsFromDatabase ran')
    // axios.get(`${address}:9000/api/test`)
    // axios.get(`${address}:9000/api/ingredients/${search}`)
    axios.post(`${address}:9000/api/ingredients/`, {data})
    .then(function (response) {
      alert(response.data._id)
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    // axios.get(`${address}:9000/api/ingredients:${search}`)
    //   .then((response) => {
    //     // var res = response.json()
    //     // console.log('res', res);
    //     console.log('Res Data',response.data);
    //     Alert.alert(response.data)
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   })


  }


  postIngredient() {
    axios.get(`${address}:9000/api/test`)
      .then((response) => {
        // var res = response.json()
        // console.log('res', res);
        console.log('Res Data',response.data);
        Alert.alert(response.data)
      })
      .catch((err) => {
        console.log('err', err);
      })
  }



  enterText() {

    return (
      <Text>{this.state.text}</Text>
    )
  }
  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.hi} >Hii</Text>
        <TextInput
          ref={(input) => this.input = input}
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='enter text here'
          onSubmitEditing={this.postUser}
          autoCapitalize="characters"
          autoCorrect={true}
          keyboardType="email-address"
          blurOnSubmit={true}
          keyboardAppearance="dark"
        />
        <Button title="getIngredientsFromDatabase" onPress={this.getIngredientsFromDatabase} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  textInput: {height: 40, borderColor: 'gray', borderWidth: 1},
  hi: {color: 'lightblue', fontSize: 30 },
});
