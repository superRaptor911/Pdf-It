import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {COLORS} from '../styles/Colors';

const About = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Icon
        name="chevron-back-outline"
        type="ionicon"
        size={34}
        containerStyle={styles.icon}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <View style={styles.line} />
        <Text style={styles.text}>
          Welcome to PDFyit, a free and open source app where you can covert
          images directly to PDF format which can be saved and shared
        </Text>
        <Text style={styles.subTitile}>Devs:</Text>
        <Text style={styles.text2}>Aaditya Aravind(coding)</Text>
        <Text style={styles.text2}>Syam Suresh p c(designing)</Text>
        <View style={styles.space} />
        <Text style={styles.subTitile}>Version:</Text>
        <Text style={styles.text2}>1.00 V</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgLight,
    paddingHorizontal: 20,
  },
  line: {
    height: 0,
    borderWidth: 2,
    borderColor: 'rgba(48, 48, 48, 0.2)',
    borderStyle: 'solid',
  },
  icon: {
    width: 32,
    marginTop: 32,
    marginBottom: 4,
  },
  container: {
    backgroundColor: COLORS.primaryLight,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 54,
    color: '#303030',
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 60,
  },
  subTitile: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    textDecorationLine: 'underline',
    color: '#303030',
    marginBottom: 4,
  },
  text2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    color: '#303030',
  },
  space: {
    marginTop: 20,
  },
});

export default About;
