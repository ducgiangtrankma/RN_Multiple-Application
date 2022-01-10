import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface HeaderProps {}
export const Header: FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
