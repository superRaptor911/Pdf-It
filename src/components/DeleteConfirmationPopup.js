import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import {COLORS} from '../styles/Colors';

const DeleteConfirmationPopup = ({
  isVisible,
  setVisible,
  filename,
  deleteFunc,
}) => {
  return (
    <Overlay
      visible={isVisible}
      overlayStyle={styles.root}
      onBackdropPress={() => {
        setVisible(false);
      }}>
      <Text style={styles.title}>Do you want to delete ?</Text>
      <Text style={styles.text}>{filename}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Delete"
          containerStyle={styles.button}
          buttonStyle={{backgroundColor: 'red'}}
          onPress={() => {
            deleteFunc();
            setVisible(false);
          }}
        />
        <View style={styles.space} />
        <Button
          title="Cancel"
          containerStyle={styles.button}
          buttonStyle={{backgroundColor: COLORS.primaryLight}}
          onPress={() => {
            setVisible(false);
          }}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  root: {
    minWidth: '78%',
    maxWidth: '90%',
    backgroundColor: COLORS.secondaryLight,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 18,
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 24,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space: {
    marginLeft: 20,
  },
});

export default DeleteConfirmationPopup;
