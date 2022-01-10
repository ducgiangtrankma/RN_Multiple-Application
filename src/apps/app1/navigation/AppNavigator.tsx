import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home/Home';

const App1Stack = createNativeStackNavigator();
export const App1: React.FunctionComponent = () => {
  return (
    <>
      <App1Stack.Navigator>
        <App1Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeApp1"
          component={Home}
        />
      </App1Stack.Navigator>
    </>
  );
};
