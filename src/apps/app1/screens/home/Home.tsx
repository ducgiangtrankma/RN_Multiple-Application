import React, {FC} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>Home screen application 1</Text>
    </SafeAreaView>
  );
};
