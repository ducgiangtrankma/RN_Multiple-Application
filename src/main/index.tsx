import React, {FC} from 'react';
import {} from 'react-native';
import {AppContainer} from './navigation/AppContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
interface AppProps {}
export const App: FC<AppProps> = ({}) => {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
};
