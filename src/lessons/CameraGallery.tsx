/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CameraGallery = () => {
  const [selected, setSelected] = useState('');
  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      console.log(result);
      setSelected(result.assets[0]?.uri);
    } catch (error) {
      console.log('Error happens by opening the gallery, ', error);
    }
  };

  const openCamera = async () => {
    try {
      const result = await launchCamera({ mediaType: 'photo' });
      console.log(result);
      setSelected(result.assets[0]?.uri);
    } catch (error) {
      console.log('Error happens by opening the camera, ', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, color: 'white' }} onPress={openGallery}>
        Open Gallery
      </Text>
      <Text style={{ fontSize: 20, color: 'white' }} onPress={openCamera}>
        Open Camera
      </Text>
      <Image
        source={{ uri: selected }}
        style={{ height: 250, width: 250, borderRadius: 8 }}
      />
    </View>
  );
};

export default CameraGallery;

const styles = StyleSheet.create({});
