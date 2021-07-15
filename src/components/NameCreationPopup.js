import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Overlay, Slider} from 'react-native-elements';
import {COLORS} from '../styles/Colors';

const SaveAsPopup = ({visible, setVisible, convertFunc}) => {
  const [text, setText] = useState('output.pdf');
  const [qualityLevel, setQualityLevel] = useState(3);

  return (
    <Overlay
      isVisible={visible}
      overlayStyle={styles.root}
      onBackdropPress={() => {
        setVisible(!visible);
      }}>
      <Text style={styles.title}>SAVE PDF AS</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Text style={styles.titleCompression}>Quality Level</Text>
      <Slider
        value={qualityLevel}
        onValueChange={setQualityLevel}
        maximumValue={5}
        minimumValue={1}
        step={1}
        trackStyle={styles.sliderTrack}
        minimumTrackTintColor={COLORS.primaryLight}
        thumbTintColor={COLORS.primaryLight}
        thumbStyle={styles.sliderThumb}
      />
      <TouchableOpacity
        onPress={() => {
          convertFunc(text, qualityLevel);
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
    backgroundColor: COLORS.secondaryLight,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
    paddingLeft: 33,
    paddingRight: 33,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 27,
    color: '#FFFFFF',
    marginTop: 24,
  },
  input: {
    backgroundColor: '#F6F6F6',
    padding: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginTop: 10,
    fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 33,
    color: '#000000',
  },
  button: {
    height: 44,
    backgroundColor: '#E0EBF0',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
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
  titleCompression: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 27,
    color: '#FFFFFF',
    marginTop: 24,
  },
  sliderTrack: {
    backgroundColor: COLORS.primaryLight,
  },
  sliderThumb: {
    height: 20,
    width: 20,
  },
});

export default SaveAsPopup;
