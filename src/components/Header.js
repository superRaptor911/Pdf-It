import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {COLORS} from '../styles/Colors';

const Header = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.textWhite}>PDF</Text>
        <Text style={styles.textBlack}>it</Text>
      </View>
      <Icon
        name="menu"
        containerStyle={styles.icon}
        size={32}
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primaryLight,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginLeft: 20,
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
