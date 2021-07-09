import React from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import {LinearProgress, Overlay} from 'react-native-elements';
import {COLORS} from '../styles/Colors';

const LoadingPopup = ({visible}) => {
  return (
    <Overlay isVisible={visible} overlayStyle={styles.root}>
      <LinearProgress
        style={styles.LinearProgress}
        color={COLORS.primaryLight}
      />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 350,
    backgroundColor: COLORS.secondaryLight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  LinearProgress: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default LoadingPopup;
