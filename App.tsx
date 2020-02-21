import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Coins from './src';

const App = () => {
  return (
    <SafeAreaProvider>
      <Coins />
    </SafeAreaProvider>
  );
};

export default App;
