/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Toast, { IToast } from './src/Toast';

function App(): JSX.Element {

  const toastRef = useRef<IToast>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Toast ref={toastRef} onHide={handleHide} />
      <TouchableOpacity style={styles.infoButton} onPress={show}>
        <Text style={styles.text}>Info Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.successButton} onPress={showSuccess}>
        <Text style={styles.text}>Success Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.errorButton} onPress={showError}>
        <Text style={styles.text}>Error Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.hideButton} onPress={hide}>
        <Text style={styles.text}>Hide Toast</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  function show() {
    toastRef.current?.hide(() => {
      toastRef.current?.show('Posting...', 'info', 400);
    })
  }

  function hide() {
    toastRef.current?.hide();
  }

  function showSuccess() {
    toastRef.current?.hide(() => {
      toastRef.current?.show('Posted', 'success', 400);
    })
  }

  function showError() {
    toastRef.current?.hide(() => {
      toastRef.current?.show('Ops, something is wrong!', 'error', 400);
    })
  }

  function handleHide() {
    console.log('toast is hidden');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01113b'
  },
  infoButton: {
    backgroundColor: '#0077ed',
    borderRadius: 10,
    width: '80%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  successButton: {
    backgroundColor: '#1f8503',
    borderRadius: 10,
    width: '80%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  errorButton: {
    backgroundColor: '#f00a1d',
    borderRadius: 10,
    width: '80%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  hideButton: {
    backgroundColor: 'grey',
    borderRadius: 10,
    width: '80%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600'
  }
});

export default App;
