import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';

const requestPermision = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('Notifications permision granted.');
  } else {
    console.log('Notifications permision denied.');
  }
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token: ', token);
  } catch (error) {
    console.error('Failed to get token: ', error);
  }
};

export const useNotification = () => {
  useEffect(() => {
    requestPermision();
    getToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const messageBody = remoteMessage.notification?.body;
      const messageTitle = remoteMessage.notification?.title;
      Alert.alert(messageTitle, messageBody);
    });
    return unsubscribe;
  }, []);
};
