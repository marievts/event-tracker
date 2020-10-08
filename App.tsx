import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'FiraSans_400Regular': require('./assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans_700Bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    'Montserrat_300Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat_400Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat_500Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Month</Text>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81A7B4',
    color: '#57606F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontFamily: 'FiraSans_700Bold',
    fontSize: 30,
  },
});
