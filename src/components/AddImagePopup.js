import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import {COLORS} from '../styles/Colors';
import {getCameraPermission, getRWPermission} from './Utility';

const AddImagePopup = ({visible, setVisible, setSelection}) => {
  getRWPermission();
  getCameraPermission();

  return (
    <Overlay
      isVisible={visible}
      overlayStyle={styles.root}
      onBackdropPress={() => {
        setVisible(!visible);
      }}>
      <Text style={styles.title}>Choose</Text>
      <View style={styles.underline} />
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setSelection(1);
            }}>
            <View style={styles.iconCircle}>
              <Icon
                name="image"
                color={COLORS.secondaryLight}
                type="ionicon"
                containerStyle={styles.icon}
                size={82}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.buttonTitle}>Gallery</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              setSelection(2);
            }}>
            <View style={styles.iconCircle}>
              <Icon
                name="camera"
                color={COLORS.secondaryLight}
                type="ionicon"
                containerStyle={styles.icon}
                size={82}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.buttonTitle}>Camera</Text>
        </View>
      </View>
      <Text style={styles.note}>
        *You can select multiple images from gallery
      </Text>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 350,
    height: 270,
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
  underline: {
    width: 280,
    height: 0,
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 0.3)',
    borderStyle: 'solid',
    marginLeft: 32,
    marginTop: 2,
    marginBottom: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 18,
    marginRight: 18,
  },
  iconCircle: {
    width: 128,
    height: 128,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
    borderBottomRightRadius: 64,
    borderBottomLeftRadius: 64,
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4,
  },
  note: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
  },
});

export default AddImagePopup;
