import {getWorkingDirectory} from '../Utility';
import Share from 'react-native-share';
import FileViewer from 'react-native-file-viewer';
const RNFS = require('react-native-fs');

export async function deletePdf(fileName) {
  const fullPath = getWorkingDirectory() + '/' + fileName;
  try {
    await RNFS.unlink(fullPath);
  } catch (e) {
    console.error('Error::CreationMgmt::Failed to delete ' + fileName);
    console.log(e);
  }
}

export async function sharePdf(fileName) {
  const fullPath = getWorkingDirectory() + '/' + fileName;
  try {
    await Share.open({
      url: 'file://' + fullPath,
      type: 'document/pdf',
    });
  } catch (error) {
    console.error('Error::CreationMgmt::Error while sharing');
    console.error('Error::CreationMgmt::' + error);
  }
}

export async function openPdf(fileName) {
  try {
    const fullPath = getWorkingDirectory() + '/' + fileName;
    FileViewer.open(fullPath, {showOpenWithDialog: true});
  } catch (e) {
    console.error('Error::CreationMgmt::Failed to open ' + fileName);
    console.error('Error::CreationMgmt::' + e);
  }
}
