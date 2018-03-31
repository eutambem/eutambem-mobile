import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import CreateReport from './app/screens/CreateReport';
import PrivacyPolicy from './app/screens/PrivacyPolicy';
import logo from './app/img/logo.png';
import Home from './app/screens/Home';
import PlaceScreen from './app/screens/PlaceScreen';
import { GREEN, BLACK } from './app/styles';

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '80%',
  },
  card: {
    backgroundColor: '#ffffff',
  },
});

const App = StackNavigator({
  Home: { screen: Home },
  CreateReport: { screen: CreateReport },
  PrivacyPolicy: { screen: PrivacyPolicy },
  PlaceScreen: { screen: PlaceScreen },
}, {
  navigationOptions: {
    headerTitle: <Image style={styles.logo} source={logo} resizeMode="contain" />,
    headerTintColor: GREEN,
    headerTitleStyle: { color: BLACK },
  },
  cardStyle: styles.card,
});

export default App;
