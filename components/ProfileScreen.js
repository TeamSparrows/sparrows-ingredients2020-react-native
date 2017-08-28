import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


export default class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    }
    this.submitEmail = this.submitEmail.bind(this);
  }
  submitEmail(e) {
    e.preventDefault();
    var email = this._email.value
    var data = { email }
    this.setState(data)
    axios.post('/api/test-email', data)
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.log('err', err);
    })
  }
  render() {
    return <Text>This is Profile Screen!</Text>
  }
}
