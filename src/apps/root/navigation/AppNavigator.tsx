import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home/Home';
import {CommAppScreen} from '../utils/const';
import {App1} from '../../app1/index';
import {App2} from '../../app2/index';

const CommAppStack = createNativeStackNavigator();
export const CommApp: React.FunctionComponent = () => {
  return (
    <>
      <CommAppStack.Navigator>
        <CommAppStack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeComm"
          component={Home}
        />
        <CommAppStack.Screen
          name={CommAppScreen.App1}
          component={App1}
          options={{headerTitle: '', headerShown: false}}
        />
        <CommAppStack.Screen
          name={CommAppScreen.App2}
          component={App2}
          options={{headerTitle: '', headerShown: false}}
        />
      </CommAppStack.Navigator>
    </>
  );
};
