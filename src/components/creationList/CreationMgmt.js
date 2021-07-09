import {getWorkingDirectory} from '../Utility';
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

export function sharePdf(fileName) {
  const fullPath = getWorkingDirectory() + '/' + fileName;
}
