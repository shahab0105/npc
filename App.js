/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reloadkk,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! REACT-NAVIGATOR INSTALLED</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}*/



class HomeSwiper extends React.Component {
  render() {

    return (
      <Swiper horizontal={true} loop={false}>
        <View>
          <ImageBackground source={require('./assets/swiper1.jpg')} style={{
            width: '100%', height: '100%', justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={{ position: 'absolute', zIndex: 5, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.7 }}></View>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 6,
              position: 'absolute'
            }}>

              <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
                opacity: 1,


              }}>Create A Profile</Text>

            </View>

          </ImageBackground>
        </View>


        <View>
          <ImageBackground source={require('./assets/swiper2.jpg')} style={{
            width: '100%', height: '100%', justifyContent: 'center',
            alignItems: 'center',
          }} >
            <View style={{ position: 'absolute', zIndex: 5, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.7 }}></View>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 6,
              position: 'absolute'
            }}>

              <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
                opacity: 1,


              }}>Promote Yourself</Text>

            </View>
          </ImageBackground>
        </View>


        <View>
          <ImageBackground source={require('./assets/swiper3.jpg')} style={{
            width: '100%', height: '100%', justifyContent: 'center',
            alignItems: 'center',
          }} >
            <View style={{ position: 'absolute', zIndex: 5, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.7 }}></View>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 6,
              position: 'absolute'
            }}>

              <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
                opacity: 1,


              }}>Get International Exposure</Text>

            </View>
          </ImageBackground>
        </View>


      </Swiper>

    );
  }
}

class Splash extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SwipeSlider');
    }, 1500);


  }




  render() {


    return (
      <View>
        <ImageBackground source={require('./assets/Black-bg.jpg')} style={{

          width: "100%", height: "100%", justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('./assets/logo.png')} style={{ resizeMode: 'center' }}></Image>
        </ImageBackground >
      </View >
    );
  }
}
class ScreenThree extends React.Component {
  render() {

    return (
      <View>
        <Text>Screen Three</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash, navigationOptions: () => ({ header: null }) },
  SwipeSlider: { screen: HomeSwiper, navigationOptions: () => ({ header: null }) }
  //,Home3: { screen: ScreenThree }
},
  { initialRouteName: "Splash" }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    //   SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
    //return <Text>"hi"</Text>;
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
