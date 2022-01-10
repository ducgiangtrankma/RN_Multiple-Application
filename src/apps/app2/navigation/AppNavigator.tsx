import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home/Home';

const App2Stack = createNativeStackNavigator();
export const App2: React.FunctionComponent = () => {
  return (
    <>
      <App2Stack.Navigator>
        <App2Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeApp2"
          component={Home}
        />
      </App2Stack.Navigator>
    </>
  );
};
