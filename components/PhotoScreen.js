import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Image, Text, View } from 'react-native';
import { ImagePicker } from 'expo';
const address = require('../address');
import axios from 'react-native-axios';
export default class PhotoScreen extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      encode: null,
      success: "Success"
    }
    this.sendImage = this.sendImage.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  sendImage() {
    var imgUri = this.state.image
    var data = {
      data_uri: this.state.encode,
      filename: 'pic1.jpg',
      filetype: "image/jpeg",
      username: 'd@d.com'
    }

    console.log('imgUri', imgUri)
    axios.post(`${address}:9000/api/image`, {data})
    .then((res) => {
      // var result = {
      //   searchResultName: res.data.name,
      //   searchResultLink: res.data.link || ''
      // }
      console.log('result from sendImg!!!!!!!', res);
      // this.setState(res);
      console.log('sendImg res.data ',res.data);
      var arrstr = '';
      for (var i = 0; i < res.data.length; i++) {
        arrstr += res.data[i].link + '\n';
      }
      console.log(arrstr);
      Alert.alert(arrstr);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleFile(e) {
    // const reader = new FileReader();
    // console.log('reader', reader);
    // console.log('FileReader', FileReader);
    // const file = e.target.files[0];
    console.log('e', e);
  }

  render() {
    let { image, success } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Take a photo of the label you'd like to analyze</Text>
        <Button
          title="Take a photo"
          onPress={this._shoot}
        />
        <Button
          title="Choose a Photo"
          onPress={this._imageLibrary}
        />
        {image && <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                    //onLoad={this.handleFile}
                  />}
        <Button
          title="Submit"
          onPress={this.sendImage}
        />
      </View>
    );
  }

  _shoot = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    console.log('image result', result);

    if (!result.cancelled) {
      this.setState({ image: result.uri, encode: result.base64 });
    }
  };


  _imageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    //console.log('image result', result);

    if (!result.cancelled) {
      this.setState({ image: result.uri, encode: result.base64 });
      console.log(this.state.image);
    }
  };

}
