import {launchImageLibrary} from 'react-native-image-picker';
import RNImageToPdf from 'react-native-image-to-pdf';
import {getExtension, getWorkingDirectory} from './Utility';

const RNFS = require('react-native-fs');

export const generatePDF = async (files, outputFileName) => {
  await setupWorkingDirectory();
  const pdfFile = await convertToPDF(files);
  movePdfToWorkingDir(pdfFile, outputFileName);
};

const convertToPDF = async imageList => {
  try {
    const options = {
      imagePaths: imageList,
      name: 'temp.pdf',
      maxSize: {
        width: 1190,
        height: 1684,
      },
      quality: 0.7, // optional compression paramter
    };
    const pdf = await RNImageToPdf.createPDFbyImages(options);
    console.log(pdf.filePath);
    return pdf.filePath;
  } catch (e) {
    console.log(e);
  }
};

const setupWorkingDirectory = async () => {
  try {
    await RNFS.mkdir(getWorkingDirectory());
    return getWorkingDirectory();
  } catch (e) {
    console.log('Fatal Error Setting up Folder');
    console.error(
      'Error::ImageProcessing::Tried to setup folder ' + getWorkingDirectory(),
    );
    console.log(e);
  }
};

const movePdfToWorkingDir = async (pdfFile, outputFileName) => {
  const workingDir = getWorkingDirectory();
  // Make sure that file ends with pdf
  if (getExtension(outputFileName) !== 'pdf') {
    outputFileName = outputFileName + '.pdf';
  }
  // const destFile = workingDir + '/' + (await getNextFileName(workingDir));
  const destFile = workingDir + '/' + outputFileName;

  await RNFS.moveFile(pdfFile, destFile);
};

const getNextFileName = async workingDir => {
  const files = await RNFS.readdir(workingDir);
  console.log('Files are -> ');
  console.log(files);

  let latestFileID = 0;
  for (let i of files) {
    const num = parseInt(i, 10);
    if (num > latestFileID) {
      latestFileID = num;
    }
  }

  return latestFileID + 1 + '.pdf';
};

export const loadImageFromGallery = async setSelectedImage => {
  launchImageLibrary({mediaType: 'photo', selectionLimit: 0}, response => {
    if (response.didCancel) {
      console.log('User cancelled photo picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      setSelectedImage(response.assets);
      // setIsVideoProcessing(true);
    }
  });
};
