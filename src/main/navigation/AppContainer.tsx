import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {} from 'react-native';
import {CommApp} from '../../apps/root/index';
const Stack = createNativeStackNavigator();
export const AppContainer: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="COMM_APP" component={CommApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
