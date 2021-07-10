import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {clearCache} from './ImageProcessing';

const ClearAllButton = ({setList}) => {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => {
        setList([]);
        clearCache();
      }}>
      <Text style={styles.text}>Clear All</Text>
      <Icon name="chevron-forward-outline" type="ionicon" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 2,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 30,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#303030',
  },
});

export default ClearAllButton;
