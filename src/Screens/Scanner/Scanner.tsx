import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Button, Image, Text} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const Scanner = () => {
  const devices = useCameraDevices();
  const device = devices.back || devices.find(d => d.position === 'back');
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const requestPermissions = async () => {
      await Camera.requestCameraPermission();
    };
    requestPermissions();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({flash: 'off'});
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };

  if (!device)
    return (
      <View style={styles.loading}>
        <Text>Loading Camera...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <>
        <View style={{zIndex: 1, height: '100%'}}>
          <Camera
            style={styles.camera}
            device={device}
            isActive={true}
            photo={true}
            ref={cameraRef}
          />
        </View>
        <Image
          source={require('../..//Images/scanner.png')}
          style={{
            position: 'absolute',
            zIndex: 2,
            alignSelf: 'center',
            marginTop: '50%',
          }}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  camera: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0.5,
    width: '100%',
    height: '9%',
    backgroundColor: 'black',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '95%',
    // resizeMode: 'contain',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    position: 'absolute',
  },
});

export default Scanner;
