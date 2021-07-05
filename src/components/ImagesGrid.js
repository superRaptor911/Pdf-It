import React from 'react';
import {Fragment} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';

const ImagesGrid = ({imagesList, setImagesList}) => {
  console.log('renderi ng images');
  return (
    <Fragment>
      {imagesList &&
        imagesList.map((item, id) => (
          <View key={id} style={styles.item}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => {
                setImagesList(
                  imagesList.filter(itm => {
                    return itm !== item;
                  }),
                );
              }}>
              <Image source={{uri: 'file://' + item}} style={styles.img} />
            </TouchableOpacity>
          </View>
        ))}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 30,
    fontSize: 18,
    color: '#565656',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 15,
    marginBottom: 40,
    elevation: 8,
  },
  img: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  opacity: {
    backgroundColor: 'red',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

export default ImagesGrid;
