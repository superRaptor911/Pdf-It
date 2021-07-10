import {PermissionsAndroid} from 'react-native';
export const FOLDER_NAME = 'pdfIt';

const RNFS = require('react-native-fs');

export const getRWPermission = async () => {
  try {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'NEED READ PERMISSION',
        message: 'This app needs read and write permission to work',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Write permission granted');
    } else {
      console.log('Write permission denied');
    }

    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'NEED READ PERMISSION',
        message: 'This app needs read and write permission to work',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('READ permission granted');
    } else {
      console.log('READ permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getCameraPermission = async () => {
  try {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'NEED CAMERA PERMISSION',
        message: 'For lol',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('CAMERA permission granted');
    } else {
      console.log('CAMERA permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function sortStringNums(data) {
  let newArray = [];
  for (let i of data) {
    const num = parseInt(i, 10);
    if (num) {
      newArray.push(String(num));
    }
  }

  newArray.sort((a, b) => {
    return a - b;
  });
  return newArray;
}

export function getExtension(filename) {
  return filename.split('.').pop();
}

export function getWorkingDirectory() {
  const workingDir = RNFS.ExternalStorageDirectoryPath + '/' + FOLDER_NAME;
  return workingDir;
}

export function getRandomString() {
  return '?random=' + Math.random().toString(36).substring(7);
}

export function bytesToHumanReadable(bytes) {
  if (bytes > 1000000) {
    bytes = parseFloat(bytes / 1000000).toFixed(2) + ' M';
  } else if (bytes > 1000) {
    bytes = parseFloat(bytes / 1000).toFixed(2) + ' K';
  }

  return bytes;
}

export function dateToTime(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();

  let text = 'AM';
  if (hour > 12) {
    hour = hour - 12;
    text = 'PM';
  }

  if (hour == 0) {
    hour = 12;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return `${hour}:${minutes}${text}`;
}

export function getDDMM(date) {
  let day = date.getDate();
  let month = date.getMonth();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

  return `${day}/${month}`;
}

export function compareDatesDesc(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
}
