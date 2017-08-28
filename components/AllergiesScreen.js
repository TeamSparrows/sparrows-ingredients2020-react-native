import React from 'react';
import axios from 'react-native-axios';
const address = require('../address');
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';



export default class AllergiesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text : '',
    };
  }

  _loadData(text) {
    this.setState({
      text : text
    });
  }

  _onPressButton(text) {
    var data = {};
    data.username = 'd@d.com';
    data.allergy = text;
    console.log('This is the database data',data);
    axios.post(`${address}:9000/api/allergies/`, data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log('This is the data variable line 24:',this.state.allergy);
  }


  _showList() {
    axios.get(`${address}:9000/api/allergies/`)
      .then(function (response) {
        console.log('Show me the list', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={{fontSize: 20, height: 40}}
            onChangeText={(text) => this._loadData(text)}
          />
          <Button
            onPress={() => this._onPressButton(this.state.text)}
            color="#841584"
            title="Add to MyList"
          />
          <Text>List Item  : {this.state.text}</Text>
          <Button
            onPress={() => this._showList()}
            color="#841584"
            title="Show Mylist"
          />
      </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
  },
});
