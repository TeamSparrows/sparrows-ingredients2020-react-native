import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Image, Text, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class PhotoScreen extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
    }
    this.sendImage = this.sendImage.bind(this)
  }

  sendImage() {
    var imgUri = this.state.image

  }

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Take a photo of the label you'd like to analyze</Text>
        <Button
          title="Take a photo"
          onPress={this._shoot}
        />
        {image && <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />}

        <Button
          title="Take a photo"
          onPress={this.sendImage}
        />
      </View>
    );
  }

  _shoot = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
