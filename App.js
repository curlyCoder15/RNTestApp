/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NestedButton } from './src/nestedButton'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [email, setEmail] = useState('')

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.containerStyle}>
        <TextInput
          testID='email'
          placeholder='Enter some UNICODE characters'
          inputStyle={styles.inputStyle}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          labelTx="loginScreen.emailFieldLabel"
          placeholderTx="loginScreen.emailFieldPlaceholder"

        />
      </View>
      <NestedButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    alignSelf: "stretch",
    fontSize: 16,
    height: 24,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  containerStyle: {
    margin: 5,
    borderWidth: 1,
    paddingVertical: 10
  }
});

export default App;
