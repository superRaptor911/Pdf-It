import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {COLORS} from '../styles/Colors';

const NameCreationPopup = ({visible, setVisible, convertFunc}) => {
  const [text, setText] = useState('output.pdf');
  return (
    <Overlay
      isVisible={visible}
      overlayStyle={styles.root}
      onBackdropPress={() => {
        setVisible(!visible);
      }}>
      <Text style={styles.title}>SAVE PDF AS</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <TouchableOpacity
        onPress={() => {
          convertFunc(text);
          setVisible(!visible);
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SAVE</Text>
        </View>
      </TouchableOpacity>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 350,
    height: 220,
    backgroundColor: COLORS.secondaryLight,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 27,
    color: '#FFFFFF',
    marginLeft: 33,
    marginTop: 24,
  },
  input: {
    backgroundColor: '#F6F6F6',
    padding: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    width: '80%',
    marginTop: 10,
    marginLeft: 33,
    fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 33,
    color: '#000000',
  },
  button: {
    width: 100,
    height: 44,
    backgroundColor: '#E0EBF0',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 33,
    marginTop: 32,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 21,
    lineHeight: 31,
    color: '#000000',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
});

export default NameCreationPopup;
