// import React, { Component } from 'react';
// import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';
// import { ImagePicker } from 'expo';
//
// export default class ProfileScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//     }
//     this.submitEmail = this.submitEmail.bind(this);
//   }
//
//   postUser() {
//     var data = {
//       email: this.state.email
//     }
//     axios.post(`${address}:9000/api/ingredients/`, {data})
//     .then((res) => {
//       var result = {
//         searchResultName: res.data.name,
//         searchResultLink: res.data.link || ''
//       }
//       console.log('result!!!!!!!', result);
//       this.setState(result);
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
//
//
//   submitEmail(e) {
//     e.preventDefault();
//     var email = this._email.value
//     var data = { email }
//     this.setState(data)
//     axios.post('/api/test-email', data)
//     .then((res) => {
//       console.log('res', res);
//     })
//     .catch((err) => {
//       console.log('err', err);
//     })
//   }
//   render() {
//     return(
//       <View style={{flex:1}}>
//         <TextInput>
//
//         </TextInput>
//         <Button title="Post User Email" onPress={this.postUser} />
//       </View>
//     )
//   }
// }



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


export default class ProfileScreen extends Component {
  // state = {
  //   result: null,
  // };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.enterText = this.enterText.bind(this);
    this.postUser = this.postUser.bind(this);
    this.handlePress = this.handlePress.bind(this);
    // this.renderResult = this.renderResult.bind(this);
  }

  postUser() {
    let email = this.state.email;
    let data = { email };
    // axios.get(`${address}:9000/api/test`)
    // axios.get(`${address}:9000/api/ingredients/${search}`)
    axios.post(`${address}:9000/api/findOrCreateUser`, {data})
    .then((res) => {
      console.log('user email res.data', res.data);
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

  // renderResult() {
  //   var wasClicked = this.state.buttonWasClicked
  //     return (
  //       this.state.searchResultLink
  //         ? <View>
  //             <Text>{  this.state.searchResultName + ' is harmful do not consume '}</Text>
  //             <TouchableOpacity
  //               onPress={this.handlePress}
  //               style={styles.helpLink}>
  //               <Text style={styles.helpLinkText}>
  //                 {`Click here for more info on ${this.state.searchResultName}!`}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         : <Text>{this.state.searchResultName}</Text>
  //     )
  //
  // }
  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.hi} >Enter your email</Text>
        <TextInput
          // style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          placeholder='Enter email...'
          onSubmitEditing={this.postUser}
          autoCorrect={true}
          keyboardType="email-address"
          blurOnSubmit={true}
          keyboardAppearance="dark"
          placeholderTextColor="lightblue"
          returnKeyType="search"
        />
        <Button title="Enter Search" onPress={this.postUser} />
        <View><Text>{this.state.email}</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
