import React, {useState} from 'react';
import Header from '../components/Header';
import CreatePDFMenu from '../components/CreatePDFMenu';
import {StyleSheet, View} from 'react-native';
import {Tab} from 'react-native-elements';
import {COLORS} from '../styles/Colors';
import CreationsList from '../components/CreationsList';
import HomeTabs from '../navigation/HomeTabs';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <View style={styles.root}>
      <Header />
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
