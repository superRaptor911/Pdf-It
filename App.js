import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';

const App = () => {
  return (
    <View style={styles.root}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
