import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import {COLORS} from '../styles/Colors';
import {deletePdf, openPdf, sharePdf} from './creationList/CreationMgmt';
import {
  bytesToHumanReadable,
  compareDatesDesc,
  dateToTime,
  getDDMM,
  getExtension,
  getWorkingDirectory,
} from './Utility';

const getFiles = async () => {
  const RNFS = require('react-native-fs');
  const workingDir = getWorkingDirectory();
  let files = [];

  try {
    files = await RNFS.readdir(workingDir);
  } catch (e) {
    /* handle error */
    console.log('Failed to read Files');
    console.log(e);
  }

  const pdfs = files.filter(item => {
    return getExtension(item) === 'pdf';
  });

  let data = [];

  for (let i of pdfs) {
    const path = workingDir + '/' + i;
    const stat = await RNFS.stat(path);

    const time = dateToTime(stat.mtime);
    const unixTime = stat.mtime.getTime();
    const date = getDDMM(stat.mtime);
    data.push({
      name: i,
      time: `${date}    ${time}`,
      size: bytesToHumanReadable(stat.size),
      unixTime: unixTime,
    });
  }

  try {
    data = data.sort((a, b) => {
      return compareDatesDesc(a.unixTime, b.unixTime);
    });
  } catch (e) {
    console.log('Error::CreationsList::' + e);
  }
  return data;
};

const generateCreationList = (data, reRender) => {
  return (
    <View>
      {data.map((item, id) => (
        <View key={id} style={styles.item}>
          <Icon
            style={styles.image}
            name="file-pdf"
            type="material-community"
            size={90}
            color="white"
            onPress={() => {
              openPdf(item.name);
            }}
          />
          <View style={styles.detailsContainer}>
            <View style={styles.itemInfoContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
            </View>

            <View style={styles.itemInfoContainer}>
              <Text style={styles.dateText}>{item.size}</Text>
              <Text style={styles.dateText}>{item.time}</Text>
            </View>
            <View style={styles.line} />

            <View style={styles.iconContainer}>
              <Icon
                name="delete"
                type="material"
                size={28}
                onPress={() => {
                  deletePdf(item.name).then(() => {
                    reRender();
                  });
                }}
              />
              <Icon
                name="share-social"
                type="ionicon"
                size={28}
                containerStyle={styles.icon}
                onPress={() => {
                  sharePdf(item.name);
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const CreationsList = ({route}) => {
  const [creationsList, setCreationsList] = useState();
  const [render, setRender] = useState(0);

  const reRender = () => {
    setRender(render + 1);
    console.log('incrementing');
  };

  useEffect(() => {
    getFiles().then(data => {
      setCreationsList(generateCreationList(data, reRender));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render, route]);

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
    paddingTop: 10,
  },
  itemDark: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.primaryDark,
    marginTop: 18,
    marginBottom: 18,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  image: {},
  detailsContainer: {
    marginLeft: 8,
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
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 22,
    color: '#303030',
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginTop: 10,
    marginBottom: 22,
  },
  icon: {
    marginLeft: 12,
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
