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
  ScrollView,
  Linking,
} from 'react-native';

import { Constants, WebBrowser } from 'expo';


export default class SearchIngredients extends Component {
  // state = {
  //   result: null,
  // };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: 'd@d.com',
      searchResultName: '',
      searchResultLink: '',
      result: null,
    };
    this.enterText = this.enterText.bind(this);
    this.getIngredientsFromDatabase = this.getIngredientsFromDatabase.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  getIngredientsFromDatabase(/*search*/) {

    let ingredient = this.state.text.toLowerCase();
    let username = this.state.username;
    let data = { ingredient, username };
    console.log('getIngredientsFromDatabase data', data);
    // axios.get(`${address}:9000/api/test`)
    // axios.get(`${address}:9000/api/ingredients/${search}`)
    axios.post(`${address}:9000/api/ingredients/`, {data})
    .then((res) => {
      var result = {
        searchResultName: res.data.name,
        searchResultLink: res.data.link || ''
      }
      console.log('result!!!!!!!', result);
      this.setState(result);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  enterText() {
    return (
      <Text>{this.state.text}</Text>
    )
  }
  handlePress = () => {
    console.log('handlePress')
    console.log('this.state.searchResultLink', this.state.searchResultLink);
    // WebBrowser.openBrowserAsync(this.state.searchResultLink);
    Linking.openURL(this.state.searchResultLink);
  };

  renderResult() {
    var wasClicked = this.state.buttonWasClicked
      return (
        this.state.searchResultLink
          ? <View>
              <Text>{  this.state.searchResultName + ' is harmful do not consume '}</Text>
              <TouchableOpacity
                onPress={this.handlePress}
                style={styles.helpLink}>
                <Text style={styles.helpLinkText}>
                  {`Click here for more info on ${this.state.searchResultName}!`}
                </Text>
              </TouchableOpacity>
            </View>
          : <Text>{this.state.searchResultName}</Text>
      )

  }
  render() {

    return (
      <View style={styles.container}>
        <TextInput
          ref={input=>this._input = input}
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='Search harmful ingredients....'
          onSubmitEditing={this.getIngredientsFromDatabase}
          autoCorrect={true}
          keyboardType="email-address"
          blurOnSubmit={true}
          keyboardAppearance="dark"
          placeholderTextColor="lightblue"
          returnKeyType="search"
        />
        <Button
          title="Enter Search"
          color="#841584"
          onPress={this.getIngredientsFromDatabase}
         />
        <View>{this.renderResult()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    marginTop: 50,
    margin: 20,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  textInput: {
    height: 40,
  },
  hi: {
    color: '#34495e',
    fontSize: 20
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
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


// postIngredient() {
//   axios.get(`${address}:9000/api/test`)
//     .then((response) => {
//       // var res = response.json()
//       // console.log('res', res);
//       console.log('Res Data',response.data);
//       Alert.alert(response.data)
//     })
//     .catch((err) => {
//       console.log('err', err);
//     })
// }
