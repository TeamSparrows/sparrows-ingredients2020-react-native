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
      allergy : []
    };
  }

  _loadData(text) {
    this.setState({
      text : text
    });
  }

  _onPressButton(text) {
    this.setState({
      allergy : this.state.allergy.concat(text)
    });
    console.log('This is the data variable line 24:',this.state.allergy);
  }

  _addToDatabase() {
    var data = {};
    data.username = 'd@d.com';
    data.allergy = this.state.allergy;
    console.log('This is the database data',data);
    axios.post(`${address}:9000/api/allergies/`, {data})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
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
            title="Press Me"
          />
          <Text>Local  : {this.state.text}</Text>
          <Button
            onPress={() => this._addToDatabase()}
            color="#841584"
            title="Add to MyList"
          />
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
