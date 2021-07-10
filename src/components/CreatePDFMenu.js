import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AddImagePopup from './AddImagePopup';
import ClearAllButton from './ClearAllButton';
import {
  clearCache,
  generatePDF,
  loadImageFromGallery,
  takePhoto,
} from './ImageProcessing';
import ImagesGrid from './ImagesGrid';
import LoadingPopup from './LoadingPopup';
import NameCreationPopup from './NameCreationPopup';
import {getRandomString} from './Utility';

const getImages = async mediObjs => {
  const RNFS = require('react-native-fs');
  let images = [];
  for (let i of mediObjs) {
    const filePath = (await RNFS.stat(i.uri)).originalFilepath;
    // console.log(RNFS.CachesDirectoryPath);
    console.log(filePath);
    images.push(filePath);
  }
  return images;
};

const genConvertButton = showPopup => {
  return (
    <View style={styles.convertButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          showPopup(true);
        }}>
        <View style={styles.convertButton}>
          <Icon
            style={styles.icon}
            name="file-pdf"
            type="material-community"
            size={60}
            color="white"
          />
          <Text style={styles.convertButtonText}>PDF-IT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CreatePDFMenu = ({navigation}) => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [images, setImages] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [nameCreationPopup, setNameCreationPopup] = useState(false);
  const [imageSource, setImageSource] = useState(0);
  const [loadingVisible, setLoadingVisible] = useState(false);

  const convertTOPDf = outputFileName => {
    console.log('Generating PDF');
    setLoadingVisible(true);
    generatePDF(images, outputFileName)
      .then(() => {
        navigation.jumpTo('Creations', {reload: getRandomString()});
      })
      .finally(() => {
        setLoadingVisible(false);
        // clearCache();
      });
  };

  useEffect(() => {
    if (selectedImages) {
      getImages(selectedImages).then(imgs => {
        setImages(images.concat(imgs));
        setSelectedImages(null);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImages]);

  useEffect(() => {
    if (imageSource !== 0) {
      if (imageSource === 1) {
        loadImageFromGallery(setSelectedImages);
      } else {
        takePhoto(setSelectedImages);
      }
      setImageSource(0);
      setPopupVisible(false);
    }
  }, [imageSource]);

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Photos</Text>
      <View style={styles.underline} />
      <ClearAllButton setList={setImages} />
      <ScrollView
        contentContainerStyle={styles.gridContainer}
        style={styles.scrollView}>
        <TouchableOpacity
          onPress={() => {
            setPopupVisible(true);
          }}>
          <View style={styles.addItem}>
            <Icon
              name="add-circle-outline"
              size={78}
              color="white"
              containerStyle={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <ImagesGrid imagesList={images} setImagesList={setImages} />
      </ScrollView>
      <AddImagePopup
        visible={popupVisible}
        setVisible={setPopupVisible}
        setSelection={setImageSource}
      />
      {images && images.length > 0 && genConvertButton(setNameCreationPopup)}
      <NameCreationPopup
        visible={nameCreationPopup}
        setVisible={setNameCreationPopup}
        convertFunc={convertTOPDf}
      />
      <LoadingPopup visible={loadingVisible} />
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
  scrollView: {
    marginTop: 15,
    marginLeft: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 0,
  },
  addItem: {
    width: 104,
    height: 104,
    backgroundColor: '#669DB3',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginBottom: 40,
    marginLeft: 15,
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  convertButtonContainer: {
    position: 'absolute',
    left: '75%',
    top: '75%',
  },
  convertButton: {
    width: 66,
    height: 82,
    backgroundColor: '#669DB3',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    elevation: 4,
  },
  convertButtonText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 19,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default CreatePDFMenu;
