import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {App, AppType, ListApp} from './HardData';
interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  const navigation = useNavigation();
  const navigateFromApp = (app: App) => {
    if (app.route) {
      if (app.type === AppType.LINK) {
        Linking.openURL(app.route);
      } else if (app.type === AppType.NAVIGATE) {
        navigation.navigate(app.route);
      }
    }
  };
  return (
    <SafeAreaView>
      <Text style={styles.title}>Router application</Text>
      <View style={styles.container}>
        {ListApp.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.menuBtn}
              onPress={() => navigateFromApp(e)}>
              <Text>{e.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuBtn: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
