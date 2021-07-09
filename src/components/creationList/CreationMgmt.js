import {getWorkingDirectory} from '../Utility';
import Share from 'react-native-share';
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
    Share.open({
      url: 'file://' + fullPath,
      type: 'document/pdf',
    });
  } catch (error) {
    console.error('Error::CreationMgmt::Error while sharing');
    console.error('Error::CreationMgmt::' + error);
  }
}
