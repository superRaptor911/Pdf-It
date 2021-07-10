import React from 'react';
import Header from '../components/Header';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../styles/Colors';
import HomeTabs from '../navigation/HomeTabs';

const Home = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Header navigation={navigation} />
      <HomeTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  tabItem: {
    backgroundColor: COLORS.secondaryLight,
  },
  tabItemText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  indicator: {
    backgroundColor: 'white',
  },
});
export default Home;
