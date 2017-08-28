import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    }
    this.submitEmail = this.submitEmail.bind(this);
  }

  postUser() {
    var string = this.state.text
    let data = {email: string}
    let fetchData = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
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
    return <Button title="Post User Email" onPress={this.postUser} />
  }
}
