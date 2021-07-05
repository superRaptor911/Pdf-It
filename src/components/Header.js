import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../styles/Colors';

const Header = () => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.textWhite}>PDF</Text>
        <Text style={styles.textBlack}>it</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primaryLight,
    height: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 30,
  },
  textWhite: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 36,
    lineHeight: 54,
    color: '#FFFFFF',
  },
  textRed: {
    color: 'red',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 54,
  },
  textBlack: {
    color: 'black',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 54,
  },
});

export default Header;
