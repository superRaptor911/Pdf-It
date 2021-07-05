import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import {COLORS} from '../styles/Colors';
import {getExtension, getWorkingDirectory} from './Utility';

const getFiles = async () => {
  const RNFS = require('react-native-fs');
  const workingDir = getWorkingDirectory();
  const files = await RNFS.readdir(workingDir);
  const pdfs = files.filter(item => {
    return getExtension(item) === 'pdf';
  });

  let data = [];

  for (let i of pdfs) {
    const path = workingDir + '/' + i;
    const stat = await RNFS.stat(path);

    const hour = stat.mtime.getHours();
    const minutes = stat.mtime.getMinutes();

    const time = `${hour}:${minutes}`;
    data.push({name: i, time: time, size: stat.size});
  }

  return data;
};

const generateCreationList = data => {
  return (
    <View>
      {data.map((item, id) => (
        <View key={id} style={styles.item}>
          <Image style={styles.image} />
          <View style={styles.detailsContainer}>
            <View style={styles.itemInfoContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>

              <View style={styles.iconContainer}>
                <Icon name="share-social" type="ionicon" size={28} />
                <Icon name="trash-bin" type="ionicon" size={28} />
              </View>
            </View>
            <View style={styles.line} />

            <View style={styles.itemInfoContainer}>
              <Text style={styles.dateText}>{item.time}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const CreationsList = () => {
  const [creationsList, setCreationsList] = useState();
  getFiles().then(data => {
    setCreationsList(generateCreationList(data));
  });

  console.log('Rendering list');
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Creations</Text>
      <View style={styles.underline} />
      <ScrollView>{creationsList}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 32,
    flex: 1,
  },
  text: {
    marginLeft: 30,
    fontSize: 18,
    color: '#565656',
  },
  underline: {
    width: 164,
    height: 0,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: 'rgba(86, 86, 86, 0.25)',
    borderStyle: 'solid',
  },
  item: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.primaryLight,
    marginTop: 18,
    marginBottom: 18,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    width: 104,
    height: 104,
  },
  detailsContainer: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 36,
    color: '#303030',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  line: {
    width: 221,
    height: 0,
    borderWidth: 2,
    borderColor: 'rgba(48, 48, 48, 0.23)',
    borderStyle: 'solid',
  },
  dateText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 19,
    color: '#303030',
  },
});

export default CreationsList;
