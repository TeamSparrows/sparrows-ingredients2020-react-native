// import React from 'react';
// import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import Welcome from './components/welcome';
// import { DrawerNavigator } from 'react-navigation';

// export default class App extends React.Component {
//   componentDidMount() {

//   }
//   getMovieData() {
//     fetch(`${address}:8000/api/test`)
//       .then((response) => {
//         var res = response.json()
//         console.log('res', res);
//         alert(response._bodyText)
//       })
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Welcome />
//         <Text>Hello World!</Text>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Button title="Movie Data" onPress={this.getMovieData.bind(this)} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';


class TextScreen extends React.Component {
  render() {
    return <Text>This is Text Screen</Text>
  }
}

class PhotoScreen extends React.Component {
  render() {
    return <Text>This is Photo Screen</Text>
  }
}
class BarcodeScreen extends React.Component {
  render() {
    return <Text>This is Barcode Screen</Text>
  }
}
class AllergiesScreen extends React.Component {
  render() {
    return <Text>This is Allergies Screen</Text>
  }
}
class ProfileScreen extends React.Component {
  render() {
    return <Text>This is Profile Screen</Text>
  }
}

const MainScreenNavigator = DrawerNavigator({
  Text: { screen: TextScreen },
  Photo: { screen: PhotoScreen },
  Barcode: { screen: BarcodeScreen },
  Allergies: { screen: AllergiesScreen },
  Profile: { screen: ProfileScreen },
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
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
