import Amplify from '@aws-amplify/core';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import awsconfig from './src/aws-exports';
import styles from './styles';

Amplify.configure(awsconfig);

const initializeApp = async () => {};

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  if (!isInitialized) {
    return (
      <AppLoading
        startAsync={initializeApp}
        onFinish={() => setIsInitialized(true)}
        onError={alert}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>{'Demo App'}</Text>
    </View>
  );
};

export default App;
