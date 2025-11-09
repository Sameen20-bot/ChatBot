import { Button, StyleSheet, Text, View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react';

const GoogleSigninLesson = () => {
  GoogleSignin.configure({
    webClientId:
      '31882522129-4rn80vps9lv5fhogcui8abhadqbe1a4g.apps.googleusercontent.com',
  });

  const [userInfo, setUserInfo] = useState(null);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log('Response: ', JSON.stringify(response.data, null, 3));
        setUserInfo(response.data);
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, World!</Text>
      <Button title="On SignIn Google" onPress={googleSignIn} />
    </View>
  );
};

export default GoogleSigninLesson;

const styles = StyleSheet.create({});
