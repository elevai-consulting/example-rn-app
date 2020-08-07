import Amplify from '@aws-amplify/core';
import { DataStore } from '@aws-amplify/datastore';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Movie } from '~models';

import awsconfig from './src/aws-exports';
import styles from './styles';

Amplify.configure(awsconfig);

const initializeApp = async () => {};

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [movieName, setMovieName] = useState<string>();
  const [movieDescription, setMovieDescription] = useState<string>();
  const [result, setResult] = useState<string>();

  const saveMovie = async () => {
    try {
      if (movieDescription) {
        console.log(`Saving Movie '${movieName}' with description: ${movieDescription}`);

        await DataStore.save(
          new Movie({
            name: movieName,
            description: movieDescription,
          })
        );
      } else {
        console.log(`Saving Movie '${movieName}' without description.`);

        await DataStore.save(
          new Movie({
            name: movieName,
          })
        );
      }

      setResult('Movie saved locally in DataStore');
    } catch (error) {
      setResult(`Failed to save movie locally in DataStore: ${error}`);
    }
  };

  const clearResult = () => {
    setResult(null);
  };

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
      <Text style={styles.heading}>{'Demo: aws-amplify/amplify-js #6453'}</Text>
      <View style={styles.fieldRow}>
        <View style={styles.fieldLabel}>
          <Text style={styles.fieldLabelText}>{'Movie Name'}</Text>
        </View>
        <TextInput
          value={movieName}
          onChangeText={setMovieName}
          onFocus={clearResult}
          style={styles.fieldInput}
        />
      </View>
      <View style={styles.fieldRow}>
        <View style={styles.fieldLabel}>
          <Text style={styles.fieldLabelText}>{'Movie Description'}</Text>
        </View>
        <TextInput
          value={movieDescription}
          onChangeText={setMovieDescription}
          onFocus={clearResult}
          style={styles.fieldInput}
        />
      </View>
      <Button title="Press to Save" onPress={saveMovie} />
      <View style={styles.result}>{result && <Text style={styles.resultText}>{result}</Text>}</View>
    </View>
  );
};

export default App;
