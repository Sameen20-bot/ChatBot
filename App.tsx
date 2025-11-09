/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNotification } from './src/notifications/useNotification';
import BootSplash from 'react-native-bootsplash';
import CameraGallery from './src/lessons/CameraGallery';
import { useEffect } from 'react';

function App() {
  useNotification();
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaProvider>
      <CameraGallery />
    </SafeAreaProvider>
  );
}

export default App;
